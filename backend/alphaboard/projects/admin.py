from django.contrib import admin

from .models import Project


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "slug",
        "owner",
        "createdAt",
    )

    search_fields = (
        "name",
        "description",
    )

    list_filter = (
        "createdAt",
    )

    filter_horizontal = (
        "members",
    )