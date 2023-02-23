
from rest_framework import status, generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
# from django_filters.rest_framework import DjangoFilterBackend
from django.core.mail import send_mail, EmailMessage
from django.conf import settings

from base.models import FedEvent, RegEvent, GrpEvent
from base.models import FedIDMeetResponse, FedOBMeetResponse, FedAgmResponse, FedCcmResponse
from base.models import RegionAgmResponse, RegionCommitteeMeetResponse, RegionOBMeetResponse
from base.models import GroupAgmResponse, GroupCommitteeMeetResponse, GroupEGMResponse, GroupForumRegistrationResponse, GroupMembershipFormResponse, GroupFormAResponse, GroupFormBResponse
from base.models import SanigniCommitteeMeetResponse, SanginiForumRegistrationResponse
from base.models import MbsNominationForm, GroupAddEvent, ContactUsResponse, Mangalyatra

from base.serializers import FedEventSerializer, RegEventSerializer, GrpEventSerializer
from base.serializers import FedIDMeetSerializer, FedOBMeetSerializer, FedAGMSerializer, FedCcmSerializer
from base.serializers import RegionAgmSerializer, RegionCommitteeMeetSerializer, RegionOBMeetSerializer
from base.serializers import GroupAgmSerializer, GroupCommitteeMeetSerializer, GroupEgmSerializer, GroupForumRegistrationSerializer, GroupMembershipFormSerializer, GroupFormASerializer, GroupFormBSerializer

from base.serializers import SanginiCommitteeMeetSerializer, SanginiForumRegistrationSerializer
from base.serializers import MbsNominationSerializer, GroupAddEventSerializer, ContactUsSerializer, MangalyatraSerializer


