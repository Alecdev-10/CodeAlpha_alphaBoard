from django.contrib import admin

from .models import Comment


@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "author",
        "task",
        "createdAt",
    )

    search_fields = (
        "content",
        "author__email",
    )

    list_filter = (
        "createdAt",
    )

    autocomplete_fields = (
        "author",
        "task",
    )