# -*- coding: utf-8 -*-
# Generated by Django 1.10.4 on 2016-12-06 10:10
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0003_auto_20161206_1007'),
    ]

    operations = [
        migrations.RenameField(
            model_name='task',
            old_name='subtask',
            new_name='task',
        ),
    ]
