from django.db import models
from django.contrib.auth.models import User, AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.utils.translation import gettext_lazy as _
from django.utils import timezone


class JsgRegion(models.Model):
    region = models.CharField(max_length=20)
    numGroups = models.IntegerField(default=0)

    def __str__(self):
        return self.region


class JsgGroup(models.Model):
    group = models.CharField(max_length=20)
    groupLink = models.SlugField(max_length=20)
    id = models.IntegerField(primary_key=True, editable=True)
    region = models.CharField(max_length=20, null=True, blank=True)

    def __str__(self):
        return self.group


class CustomUserManager(BaseUserManager):
    def create_user(self, username, email, first_name, last_name, accessGroup, contactNumber, whatsappNumber, address, jsgGroupName, isGroupEditor, jsgRegionName, isRegionEditor, img, post, password, **other_fields):

        if not email:
            raise ValueError(_('You must provide an Email Address!'))
        email = self.normalize_email(email)
        user = self.model(email=email, username=username, first_name=first_name, last_name=last_name, accessGroup=accessGroup, contactNumber=contactNumber,
                          whatsappNumber=whatsappNumber, address=address, jsgGroupName=jsgGroupName, isGroupEditor=isGroupEditor,
                          jsgRegionName=jsgRegionName, isRegionEditor=isRegionEditor, img=img, post=post, password=password, **other_fields)
        user.set_password(password)
        user.save()

        return user

    def create_superuser(self, username, email, first_name, last_name, accessGroup, contactNumber, whatsappNumber, address, jsgGroupName, isGroupEditor, jsgRegionName, isRegionEditor, img, post, password, **other_fields):

        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_superuser', True)
        other_fields.setdefault('is_active', True)

        if other_fields.get('is_staff') is not True:
            raise ValueError('Superuser must be assigned to is_staff=True. ')
        if other_fields.get('is_superuser') is not True:
            raise ValueError(
                'Superuser must be assigned to is_superuser=True. ')

        return self.create_user(username, email, first_name, last_name, accessGroup, contactNumber, whatsappNumber, address, jsgGroupName, isGroupEditor, jsgRegionName, isRegionEditor, img, post, password, **other_fields)


class User(AbstractBaseUser, PermissionsMixin):
    id = models.AutoField(primary_key=True, editable=False)
    username = models.CharField(
        max_length=20, null=True, blank=True, unique=True)
    email = models.EmailField(_('email address'), unique=False)
    accessGroup = models.CharField(max_length=10, null=True, blank=True)
    first_name = models.CharField(max_length=15, null=True, blank=True)
    last_name = models.CharField(max_length=15, null=True, blank=True)
    contactNumber = models.CharField(max_length=20, null=True, blank=True)
    whatsappNumber = models.CharField(max_length=20, null=True, blank=True)
    address = models.CharField(max_length=50, null=True, blank=True)
    jsgGroupName = models.CharField(max_length=50, null=True, blank=True)
    isGroupEditor = models.BooleanField(default=False)
    jsgRegionName = models.CharField(max_length=50, null=True, blank=True)
    isRegionEditor = models.BooleanField(default=False)
    img = models.ImageField(null=True, blank=True)
    post = models.CharField(max_length=20, null=True, blank=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    date_joined = models.DateTimeField(
        auto_now_add=True, null=True, blank=True)

    objects = CustomUserManager()

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email', 'first_name', 'last_name', 'accessGroup', 'contactNumber',
                       'whatsappNumber', 'address', 'jsgGroupName', 'isGroupEditor', 'jsgRegionName', 'isRegionEditor', 'post', 'img']

    def __str__(self):
        return self.username
