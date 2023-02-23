from django.urls import path
from . import views


urlpatterns = [

    path('forms/', views.getForms, name='forms'),

    # Contact Us
    path('forms/contactus/', views.getContactUsResponses, name='ContactUs'),
    path('forms/contactus/<str:pk>/',
         views.getContactUsResponse, name='ContactUsResponse'),

    # Federation Events
    path('fed/events/',
         views.getFedEvents, name='FedEventsList'),
    path('fed/event/<str:pk>/',
         views.getFedEvent, name='FedEventsDetails'),

    # Region Events
    path('reg/events/',
         views.getRegEvents, name='RegEventsList'),
    path('reg/events-list/<region>/',
         views.getRegWiseEvents, name='RegWiseEventsList'),
    path('reg/event/<str:pk>/',
         views.getRegEvent, name='RegEventsDetails'),

    # Group Events
    path('grp/events/',
         views.getGrpEvents, name='GrpEventsList'),
    path('grp/events-list/<group>/',
         views.getGrpWiseEvents, name='GrpWiseEventsList'),
    path('grp/event/<str:pk>/',
         views.getGrpEvent, name='GrpEventsDetails'),

    # Mangalyatra
    path('mangalyatra/',
         views.getMangalyatras, name='GrpEventsList'),
    path('mangalyatra/<str:pk>',
         views.getMangalyatra, name='GrpEventsDetails'),

    # Federation ID Meet
    path('forms/federation/fed-idmeet/', views.getFedIDMeets, name='FedIDMeet'),
    path('forms/federation/fed-idmeet/<str:pk>/',
         views.getFedIDMeet, name='FedIDMeetResponse'),
    # Federation OB Meet
    path('forms/federation/fed-obmeet/', views.getFedOBMeets, name='FedOBMeet'),
    path('forms/federation/fed-obmeet/<str:pk>/',
         views.getFedOBMeet, name='FedOBMeetResponse'),
    # Federation AGM
    path('forms/federation/fed-agm/', views.getFedAGMs, name='FedAGM'),
    path('forms/federation/fed-agm/<str:pk>/',
         views.getFedAGM, name='FedAGMResponse'),
    # Federation CCM
    path('forms/federation/fed-ccm/', views.getFedCCMs, name='FedCCM'),
    path('forms/federation/fed-ccm/<str:pk>/',
         views.getFedCCM, name='FedCCMResponse'),

    path('forms/region', views.getRegionForm, name='regionforms'),
    # Region AGM
    path('forms/region/reg-agm/', views.getRegionAgms, name='regionagm'),
    path('forms/region/reg-agm/<str:pk>/',
         views.getRegionAgm, name='regionAgmResponse'),
    path('forms/reg-agm/<region>/',
         views.getRegWiseAgm, name='RegWise-Agm'),
    # Region Committee Meet
    path('forms/region/reg-committee-meet/', views.getRegionCommitteeMeets,
         name='regionCommitteeMeet'),
    path('forms/region/reg-committee-meet/<str:pk>/',
         views.getRegionCommitteeMeet, name='regionCommitteeMeetResponse'),
    path('forms/reg-committee-meet/<region>/',
         views.getRegWiseCommitteeMeet, name='RegWise-committee-meet'),
    # Region OB Meet
    path('forms/region/reg-obmeet/', views.getRegionOBMeets,
         name='regionOBMeet'),
    path('forms/region/reg-obmeet/<str:pk>/',
         views.getRegionOBMeet, name='regionOBMeetResponse'),
    path('forms/reg-obmeet/<region>/',
         views.getRegWiseOBMeet, name='RegWise-OBMeet'),

    # Sangini Forms
    path('forms/sangini', views.getSanginiForm, name='sanginiforms'),
    # Sangini Committee Meet
    path('forms/sangini/sgncommitteemeet/',
         views.getSanginiCommitteeMeets, name='SanginiCommittee'),
    path('forms/sangini/sgncommitteemeet/<str:pk>/',
         views.getSanginiCommitteeMeet, name='SanginiCommitteeMeetResponse'),
    # Sangini Forum Registration
    path('forms/sangini/sgnforumregistraion/',
         views.getSanginiForumRegistrations, name='SanginiForumRegistration'),
    path('forms/sangini/sgnforumregistraion/<str:pk>/',
         views.getSanginiForumRegistration, name='SanginiForumRegistrationResponse'),

    # Group Forms
    path('forms/group', views.getGroupForm, name='groupforms'),
    # Group AGM
    path('forms/group/grp-agm/', views.getGroupAgms, name='groupCommittee'),
    path('forms/group/grp-agm/<str:pk>/',
         views.getGroupAgm, name='groupCommitteeMeetResponse'),
    path('forms/grp-agm/<group>/',
         views.getGrpWiseAgm, name='GrpWise-Agm'),

    # Group Committee Meet
    path('forms/group/grp-committee-meet/',
         views.getGroupCommitteeMeets, name='groupCommittee'),
    path('forms/group/grp-committee-meet/<str:pk>/',
         views.getGroupCommitteeMeet, name='groupCommitteeMeetResponse'),
    path('forms/grp-committee-meet/<group>/',
         views.getGrpWiseCommitteeMeet, name='GrpWise-Committee-Meet'),

    # Group EGM
    path('forms/group/grp-egm/',
         views.getGroupEgms, name='groupEGM'),
    path('forms/group/grp-egm/<str:pk>/',
         views.getGroupEgm, name='groupEGMResponse'),
    path('forms/grp-egm/<group>/',
         views.getGrpWiseEgm, name='GrpWise-Egm'),

    # Group Forum Registraion
    path('forms/group/grp-forum-registraion/',
         views.getGroupForumRegistrations, name='groupForumRegistration'),
    path('forms/group/grp-forum-registraion/<str:pk>/',
         views.getGroupForumRegistration, name='groupForumRegistrationResponse'),
    path('forms/grp-forum-registraion/<group>/',
         views.getGrpWiseForumRegistration, name='GrpWise-forum-registraion'),

    # Group Form A
    path('forms/group/grp-form-a/',
         views.getGroupFormAs, name='Group Form A'),
    path('forms/group/grp-form-a/<str:pk>/',
         views.getGroupFormA, name='Group Form A Response'),
    path('forms/<group>/grp-form-a/',
         views.getGrpWiseFormA, name='GrpWise-Form-A'),

    # Group Form B
    path('forms/group/grp-form-b/',
         views.getGroupFormBs, name='Group Form B'),
    path('forms/group/grp-form-b/<group>/',
         views.getGroupFormB, name='Group Form B Response'),
    #     path('forms/<group>/grp-form-b/',
    #     views.getGrpWiseFormB, name='GrpWise-Form-B'),

    # Group Membership Form
    path('forms/group/grp-membership-form/',
         views.getGroupMembershipForms, name='groupMembershipForm'),
    path('forms/group/grp-membership-form/<str:pk>/',
         views.getGroupMembershipForm, name='groupMembershipFormResponse'),

    # MBS Nomination
    path('forms/mbs-nomination/',
         views.getMbsNominationForms, name='mbsNominationForms'),
    path('forms/mbs-nomination/<str:pk>/',
         views.getMbsNominationForm, name='mbsNominationFormResponse'),


]
