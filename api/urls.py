from django.conf.urls import url

from . import views


urlpatterns = [
    url(r'^qwe/$', views.SnippetList.as_view(), name='list'),
]
