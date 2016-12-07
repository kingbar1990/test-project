from django.conf.urls import url, include

from . import views


urlpatterns = [
    url(r'^projects/$', views.ProjectList.as_view()),
    url(r'^projects/(?P<pk>[0-9]+)/$', views.ProjectDetail.as_view()),
    url(r'^tasks/$', views.TaskList.as_view()),
    url(r'^tasks/(?P<pk>[0-9]+)/$', views.TaskDetail.as_view()),
    url(r'^subtasks/$', views.SubTaskList.as_view()),
    url(r'^subtasks/(?P<pk>[0-9]+)/$', views.SubTaskDetail.as_view()),
    url(r'^users/$', views.UserList.as_view()),
    url(r'^users/(?P<pk>[0-9]+)/$', views.UserDetail.as_view()),
    url(r'^accounts/', include('rest_registration.api.urls')),
]
