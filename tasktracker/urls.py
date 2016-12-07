from django.conf.urls import url, include
from django.conf import settings
from django.conf.urls.static import static

from rest_framework.routers import DefaultRouter

from api.views import home

from accounts.views import ProjectList, TaskList


router = DefaultRouter()
router.register(r'projects', ProjectList)
router.register(r'projects', TaskList)

urlpatterns = [
    url(r'^api-auth/', include('rest_framework.urls',
                               namespace='rest_framework')),
    # url(r'^api/', include(router.urls)),
    url(r'^api/', include('accounts.urls')),
    url(r'^$', home),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
