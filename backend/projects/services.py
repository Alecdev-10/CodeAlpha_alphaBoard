from django.shortcuts import get_object_or_404

from .models import Project


def getProjectBySlug(*, slug, user):
    return get_object_or_404(
        Project,
        slug=slug,
        members=user
    )


def createProject(*, serializer, owner):
    project = serializer.save(owner=owner)

    project.members.add(owner)

    return project