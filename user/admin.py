from django.contrib import admin
from .models import User, JsgGroup, JsgRegion
from django.contrib.auth.admin import UserAdmin


class UserAdminConfig(UserAdmin):
    fieldsets = (
        (None, {'fields': ('username', 'email', 'accessGroup', 'first_name', 'last_name',
         'contactNumber', 'whatsappNumber', 'address', 'jsgGroupName', 'jsgRegionName', 'img', 'post', 'password', )}),
        ('Permissions', {
         'fields': ('isRegionEditor', 'isGroupEditor', 'is_staff', 'is_active', 'is_superuser')}),
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('username', 'email', 'password1', 'password2', 'first_name', 'last_name',
                       'contactNumber', 'whatsappNumber', 'address', 'accessGroup', 'jsgGroupName', 'isGroupEditor', 'jsgRegionName', 'isRegionEditor', 'img', 'post', 'is_staff', 'is_active', 'is_superuser',)}),
    )

    search_fields = ('username', 'first_name', 'last_name',
                     'email', 'jsgRegionName', 'jsgGroupName', 'isGroupEditor', 'accessGroup',)
    list_filter = ('jsgRegionName', 'jsgGroupName',
                   'accessGroup', 'is_staff', 'is_active', 'post')
    ordering = ('-jsgGroupName', )
    list_display = ('username', 'first_name', 'last_name',
                    'email', 'jsgRegionName', 'jsgGroupName', 'accessGroup', 'post')


admin.site.register(User, UserAdminConfig)
admin.site.register(JsgGroup)
admin.site.register(JsgRegion)
