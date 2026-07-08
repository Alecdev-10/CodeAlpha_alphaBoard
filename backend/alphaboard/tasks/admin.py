from django.contrib import admin

from .models import Task


@admin.register(Task)
class TaskAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "project",
        "assignedTo",
        "status",
        "priority",
        "dueDate",
        "createdAt",
    )

    search_fields = (
        "title",
        "description",
    )

    list_filter = (
        "status",
        "priority",
        "project",
    )

    autocomplete_fields = (
        "project",
        "assignedTo",
        "createdBy",
    )