# Contact Us
@api_view(['GET', 'POST'])
def getContactUsResponses(request):
    if request.method == 'GET':
        contactUs_response = ContactUsResponse.objects.all()
        serializer = ContactUsSerializer(contactUs_response, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ContactUsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def getContactUsResponse(request, pk):
    if request.method == 'GET':
        contactUs_response = ContactUsResponse.objects.get(id=pk)
        serializer = ContactUsSerializer(contactUs_response, many=False)
        return Response(serializer.data)


@api_view(['GET'])
def getRoutes(request):
    routes = [
        "api/forms",
        "api/forms/region",
        "api/forms/groups",
        "api/forms/jsgif",
        "api/forms/sangini",
    ]
    return Response(routes)


# Mangalyatra
@api_view(['GET', 'POST'])
def getMangalyatras(request):
    if request.method == 'GET':
        response = Mangalyatra.objects.all()
        serializer = MangalyatraSerializer(response, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = MangalyatraSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def getMangalyatra(request, pk):
    response = Mangalyatra.objects.get(id=pk)
    serializer = MangalyatraSerializer(response, many=False)

    return Response(serializer.data)


# Event Upload
# Federation Events
@api_view(['GET', 'POST'])
def getFedEvents(request):
    if request.method == 'GET':
        fedEvents = FedEvent.objects.all()
        serializer = FedEventSerializer(fedEvents, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = FedEventSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def getFedEvent(request, pk):
    fedEvents = FedEvent.objects.get(id=pk)
    serializer = FedEventSerializer(fedEvents, many=False)

    return Response(serializer.data)


# Region Events
@api_view(['GET', 'POST'])
def getRegEvents(request):
    if request.method == 'GET':
        regEvents = RegEvent.objects.all()
        serializer = RegEventSerializer(regEvents, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = RegEventSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def getRegWiseEvents(request, region):
    regEvents = RegEvent.objects.filter(region=region)
    serializer = RegEventSerializer(regEvents, many=True)

    return Response(serializer.data)


@api_view(['GET'])
def getRegEvent(request, pk):
    regEvents = RegEvent.objects.get(id=pk)
    serializer = RegEventSerializer(regEvents, many=False)

    return Response(serializer.data)


# Group Events
@api_view(['GET', 'POST'])
def getGrpEvents(request):
    if request.method == 'GET':
        grpEvents = GrpEvent.objects.all()
        serializer = GrpEventSerializer(grpEvents, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = GrpEventSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def getGrpWiseEvents(request, group):
    grpEvents = GrpEvent.objects.filter(group=group)
    serializer = GrpEventSerializer(grpEvents, many=True)

    return Response(serializer.data)


@api_view(['GET'])
def getGrpEvent(request, pk):
    grpEvents = GrpEvent.objects.get(id=pk)
    serializer = GrpEventSerializer(grpEvents, many=False)

    return Response(serializer.data)


# All Forms
@api_view(['GET'])
def getForms(request):
    routes = [
        "api/forms/region",
        "api/forms/groups",
        "api/forms/jsgif",
        "api/forms/sangini",
    ]
    return Response(routes)


# Federation ID Meet Form
@api_view(['GET', 'POST'])
def getFedIDMeets(request):
    if request.method == 'GET':
        response = FedIDMeetResponse.objects.all()
        serializer = FedIDMeetSerializer(response, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = FedIDMeetSerializer(data=request.data)
        if serializer.is_valid():
            response = serializer.save()
            date = response.mDate
            time = response.mTime
            location = str(response.mAddress) + ' ' + \
                str(response.mCity) + ' ' + \
                str(response.mState)
            email_string = response.emailList
            mail = email_string.split(',')
            link = 'http://localhost:3000/fed-idmeet-response/' + \
                str(response.id)

            subject = 'JSGIF Alert'
            html_content = '<p>Dear JSGian, The Federation ID Meet is scheduled on <strong>' + date + '</strong> at ' + \
                location + '  and at ' + time + \
                '. Check the Notice on the link given below: <br />' + link + '</p >'
            recipient_list = mail
            from_email = 'jsgifalerts@gmail.com'
            msg = EmailMessage(subject, html_content,
                               from_email, recipient_list)
            msg.content_subtype = "html"
            msg.send()

        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT'])
def getFedIDMeet(request, pk):
    try:
        response = FedIDMeetResponse.objects.get(id=pk)
    except FedIDMeetResponse.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = FedIDMeetSerializer(response, many=False)

        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = FedIDMeetSerializer(response, data=request.data)
        if serializer.is_valid():
            serializer.save()

            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Federation OB Meet Form
@api_view(['GET', 'POST'])
def getFedOBMeets(request):
    if request.method == 'GET':
        fedOBMeet_response = FedOBMeetResponse.objects.all()
        serializer = FedOBMeetSerializer(fedOBMeet_response, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = FedOBMeetSerializer(data=request.data)
        if serializer.is_valid():
            response = serializer.save()
            date = response.mDate
            time = response.mTime
            location = str(response.mAddress) + ' ' + \
                str(response.mCity) + ' ' + \
                str(response.mState)
            email_string = response.emailList
            mail = email_string.split(',')
            link = 'http://localhost:3000/fed-obmeet-response/' + \
                str(response.id)

            subject = 'JSGIF Alert'
            html_content = '<p>Dear JSGian, The Federation OB Meet is scheduled on <strong>' + date + '</strong> at ' + \
                location + '  and at ' + time + \
                '. Check the Notice on the link given below: <br />' + link + '</p >'
            recipient_list = mail
            from_email = 'jsgifalerts@gmail.com'
            msg = EmailMessage(subject, html_content,
                               from_email, recipient_list)
            msg.content_subtype = "html"
            msg.send()

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT'])
def getFedOBMeet(request, pk):

    try:
        fedOBMeet_response = FedOBMeetResponse.objects.get(id=pk)
    except FedOBMeetResponse.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = FedOBMeetSerializer(fedOBMeet_response, many=False)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = FedOBMeetSerializer(fedOBMeet_response, data=request.data)
        if serializer.is_valid():
            serializer.save()

            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Federation AGM Form
@api_view(['GET', 'POST'])
def getFedAGMs(request):
    if request.method == 'GET':
        fedAGM_response = FedAgmResponse.objects.all()
        serializer = FedAGMSerializer(fedAGM_response, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = FedAGMSerializer(data=request.data)
        if serializer.is_valid():
            response = serializer.save()
            date = response.mDate
            time = response.mTime
            location = str(response.mAddress) + ' ' + \
                str(response.mCity) + ' ' + \
                str(response.mState)
            email_string = response.emailList
            mail = email_string.split(',')
            link = 'http://localhost:3000/fed-agm-response/' + \
                str(response.id)

            subject = 'JSGIF Alert'
            html_content = '<p>Dear JSGian, The Federation AGM is scheduled on <strong>' + date + '</strong> at ' + \
                location + '  and at ' + time + \
                '. Check the Notice on the link given below: <br />' + link + '</p >'
            recipient_list = mail
            from_email = 'jsgifalerts@gmail.com'
            msg = EmailMessage(subject, html_content,
                               from_email, recipient_list)
            msg.content_subtype = "html"
            msg.send()

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT'])
def getFedAGM(request, pk):
    try:
        fedAGM_response = FedAgmResponse.objects.get(id=pk)
    except FedAgmResponse.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = FedAGMSerializer(fedAGM_response, many=False)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = FedAGMSerializer(fedAGM_response, data=request.data)
        if serializer.is_valid():
            serializer.save()

            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Federation CCM Form
@api_view(['GET', 'POST'])
def getFedCCMs(request):
    if request.method == 'GET':
        fedCcm_response = FedCcmResponse.objects.all()
        serializer = FedOBMeetSerializer(fedCcm_response, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = FedCcmSerializer(data=request.data)
        if serializer.is_valid():
            response = serializer.save()
            date = response.mDate
            time = response.mTime
            location = str(response.mAddress) + ' ' + \
                str(response.mCity) + ' ' + \
                str(response.mState)
            email_string = response.emailList
            mail = email_string.split(',')
            link = 'http://localhost:3000/fed-ccm-response/' + \
                str(response.id)

            subject = 'JSGIF Alert'
            html_content = '<p>Dear JSGian, The Federation CCM is scheduled on <strong>' + date + '</strong> at ' + \
                location + '  and at ' + time + \
                '. Check the Notice on the link given below: <br />' + link + '</p >'
            recipient_list = mail
            from_email = 'jsgifalerts@gmail.com'
            msg = EmailMessage(subject, html_content,
                               from_email, recipient_list)
            msg.content_subtype = "html"
            msg.send()

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT'])
def getFedCCM(request, pk):

    try:
        fedCcm_response = FedCcmResponse.objects.get(id=pk)
    except FedCcmResponse.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = FedCcmSerializer(fedCcm_response, many=False)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = FedCcmSerializer(fedCcm_response, data=request.data)
        if serializer.is_valid():
            serializer.save()

            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Region Forms
@api_view(['GET'])
def getRegionForm(request):
    routes = [
        "forms/region/ragm",
    ]
    return Response(routes)


# Region AGM Form
@api_view(['GET', 'POST'])
def getRegionAgms(request):
    if request.method == 'GET':
        Ragm_response = RegionAgmResponse.objects.all()
        serializer = RegionAgmSerializer(Ragm_response, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = RegionAgmSerializer(data=request.data)
        if serializer.is_valid():
            response = serializer.save()
            date = response.mDate
            time = response.mTime
            location = str(response.mAddress) + ' ' + \
                str(response.mCity) + ' ' + \
                str(response.mState)
            email_string = response.emailList
            mail = email_string.split(',')
            link = 'http://localhost:3000/ragm-response/' + \
                str(response.id)

            subject = 'JSGIF Alert'
            html_content = '<p>Dear JSGian, The Region AGM is scheduled on <strong>' + date + '</strong> at ' + \
                location + '  and at ' + time + \
                '. Check the Notice on the link given below: <br />' + link + '</p >'
            recipient_list = mail
            from_email = 'jsgifalerts@gmail.com'
            msg = EmailMessage(subject, html_content,
                               from_email, recipient_list)
            msg.content_subtype = "html"
            msg.send()

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT'])
def getRegionAgm(request, pk):
    try:
        Ragm_response = RegionAgmResponse.objects.get(id=pk)
    except RegionAgmResponse.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = RegionAgmSerializer(Ragm_response, many=False)

        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = RegionAgmSerializer(Ragm_response, data=request.data)
        if serializer.is_valid():
            serializer.save()

            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def getRegWiseAgm(request, region):
    response = RegionAgmResponse.objects.filter(rName=region)
    serializer = RegionAgmSerializer(response, many=True)

    return Response(serializer.data)


# Region Committee Meet Form
@api_view(['GET', 'POST'])
def getRegionCommitteeMeets(request):
    if request.method == 'GET':
        RcommitteeMeet_response = RegionCommitteeMeetResponse.objects.all()
        serializer = RegionCommitteeMeetSerializer(
            RcommitteeMeet_response, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = RegionCommitteeMeetSerializer(data=request.data)
        if serializer.is_valid():
            response = serializer.save()
            date = response.mDate
            time = response.mTime
            location = str(response.mAddress) + ' ' + \
                str(response.mCity) + ' ' + \
                str(response.mState)
            email_string = response.emailList
            mail = email_string.split(',')
            link = 'http://localhost:3000/rcommitteemeet-response/' + \
                str(response.id)

            subject = 'JSGIF Alert'
            html_content = '<p>Dear JSGian, The Region Committee Meet is scheduled on <strong>' + date + '</strong> at ' + \
                location + '  and at ' + time + \
                '. Check the Notice on the link given below: <br />' + link + '</p >'
            recipient_list = mail
            from_email = 'jsgifalerts@gmail.com'
            msg = EmailMessage(subject, html_content,
                               from_email, recipient_list)
            msg.content_subtype = "html"
            msg.send()

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT'])
def getRegionCommitteeMeet(request, pk):
    try:
        RcommitteeMeet_response = RegionCommitteeMeetResponse.objects.get(
            id=pk)
    except RegionCommitteeMeetResponse.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = RegionCommitteeMeetSerializer(
            RcommitteeMeet_response, many=False)

        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = RegionCommitteeMeetSerializer(
            RcommitteeMeet_response, data=request.data)
        if serializer.is_valid():
            serializer.save()

            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def getRegWiseCommitteeMeet(request, region):
    response = RegionCommitteeMeetResponse.objects.filter(rName=region)
    serializer = RegionCommitteeMeetSerializer(response, many=True)

    return Response(serializer.data)


# Region OB Meet Form
@api_view(['GET', 'POST'])
def getRegionOBMeets(request):
    if request.method == 'GET':
        ROBmeet_response = RegionOBMeetResponse.objects.all()
        serializer = RegionOBMeetSerializer(ROBmeet_response, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = RegionOBMeetSerializer(data=request.data)
        if serializer.is_valid():
            response = serializer.save()
            date = response.mDate
            time = response.mTime
            location = str(response.mAddress) + ' ' + \
                str(response.mCity) + ' ' + \
                str(response.mState)
            email_string = response.emailList
            mail = email_string.split(',')
            link = 'http://localhost:3000/robmeet-response/' + \
                str(response.id)

            subject = 'JSGIF Alert'
            html_content = '<p>Dear JSGian, The Region OB is scheduled on <strong>' + date + '</strong> at ' + \
                location + '  and at ' + time + \
                '. Check the Notice on the link given below: <br />' + link + '</p >'
            recipient_list = mail
            from_email = 'jsgifalerts@gmail.com'
            msg = EmailMessage(subject, html_content,
                               from_email, recipient_list)
            msg.content_subtype = "html"
            msg.send()

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT'])
def getRegionOBMeet(request, pk):
    try:
        ROBmeet_response = RegionOBMeetResponse.objects.get(id=pk)
    except RegionOBMeetResponse.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = RegionOBMeetSerializer(ROBmeet_response, many=False)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = RegionOBMeetSerializer(
            ROBmeet_response, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def getRegWiseOBMeet(request, region):
    response = RegionOBMeetResponse.objects.filter(rName=region)
    serializer = RegionOBMeetSerializer(response, many=True)

    return Response(serializer.data)


# Sangini Forms
@api_view(['GET'])
def getSanginiForm(request):
    routes = [

    ]
    return Response(routes)


# Sangini Committee Meet Form
@api_view(['GET', 'POST'])
def getSanginiCommitteeMeets(request):
    if request.method == 'GET':
        SgnCommitteeMeet_response = SanigniCommitteeMeetResponse.objects.all()
        serializer = SanginiCommitteeMeetSerializer(
            SgnCommitteeMeet_response, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = SanginiCommitteeMeetSerializer(data=request.data)
        if serializer.is_valid():
            response = serializer.save()
            date = response.mDate
            time = response.mTime
            location = str(response.mAddress) + ' ' + \
                str(response.mCity) + ' ' + \
                str(response.mState)
            email_string = response.emailList
            mail = email_string.split(',')
            link = 'http://localhost:3000/fed-ccm-response/' + \
                str(response.id)

            subject = 'JSGIF Alert'
            html_content = '<p>Dear JSGian, The Sangini Committee Meet is scheduled on <strong>' + date + '</strong> at ' + \
                location + '  and at ' + time + \
                '. Check the Notice on the link given below: <br />' + link + '</p >'
            recipient_list = mail
            from_email = 'jsgifalerts@gmail.com'
            msg = EmailMessage(subject, html_content,
                               from_email, recipient_list)
            msg.content_subtype = "html"
            msg.send()

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def getSanginiCommitteeMeet(request, pk):
    SgnCommitteeMeet_response = SanigniCommitteeMeetResponse.objects.get(id=pk)
    serializer = SanginiCommitteeMeetSerializer(
        SgnCommitteeMeet_response, many=False)

    return Response(serializer.data)


# Sangini Forum Registraion Form
@api_view(['GET', 'POST'])
def getSanginiForumRegistrations(request):
    if request.method == 'GET':
        SgnForumRegistration_response = SanginiForumRegistrationResponse.objects.all()
        serializer = SanginiForumRegistrationSerializer(
            SgnForumRegistration_response, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = SanginiForumRegistrationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def getSanginiForumRegistration(request, pk):
    SgnForumRegistration_response = SanginiForumRegistrationResponse.objects.get(
        id=pk)
    serializer = SanginiForumRegistrationSerializer(
        SgnForumRegistration_response, many=False)

    return Response(serializer.data)


# Group Forms
@api_view(['GET'])
def getGroupForm(request):
    routes = [

    ]
    return Response(routes)


# Group AGM Form
@api_view(['GET', 'POST'])
def getGroupAgms(request):
    if request.method == 'GET':
        GrpAgm_response = GroupAgmResponse.objects.all()
        serializer = GroupAgmSerializer(GrpAgm_response, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = GroupAgmSerializer(data=request.data)
        if serializer.is_valid():
            response = serializer.save()
            date = response.mDate
            time = response.mTime
            location = str(response.mAddress) + ' ' + \
                str(response.mCity) + ' ' + \
                str(response.mState)
            email_string = response.emailList
            mail = email_string.split(',')
            link = 'http://localhost:3000/rcommitteemeet-response/' + \
                str(response.id)

            subject = 'JSGIF Alert'
            html_content = '<p>Dear JSGian, The Group AGM is scheduled on <strong>' + date + '</strong> at ' + \
                location + '  and at ' + time + \
                '. Check the Notice on the link given below: <br />' + link + '</p >'
            recipient_list = mail
            from_email = 'jsgifalerts@gmail.com'
            msg = EmailMessage(subject, html_content,
                               from_email, recipient_list)
            msg.content_subtype = "html"
            msg.send()

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT'])
def getGroupAgm(request, pk):
    try:
        GrpAgm_response = GroupAgmResponse.objects.get(id=pk)
    except GroupAgmResponse.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = GroupAgmSerializer(GrpAgm_response, many=False)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = GroupAgmSerializer(
            GrpAgm_response, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def getGrpWiseAgm(request, group):
    response = GroupAgmResponse.objects.filter(gName=group)
    serializer = GroupAgmSerializer(response, many=True)

    return Response(serializer.data)


# Group Committee Meet Form
@api_view(['GET', 'POST'])
def getGroupCommitteeMeets(request):
    if request.method == 'GET':
        GrpCommitteeMeet_response = GroupCommitteeMeetResponse.objects.all()
        serializer = GroupCommitteeMeetSerializer(
            GrpCommitteeMeet_response, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = GroupCommitteeMeetSerializer(data=request.data)
        if serializer.is_valid():
            response = serializer.save()
            date = response.mDate
            time = response.mTime
            location = str(response.mAddress) + ' ' + \
                str(response.mCity) + ' ' + \
                str(response.mState)
            email_string = response.emailList
            mail = email_string.split(',')
            link = 'http://localhost:3000/rcommitteemeet-response/' + \
                str(response.id)

            subject = 'JSGIF Alert'
            html_content = '<p>Dear JSGian, The Region Committee Meet is scheduled on <strong>' + date + '</strong> at ' + \
                location + '  and at ' + time + \
                '. Check the Notice on the link given below: <br />' + link + '</p >'
            recipient_list = mail
            from_email = 'jsgifalerts@gmail.com'
            msg = EmailMessage(subject, html_content,
                               from_email, recipient_list)
            msg.content_subtype = "html"
            msg.send()

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT'])
def getGroupCommitteeMeet(request, pk):
    try:
        GrpCommitteeMeet_response = GroupCommitteeMeetResponse.objects.get(
            id=pk)
    except GroupCommitteeMeetResponse.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = GroupCommitteeMeetSerializer(
            GrpCommitteeMeet_response, many=False)

        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = GroupCommitteeMeetSerializer(
            GrpCommitteeMeet_response, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def getGrpWiseCommitteeMeet(request, group):
    response = GroupCommitteeMeetResponse.objects.filter(gName=group)
    serializer = GroupCommitteeMeetSerializer(response, many=True)

    return Response(serializer.data)


# Group EGM Form
@api_view(['GET', 'POST'])
def getGroupEgms(request):
    if request.method == 'GET':
        GrpEgm_response = GroupEGMResponse.objects.all()
        serializer = GroupEgmSerializer(GrpEgm_response, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = GroupEgmSerializer(data=request.data)
        if serializer.is_valid():
            response = serializer.save()
            date = response.mDate
            time = response.mTime
            location = str(response.mAddress) + ' ' + \
                str(response.mCity) + ' ' + \
                str(response.mState)
            email_string = response.emailList
            mail = email_string.split(',')
            link = 'http://localhost:3000/rcommitteemeet-response/' + \
                str(response.id)

            subject = 'JSGIF Alert'
            html_content = '<p>Dear JSGian, The Group EGM is scheduled on <strong>' + date + '</strong> at ' + \
                location + '  and at ' + time + \
                '. Check the Notice on the link given below: <br />' + link + '</p >'
            recipient_list = mail
            from_email = 'jsgifalerts@gmail.com'
            msg = EmailMessage(subject, html_content,
                               from_email, recipient_list)
            msg.content_subtype = "html"
            msg.send()

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT'])
def getGroupEgm(request, pk):
    try:
        GrpEgm_response = GroupEGMResponse.objects.get(id=pk)
    except GroupEGMResponse.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = GroupEgmSerializer(GrpEgm_response, many=False)

        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = GroupEgmSerializer(
            GrpEgm_response, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def getGrpWiseEgm(request, group):
    response = GroupEGMResponse.objects.filter(gName=group)
    serializer = GroupEgmSerializer(response, many=True)

    return Response(serializer.data)


# Group Forum Registration
@api_view(['GET', 'POST'])
def getGroupForumRegistrations(request):
    if request.method == 'GET':
        response = GroupForumRegistrationResponse.objects.all()
        serializer = GroupForumRegistrationSerializer(
            response, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = GroupForumRegistrationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT'])
def getGroupForumRegistration(request, pk):
    try:
        response = GroupForumRegistrationResponse.objects.get(id=pk)
    except GroupForumRegistrationResponse.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = GroupForumRegistrationSerializer(response, many=False)

        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = GroupForumRegistrationSerializer(
            response, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def getGrpWiseForumRegistration(request, group):
    response = GroupForumRegistrationResponse.objects.filter(grpName=group)
    serializer = GroupForumRegistrationSerializer(response, many=True)

    return Response(serializer.data)


# Group Form A
@api_view(['GET', 'POST'])
def getGroupFormAs(request):
    if request.method == 'GET':
        GrpCommitteeMeet_response = GroupFormAResponse.objects.all()
        serializer = GroupFormASerializer(
            GrpCommitteeMeet_response, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = GroupFormASerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT'])
def getGroupFormA(request, pk):
    try:
        GrpCommitteeMeet_response = GroupFormAResponse.objects.get(
            id=pk)
    except GroupFormAResponse.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = GroupFormASerializer(
            GrpCommitteeMeet_response, many=False)

        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = GroupFormASerializer(
            GrpCommitteeMeet_response, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def getGrpWiseFormA(request, group):
    response = GroupFormAResponse.objects.filter(grpName=group)
    serializer = GroupFormASerializer(response, many=True)

    return Response(serializer.data)


# Group Form B
@api_view(['GET', 'POST'])
def getGroupFormBs(request):
    if request.method == 'GET':
        GrpCommitteeMeet_response = GroupFormBResponse.objects.all()
        serializer = GroupFormBSerializer(
            GrpCommitteeMeet_response, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = GroupFormBSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT'])
def getGroupFormB(request, group):
    try:
        GrpCommitteeMeet_response = GroupFormBResponse.objects.get(
            grpName=group)
    except GroupFormBResponse.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = GroupFormBSerializer(
            GrpCommitteeMeet_response, many=False)

        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = GroupFormBSerializer(
            GrpCommitteeMeet_response, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def getGrpWiseFormB(request, group):
    response = GroupFormBResponse.objects.filter(grpName=group)
    serializer = GroupFormBSerializer(response, many=False)

    return Response(serializer.data)


# Group Membership Form
@api_view(['GET', 'POST'])
def getGroupMembershipForms(request):
    if request.method == 'GET':
        groupMembershipForm_response = GroupMembershipFormResponse.objects.all()
        serializer = GroupMembershipFormSerializer(
            groupMembershipForm_response, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = GroupMembershipFormSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def getGroupMembershipForm(request, pk):
    groupMembershipForm_response = GroupMembershipFormResponse.objects.get(
        id=pk)
    serializer = GroupMembershipFormSerializer(
        groupMembershipForm_response, many=False)

    return Response(serializer.data)


# MBS Nomination Form
@api_view(['GET', 'POST'])
def getMbsNominationForms(request):
    if request.method == 'GET':
        mbsNominationResponse = MbsNominationForm.objects.all()
        serializer = MbsNominationSerializer(
            mbsNominationResponse, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = MbsNominationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def getMbsNominationForm(request, pk):
    mbsNominationResponse = MbsNominationForm.objects.get(
        id=pk)
    serializer = MbsNominationSerializer(
        mbsNominationResponse, many=False)

    return Response(serializer.data)
