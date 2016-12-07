from django.db import models
from django.conf import settings


class Project(models.Model):
    title = models.CharField('project title', max_length=50)
    description = models.TextField('description', blank=True, null=True)
    deadline = models.DateField('deadline')
    image = models.ImageField(upload_to='projects_avatars', blank=True,
                              null=True)

    def __str__(self):
        return self.title


class Task(models.Model):
    title = models.CharField('task title', max_length=50)
    description = models.TextField('description', blank=True, null=True)
    start_date = models.DateField('start date')
    end_date = models.DateField('end date')
    project = models.ForeignKey('Project', related_name='tasks', blank=True,
                                null=True, on_delete=models.CASCADE)
    task = models.ForeignKey(
        'self', related_name='subtasks', blank=True, null=True)
    user = models.ManyToManyField(settings.AUTH_USER_MODEL, blank=True)

    def __str__(self):
        return self.title
