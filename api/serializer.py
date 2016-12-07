from rest_framework import serializers

from .models import Project, Task

from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name', 'email')


class ProjectSerializer(serializers.ModelSerializer):

    class Meta:
        model = Project
        # fields = '__all__'
        fields = (
            'id',
            'title',
            'description',
            'deadline',
            'image',
            'tasks'
        )


class TaskSerializer(serializers.ModelSerializer):
    subtasks = serializers.PrimaryKeyRelatedField(many=True, read_only=True,
                                                  required=False)

    # user = UserSerializer(many=True, required=False)

    class Meta:
        model = Task
        # fields = '__all__'
        fields = (
            'id',
            'title',
            'description',
            'start_date',
            'end_date',
            'project',
            'subtasks',
            'user'
        )


class SubTaskSerializer(serializers.ModelSerializer):

    class Meta:
        model = Task
        fields = (
            'id',
            'title',
            'description',
            'start_date',
            'end_date',
            'task',
            'user'
        )


