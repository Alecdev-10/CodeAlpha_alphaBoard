from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated


from .permissions import IsProjectOwner
from .serializers import ProjectSerializer
from .services import createProject


class ProjectViewSet(viewsets.ModelViewSet):
    serializer_class = ProjectSerializer
    permission_classes = [IsAuthenticated]
    lookup_field = "slug"
    
    def get_queryset(self):
        return self.request.user.projects.all()

    def perform_create(self, serializer):
        createProject(
            serializer=serializer,
            owner=self.request.user,
        )

    def get_permissions(self):
        if self.action in ["update", "partial_update", "destroy"]:
            return [IsAuthenticated(), IsProjectOwner()]

        return [IsAuthenticated()]