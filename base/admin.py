from django.contrib import admin
from .models import FedIDMeetResponse, FedOBMeetResponse, FedAgmResponse, FedCcmResponse
from .models import RegionAgmResponse, RegionCommitteeMeetResponse, RegionOBMeetResponse
from .models import SanigniCommitteeMeetResponse, SanginiForumRegistrationResponse
from .models import GroupAgmResponse, GroupCommitteeMeetResponse, GroupEGMResponse, GroupForumRegistrationResponse, GroupMembershipFormResponse, GroupFormAResponse, GroupFormBResponse
from .models import MbsNominationForm,  GroupAddEvent, ContactUsResponse, FedEvent, RegEvent, GrpEvent, Mangalyatra

# Register your models here.


admin.site.register(Mangalyatra)
admin.site.register(ContactUsResponse)
admin.site.register(FedEvent)
admin.site.register(RegEvent)
admin.site.register(GrpEvent)
admin.site.register(GroupAddEvent)
admin.site.register(FedIDMeetResponse)
admin.site.register(FedOBMeetResponse)
admin.site.register(FedAgmResponse)
admin.site.register(FedCcmResponse)
admin.site.register(RegionAgmResponse)
admin.site.register(RegionCommitteeMeetResponse)
admin.site.register(RegionOBMeetResponse)
admin.site.register(SanigniCommitteeMeetResponse)
admin.site.register(SanginiForumRegistrationResponse)
admin.site.register(GroupFormAResponse)
admin.site.register(GroupAgmResponse)
admin.site.register(GroupFormBResponse)
admin.site.register(GroupCommitteeMeetResponse)
admin.site.register(GroupEGMResponse)
admin.site.register(GroupForumRegistrationResponse)
admin.site.register(GroupMembershipFormResponse)
admin.site.register(MbsNominationForm)
