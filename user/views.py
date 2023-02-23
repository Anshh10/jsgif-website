from user.models import User, JsgRegion, JsgGroup
from user.serializers import UserSerializer, MyTokenObtainPairSerializer, JsgRegionSerializer, JsgGroupSerializer

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView


@api_view(['GET', 'POST'])
def getUsers(request):
    if request.method == 'GET':
        user = User.objects.all()
        serializer = UserSerializer(user, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def getUser(request, pk):
    if request.method == 'GET':
        user = User.objects.get(id=pk)
        serializer = UserSerializer(user, many=False)

        return Response(serializer.data)


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['GET', 'POST'])
def getRegionList(request):
    if request.method == 'GET':
        region = JsgRegion.objects.all()
        serializer = JsgRegionSerializer(region, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = JsgRegionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def getRegionDetails(request, regName):
    if request.method == 'GET':
        region = JsgRegion.objects.get(region=regName)
        serializer = JsgRegionSerializer(region, many=False)

        return Response(serializer.data)


@api_view(['GET', 'POST'])
def getGroupList(request):
    if request.method == 'GET':
        groups = JsgGroup.objects.all()
        serializer = JsgGroupSerializer(groups, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = JsgGroupSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def getGroupDetails(request, grpName):
    if request.method == 'GET':
        region = JsgGroup.objects.get(group=grpName)
        serializer = JsgGroupSerializer(region, many=False)

        return Response(serializer.data)


@api_view(['GET'])
def RegGroupDetails(request, regName):
    groups = JsgGroup.objects.filter(region=regName)
    serializer = JsgGroupSerializer(groups, many=True)

    return Response(serializer.data)


@api_view(['GET'])
def regionUsers(request, regName, isRegionEditor):
    user = User.objects.filter(
        jsgRegionName=regName, isRegionEditor=isRegionEditor)
    serializer = UserSerializer(user, many=True)

    return Response(serializer.data)


@api_view(['GET'])
def groupUsers(request, grpName, isGroupEditor):
    user = User.objects.filter(jsgGroupName=grpName)
    serializer = UserSerializer(user, many=True)

    return Response(serializer.data)
