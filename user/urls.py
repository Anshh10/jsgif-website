from django.urls import path
from . import views

from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


urlpatterns = [
    path('region/', views.getRegionList, name='region_list'),
    path('region/<regName>', views.getRegionDetails, name='region_details'),
    path('group/', views.getGroupList, name='groups_list'),
    path('group/<grpName>', views.getGroupDetails, name='group_details'),
    path('<regName>/groups/', views.RegGroupDetails,
         name='regwise_group_details'),

    path('list/', views.getUsers, name='users-list'),
    path('user/<str:pk>', views.getUser, name='users-details'),
    path('region/<regName>/<isRegionEditor>',
         views.regionUsers, name='region-users'),
    #     path('group/<grpName>/<isRegionEditor>',
    #          views.regionUsers, name='grp-users'),
    #     path('group/<grpName>/', views.groupUsers, name='group-users'),

    path('login/jwt-token/', views.MyTokenObtainPairView.as_view(),
         name='token_obtain_pair'),
    path('login/jwt-token/refresh/',
         TokenRefreshView.as_view(), name='token_refresh'),
]
