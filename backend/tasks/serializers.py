from rest_framework import serializers

from .models import Task


class TaskSerializer(serializers.ModelSerializer):
    createdBy = serializers.EmailField(
        source="createdBy.email",
        read_only=True
    )

    class Meta:
        model = Task
        fields = "__all__"

        read_only_fields = (
            "slug",
            "project",
            "createdBy",
            "createdAt",
            "updatedAt",
        )