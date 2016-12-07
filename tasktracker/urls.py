from django.conf.urls import url, include
from django.conf import settings
from django.conf.urls.static import static

from api.views import home


urlpatterns = [
    url(r'^api-auth/', include('rest_framework.urls',
                               namespace='rest_framework')),
    url(r'^api/', include('api.urls')),
    url(r'^$', home),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
