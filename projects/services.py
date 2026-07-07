from .models import Project


def createProject(*, serializer, owner):
    project = serializer.save(owner=owner)

    project.members.add(owner)

    return project