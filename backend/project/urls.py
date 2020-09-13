from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from rest_framework import routers
from django.conf.urls.static import static
import project.settings.base as settings


from users.views import (UserProfileViewset, 
                        UserListViewset, 
                        UserLoginAPIView, 
                        UserLogOutAPIView, 
                      	)

from blog.views import BlogViewset


router = routers.DefaultRouter()
router.register(r'django/blogs', BlogViewset)


router.register(r'django/users-profile', UserProfileViewset, basename="users-profile")
router.register(r'django/users-list', UserListViewset, basename="users-list")

urlpatterns = [
    url(r'^admin/', admin.site.urls),

    #Login & Logout
    path('django/login/', UserLoginAPIView.as_view(), name='login'),
		path('django/logout/', UserLogOutAPIView.as_view(), name='logout'),    

    #Registered Router APIView Routes
    path('', include(router.urls)),


    #API Links
    url(r'^api/', include((router.urls, 'app_name'),
                          namespace='instance_name')),
    url(r'^api/accounts/', include('rest_registration.api.urls')),
    url(r'^api/auth/',
        include('rest_framework.urls', namespace='rest_framework')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
