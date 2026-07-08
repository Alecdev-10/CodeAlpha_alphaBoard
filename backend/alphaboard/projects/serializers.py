from rest_framework import serializers

from .models import Project


class ProjectSerializer(serializers.ModelSerializer):

    ownerId = serializers.IntegerField(
        source="owner.id",
        read_only=True
    )

    ownerEmail = serializers.EmailField(
        source="owner.email",
        read_only=True
    )

    class Meta:
        model = Project
        fields = "__all__"
        read_only_fields = (
            "owner",
            "members",
            "createdAt",
            "updatedAt",
        )