from rest_framework import mixins, viewsets
from rest_framework.permissions import IsAuthenticated
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter, OrderingFilter

from .models import Task
from .serializers import TaskSerializer
from .services import createTask
from projects.services import getProjectBySlug

filter_backends = [
    DjangoFilterBackend,
    SearchFilter,
    OrderingFilter,
]

filterset_fields = [
    "status",
    "priority",
    "assignedTo",
]

search_fields = [
    "title",
    "description",
]

ordering_fields = [
    "createdAt",
    "updatedAt",
    "dueDate",
    "priority",
]

ordering = [
    "-createdAt"
]


class ProjectTaskViewSet(
    mixins.ListModelMixin,
    mixins.CreateModelMixin,
    viewsets.GenericViewSet,
):
    serializer_class = TaskSerializer
    permission_classes = [IsAuthenticated]

    def getProject(self):
        return getProjectBySlug(
            slug=self.kwargs["project_slug"],
            user=self.request.user,
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

    def get_queryset(self):
        return Task.objects.filter(
            project__members=self.request.user
        )