from django.shortcuts import get_object_or_404

from .models import Task


def getTaskBySlug(*, slug, user):
    return get_object_or_404(
        Task,
        slug=slug,
        project__members=user
    )


def createTask(*, serializer, project, createdBy):
    return serializer.save(
        project=project,
        createdBy=createdBy,
    )