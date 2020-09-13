from uuid import uuid4

from django.contrib.auth.models import AbstractBaseUser, Group
from django.core.validators import RegexValidator
from django.db import models
from django.db.models.deletion import DO_NOTHING
from django.utils import timezone


class CommonUserBase(AbstractBaseUser):
	email 				= models.EmailField(verbose_name="email", max_length=60, unique=True)
	username 			= models.CharField(max_length=30, unique=True,blank=True, null=True)
	date_added 		= models.DateTimeField(verbose_name="date added", auto_now_add=True)
	last_login		= models.DateTimeField(verbose_name="last login", auto_now=True)
	is_admin			= models.BooleanField(default=False, blank=True, null=True)
	is_active			= models.BooleanField(default=True, blank=True, null=True)
	is_staff			= models.BooleanField(default=False, blank=True, null=True)
	is_superuser	= models.BooleanField(default=False, blank=True, null=True)
	full_name 		= models.CharField(max_length=200, blank=True, null=True)
	first_name 		= models.CharField(max_length=100)
	last_name 		= models.CharField(max_length=100)
	mobile_phone 	= models.CharField(max_length=10, null=True, 
									blank=True, validators=[RegexValidator(r'^\d{1,10}$')])
	address 			= models.CharField(max_length=200, blank=True, null=True)
	address2 			= models.CharField(max_length=200, blank=True, null=True)
	city 					= models.CharField(max_length=200, blank=True, null=True)
	state 				= models.CharField(max_length=50, blank=True, null=True)
	zip 					= models.CharField(max_length=5, null=True, 
									blank=True, validators=[RegexValidator(r'^\d{1,5}$')])
	country 			= models.CharField(max_length=200, blank=True, null=True)
	bio 					= models.TextField(blank=True, null=True)
	global_id 		= models.UUIDField(primary_key=False, default=uuid4, editable=False)
	groups  			= models.ManyToManyField(Group, related_name="user_groups", blank=True)

	class Meta:
		abstract = True
