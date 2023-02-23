from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from user.models import User, JsgGroup, JsgRegion
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class JsgGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = JsgGroup
        fields = '__all__'


class JsgRegionSerializer(serializers.ModelSerializer):

    class Meta:
        model = JsgRegion
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 'accessGroup',
                  'contactNumber', 'whatsappNumber', 'address', 'jsgGroupName', 'isGroupEditor', 'jsgRegionName', 'isRegionEditor', 'img', 'post']


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        token['post'] = user.post
        token['accessGroup'] = user.accessGroup
        token['jsgGroupName'] = user.jsgGroupName
        token['jsgRegionName'] = user.jsgRegionName

        return token
