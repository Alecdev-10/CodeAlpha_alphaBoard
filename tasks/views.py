from rest_framework import mixins, viewsets
from rest_framework.permissions import IsAuthenticated

from .models import Task
from .serializers import TaskSerializer
from .services import createTask
from projects.services import getProjectBySlug


class ProjectTaskViewSet(
    mixins.ListModelMixin,
    mixins.CreateModelMixin,
    viewsets.GenericViewSet,
):
    serializer_class = TaskSerializer
    permission_classes = [IsAuthenticated]

    def getProject(self):
        return getProjectBySlug(
            slug=self.kwargs["project_slug"]
        )

    def get_queryset(self):
        return self.getProject().tasks.all()

    def perform_create(self, serializer):
        createTask(
            serializer=serializer,
            project=self.getProject(),
            createdBy=self.request.user,
        )
    
class TaskViewSet(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    permission_classes = [IsAuthenticated]
    lookup_field = "slug"

    queryset = Task.objects.all()