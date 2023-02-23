from rest_framework import serializers
from .models import FedIDMeetResponse, FedOBMeetResponse, FedAgmResponse, FedCcmResponse
from .models import RegionAgmResponse, RegionCommitteeMeetResponse, RegionOBMeetResponse
from .models import GroupAgmResponse, GroupCommitteeMeetResponse, GroupEGMResponse, GroupForumRegistrationResponse, GroupMembershipFormResponse, GroupFormAResponse, GroupFormBResponse
from .models import SanigniCommitteeMeetResponse, SanginiForumRegistrationResponse
from .models import MbsNominationForm,  GroupAddEvent, ContactUsResponse
from .models import FedEvent, RegEvent, GrpEvent, Mangalyatra


class ContactUsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactUsResponse
        fields = '__all__'


class MangalyatraSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mangalyatra
        fields = '__all__'

# Events Serializers


class FedEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = FedEvent
        fields = '__all__'


class RegEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegEvent
        fields = '__all__'


class GrpEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = GrpEvent
        fields = '__all__'


class GroupAddEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = GroupAddEvent
        fields = '__all__'


# Federation Form Serializers
class FedIDMeetSerializer(serializers.ModelSerializer):
    class Meta:
        model = FedIDMeetResponse
        fields = '__all__'


class FedAGMSerializer(serializers.ModelSerializer):
    class Meta:
        model = FedAgmResponse
        fields = '__all__'


class FedOBMeetSerializer(serializers.ModelSerializer):
    class Meta:
        model = FedOBMeetResponse
        fields = '__all__'


class FedCcmSerializer(serializers.ModelSerializer):
    class Meta:
        model = FedCcmResponse
        fields = '__all__'


# Region Form Serializers
class RegionAgmSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegionAgmResponse
        fields = '__all__'


class RegionCommitteeMeetSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegionCommitteeMeetResponse
        fields = '__all__'


class RegionOBMeetSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegionOBMeetResponse
        fields = '__all__'


# Sangini Form Serializers

class SanginiCommitteeMeetSerializer(serializers.ModelSerializer):
    class Meta:
        model = SanigniCommitteeMeetResponse
        fields = '__all__'


class SanginiForumRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = SanginiForumRegistrationResponse
        fields = '__all__'


# Group Form Serializers

class GroupFormASerializer(serializers.ModelSerializer):
    class Meta:
        model = GroupFormAResponse
        fields = '__all__'


class GroupFormBSerializer(serializers.ModelSerializer):
    class Meta:
        model = GroupFormBResponse
        fields = '__all__'


class GroupAgmSerializer(serializers.ModelSerializer):
    class Meta:
        model = GroupAgmResponse
        fields = '__all__'


class GroupCommitteeMeetSerializer(serializers.ModelSerializer):
    class Meta:
        model = GroupCommitteeMeetResponse
        fields = '__all__'


class GroupEgmSerializer(serializers.ModelSerializer):
    class Meta:
        model = GroupEGMResponse
        fields = '__all__'


class GroupForumRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = GroupForumRegistrationResponse
        fields = '__all__'


class GroupMembershipFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = GroupMembershipFormResponse
        fields = '__all__'


class MbsNominationSerializer(serializers.ModelSerializer):
    class Meta:
        model = MbsNominationForm
        fields = '__all__'
