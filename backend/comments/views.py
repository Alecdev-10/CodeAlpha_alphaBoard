from rest_framework import mixins, viewsets
from rest_framework.permissions import IsAuthenticated

from tasks.services import getTaskBySlug

from .serializers import CommentSerializer
from .services import createComment, getCommentById
from .permissions import IsCommentAuthor

class TaskCommentViewSet(
    mixins.ListModelMixin,
    mixins.CreateModelMixin,
    viewsets.GenericViewSet,
):
    serializer_class = CommentSerializer
    permission_classes = [IsAuthenticated]

    def getTask(self):
        return getTaskBySlug(
            slug=self.kwargs["task_slug"],
            user=self.request.user,
        )

    def get_queryset(self):
        return self.getTask().comments.all()

    def perform_create(self, serializer):
        createComment(
            serializer=serializer,
            task=self.getTask(),
            author=self.request.user,
        )

class CommentViewSet(
    mixins.RetrieveModelMixin,
    mixins.UpdateModelMixin,
    mixins.DestroyModelMixin,
    viewsets.GenericViewSet,
):
    serializer_class = CommentSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return self.request.user.comments.filter(
            task__project__members=self.request.user
        )

    def get_object(self):
        return getCommentById(
            pk=self.kwargs["pk"],
            user=self.request.user,
        )
    def get_permissions(self):
        if self.action in ["partial_update", "destroy"]:
            return [IsAuthenticated(), IsCommentAuthor()]

        return [IsAuthenticated()]