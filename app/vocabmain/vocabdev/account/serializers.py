from rest_framework import serializers
from rest_framework.validators import UniqueValidator, ValidationError
from django.contrib.auth.password_validation import validate_password
# from django.core.validators import validate_slug
from .models import ImpUser
from ..improver.models import Language
# from rest_framework.generics import get_object_or_404
from ..improver.serializers import LanguageSerializer
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class ImpUserRegisterSerializer(serializers.ModelSerializer):
    username = serializers.CharField(validators=[UniqueValidator(queryset=ImpUser.objects.all())])
    email = serializers.EmailField(validators=[UniqueValidator(queryset=ImpUser.objects.all())])
    password = serializers.CharField(write_only=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True)
    fav_language_slug = serializers.SlugRelatedField(queryset=Language.objects.all(), slug_field='symbol',
                                                     write_only=True,allow_null=True, required=False)
    fav_language = LanguageSerializer(required=False, read_only=True)

    class Meta:
        model = ImpUser
        fields = ('username', 'email', 'password', 'password2', 'first_name', 'last_name', 'fav_language_slug',
                  'fav_language', 'about')

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise ValidationError({'password': 'Passwords dont match'})
        else:
            return attrs

    def create(self, validated_data):
        user = ImpUser.objects.create_user(username=validated_data['username'], email=validated_data['email'],
                                           password=validated_data['password'], first_name=validated_data['first_name'],
                                           last_name=validated_data['last_name'],
                                           fav_language=validated_data.get('fav_language_slug'),
                                           about=validated_data.get('about'))
        return user


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        token['username'] = user.username
        token['email'] = user.email

        return token
