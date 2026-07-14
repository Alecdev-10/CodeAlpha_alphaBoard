from django.shortcuts import get_object_or_404

from .models import Comment


def createComment(*, serializer, task, author):
    return serializer.save(
        task=task,
        author=author,
    )


def getCommentById(*, pk, user):
    return get_object_or_404(
        Comment,
        pk=pk,
        task__project__members=user
    )