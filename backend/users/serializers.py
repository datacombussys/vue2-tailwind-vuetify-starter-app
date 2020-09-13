from django.http import Http404
from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required
from django.core.exceptions import ValidationError
from django.contrib.auth.password_validation import UserAttributeSimilarityValidator, MinimumLengthValidator, CommonPasswordValidator, NumericPasswordValidator
from django.contrib.auth.password_validation import get_password_validators, validate_password, password_validators_help_texts
from django.contrib.auth.hashers import check_password

from rest_framework import serializers
from rest_framework import exceptions

from django.contrib.auth.models import Permission, Group
from django.contrib.contenttypes.models import ContentType
from users.models import User, UserGroup, UserPermission
from drf_base64.fields import Base64ImageField
from .models import User

class ContentTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContentType
        fields = ('__all__')

class BasePermissionSeializer(serializers.ModelSerializer):
    class Meta:
        model = Permission
        fields = ('__all__')

class ExtendedPermissionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserPermission
        fields = ('__all__')

class BaseGroupSerializer(serializers.ModelSerializer):
    permissions_list = BasePermissionSeializer(many=True, read_only=True, source='permissions')
    permissions = serializers.ManyRelatedField(child_relation=serializers.PrimaryKeyRelatedField(queryset=Permission.objects.all(), many=True, allow_null=True), allow_null=True)
    class Meta:
        model = Group
        fields = ('__all__')

class ExtendedGroupSerializer(serializers.ModelSerializer):
    # This requires a custom validate() method
    permissions_list = BasePermissionSeializer(many=True, read_only=True, source='permissions')
    permissions = serializers.ManyRelatedField(child_relation=serializers.PrimaryKeyRelatedField(queryset=Permission.objects.all(), many=True, allow_null=True), allow_null=True)
    class Meta:
        model = UserGroup
        fields = ('__all__')

        def validate(self, data):
            print('validate data', data)
            try:
                data['permissions'] = data.pop('permissions_id')
            except KeyError:
                print('We had an error adding the permission to the UserGroup')
                pass

            return data


class UserSerializer(serializers.ModelSerializer):
    profile_img = Base64ImageField( max_length=None,
                                    use_url=True,
                                    required=False,
                                    allow_null=True,
                                    allow_empty_file=True)
    class Meta:
        model = User
        fields = ('__all__')
        extra_kwargs = {
            'password': {
                'write_only': True,
                'style': {
                    'input_type': 'password'
                },
            },
        }

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)

        return user 

    def update(self, instance, validated_data):
        print("User instance", instance)
        print("User validated_data", validated_data)
        if 'password' in validated_data:
            instance.set_password(validated_data['password'])
            del validated_data['password']
        for key in validated_data.keys():
            # print("User validated_data key", key)
            # print("User validated_data value", validated_data[key])
            if key in instance.__dict__.keys():
                setattr(instance, key, validated_data[key])
            
        print("User Updated by serializer")

        instance.save()
        return instance
 
    def validate(self, data):
        print('validate User data', data)
        print('self', self)
        if 'password' in data:
            try:
                validate_password(data['password'])
            except ValidationError as error:
                print('The password does not meet the minimum requirements')
                raise serializers.ValidationError(password_validators_help_texts())
            
        return data

class UserListSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'full_name', 'email', 'date_added', 'mobile_phone', 'last_login', 'is_active']

class UsersGroupsSerializer(serializers.ModelSerializer):
    groups_list = BaseGroupSerializer(many=True, read_only=True, source='groups')
    groups = serializers.PrimaryKeyRelatedField(queryset=Group.objects.all(), many=True, allow_null=True)
    class Meta:
        model = User
        read_only_fields = ['full_name']
        fields = ['id', 'full_name', 'groups_list', 'groups']

class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'password', 'id']
        
    def validate(self, data):
        print('data', data)
        print('User.objects.all()', User.objects.all())
        email = data.get('email', "")
        password = data.get('password', "")
        if data.username and data.email:
            user = authenticate(email=email, password=password)

            if user:
                if user.is_active:
                    data['user'] = user
                else:
                    msg = "Your account has been deactivated"
                    raise exceptions.ValidationError(msg)
            else:
                msg = "Unable to login User with credentials"
                raise exceptions.ValidationError(msg)
        else:
            msg = "You must provide a username and password"
            raise exceptions.ValidationError(msg)
        return data

class AlternativeLoginSerializer(serializers.Serializer):
    barcode_number = serializers.CharField(max_length=20)
    pin = serializers.CharField(max_length=4)    
        
    def validate(self, data):
        barcode_number = data.get('barcode_number', "")
        pin = data.get('pin', "")
        if data['barcode_number'] and data['pin']:
            try:
                barcode = UserBarcode.objects.get(barcode_number = data['barcode_number'])
            except UserBarcode.DoesNotExist:
                raise Http404("No Barcode match for the given barcode number.")
            
            if barcode.user.pin == data['pin']:
                data['user'] = barcode.user
                return data
            else:
                msg = "Unable to login User with credentials"
                raise exceptions.ValidationError(msg)
        else:
            msg = "You must provide a barcocde number and PIN"
            raise exceptions.ValidationError(msg)
        return data

class ManagerApprovalBarcodeSerializer(serializers.Serializer):
    barcode_number = serializers.CharField(max_length=20)
    pin = serializers.CharField(max_length=4)  
        
    def validate(self, data):
        print('Serializer Validate 1')
        barcode_number = data.get('barcode_number', "")
        pin = data.get('pin', "")
        if data['barcode_number'] and data['pin']:
            try:
                barcode = UserBarcode.objects.get(barcode_number = data['barcode_number'])
            except UserBarcode.DoesNotExist:
                raise Http404("No Barcode match for the given barcode number.")
            
            if barcode.user.pin == data['pin']:
                data['user'] = barcode.user
                print(data['user'])
                if data['user'].is_admin or data['user'].is_superuser:
                    return data
                else:
                    msg = "You need to have approval from an admin account"
                    raise exceptions.ValidationError(msg)
            else:
                msg = "Unable to  verify manager with provided credentials"
                raise exceptions.ValidationError(msg)
        else:
            msg = "You must provide a barcocde number and PIN"
            raise exceptions.ValidationError(msg)
        return data


class ChangePasswordSerializer(serializers.Serializer):
    email = serializers.CharField(max_length=200)
    password = serializers.CharField(max_length=200)
    new_password = serializers.CharField(max_length=200)
    confirm_password = serializers.CharField(max_length=200)
    
    def validate(self, data):
        print('data', data)
        print('self', self)
        email = data.get('email', "")
        password = data.get('password', "")
        print('email', email)
        print('password', password)
        if data['password'] and data['email']:
            user = authenticate(email=data['email'], password=data['password'])
            print('user', user)
            if user:
                if user.is_active:
                    if data['new_password'] == data['confirm_password']:
                        #Check if password is same
                        if check_password(data['password'], user.password):
                            try:
                                #Also Validate if password fits certian criteria
                                validate_password(data['new_password'])
                                data['user'] = user
                                return data
                            except ValidationError as error:
                                print('The password does not meet the minimum requirements')
                                raise serializers.ValidationError(password_validators_help_texts())
                            
                    else:
                        msg = "Your passwords do not match"
                        raise exceptions.ValidationError(msg)
            else:
                msg = "User and password combination does not match"
                raise exceptions.ValidationError(msg)
        else:
            msg = "You must provide a username and password"
            raise exceptions.ValidationError(msg)
        return data

 