import os
import base64
from django.core.files.base import ContentFile
from uuid import uuid4
from django.db import models
from django.utils import timezone
from django.core.validators import RegexValidator
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser
from django.shortcuts import get_object_or_404
from django.core.files.images import ImageFile
from django.apps import apps

from django.shortcuts import get_object_or_404
from django.contrib.auth.models import Group, Permission
from django.core.exceptions import ValidationError
from django.contrib.auth.hashers import is_password_usable, check_password, make_password
from project.settings import base

from .common_models import CommonUserBase

# User Model Manager
class MainUserManager(BaseUserManager):

	def make_full_name(self, first_name, last_name):
		return "{} {}".format(first_name, last_name)

	def create_user(self, *args, **kwargs):
		if not kwargs['email']:
			raise ValueError("User must enter a valid email address")
		if not kwargs['password']:
			raise ValueError("Users must have a valid password")
		print('CreateUser kwargs', kwargs)

		groups_var = kwargs['groups']
		del kwargs['groups']

		user = self.model(**kwargs)
		user.full_name = self.make_full_name(kwargs['first_name'], kwargs['last_name'])
		user.is_active = True

		user.set_password(kwargs['password'])
		userPIN = make_password(kwargs['pin'], salt=None, hasher='default')
		user.pin = userPIN

		user.save(using=self._db)

		objID = User.objects.get(email=kwargs['email'])
		print('CreateUser objID', objID)

		#set groups
		if groups_var:
			user.groups.set(groups_var)

		user.save(using=self._db)

		return user


	def create_superuser(self, *args, **kwargs):
		# Create Superuser using email address as login id
		if not kwargs['email']:
			raise ValueError("User must enter a valid email address")
		if not kwargs['password']:
			raise ValueError("Users must have a valid password")
		superuser = self.create_user(**kwargs)
		superuser.is_admin = True
		superuser.is_staff = True
		superuser.is_superuser = True

		superuser.save(using=self._db)									
		return superuser

# User Model
class User(CommonUserBase):
	pin 				= models.CharField(max_length=250, null=True, 
								blank=True, validators=[RegexValidator(r'^\d{1,4}$')])
	fax 				= models.CharField(max_length=10, null=True, 
								blank=True, validators=[RegexValidator(r'^\d{1,10}$')])
	
	class Meta:
		ordering = ['last_name', 'first_name', 'date_added']
	
	USERNAME_FIELD = 'email'
	REQUIRED_FIELDS = ['first_name', 'last_name']

	objects	= MainUserManager()

	def __str__(self):
		return str(self.email)

	def get_fullname(self):
		return str(self.full_name)


class UserGroup(Group):
# Inherits with name, and ID
# Has Many-to-Many with Permissions
# *Use permissions.set()* for adding permissions to group or use Forward-side
# Need to make a script to auto poolulate group_class e.g. Employee, Customer, Vendor, etc.
	date_added      = models.DateField(verbose_name="date added", auto_now_add=True)
	group_type      = models.CharField(max_length=100, null=True, blank=True)
	group_class     = models.CharField(max_length=100, null=True, blank=True)


#Django Permissions Model 
class UserPermission(Permission):
	#Has ForeignKey to ContentType
	# Inherits with name, content_type(model) and codename (of permission in the model)
	date_added 						= models.DateField(verbose_name="date joined",auto_now_add=True)
	permission_category   = models.CharField(max_length=100, null=True, blank=True)



