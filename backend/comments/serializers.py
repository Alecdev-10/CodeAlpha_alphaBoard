from rest_framework import serializers

from .models import Comment


class CommentSerializer(serializers.ModelSerializer):
    author = serializers.EmailField(
        source="author.email",
        read_only=True
    )

    class Meta:
        model = Comment
        fields = "__all__"

        read_only_fields = (
            "task",
            "author",
            "createdAt",
            "updatedAt",
        )