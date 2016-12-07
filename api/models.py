from __future__ import unicode_literals

from django.db import models
from django.utils.translation import ugettext_lazy as _


class Project(models.Model):
    name = models.CharField(_(u'name'), max_length=255)
    description = models.TextField(_(u'description'))
    duration = models.DurationField(_(u'duration'))
    avatar = models.ImageField(_(u'avatar'), upload_to='projects/avatars/%Y/%m/', blank=True)

    def __str__(self):
        return self.name
