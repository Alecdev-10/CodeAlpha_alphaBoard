from django.conf import settings
from django.db import models
from common.utils import generateUniqueSlug

from projects.models import Project


class Task(models.Model):

    class Status(models.TextChoices):
        TODO = "TODO", "To Do"
        IN_PROGRESS = "IN_PROGRESS", "In Progress"
        DONE = "DONE", "Done"

    class Priority(models.TextChoices):
        LOW = "LOW", "Low"
        MEDIUM = "MEDIUM", "Medium"
        HIGH = "HIGH", "High"

    title = models.CharField(max_length=150)
    description = models.TextField(blank=True)

    project = models.ForeignKey(
        Project,
        on_delete=models.CASCADE,
        related_name="tasks"
    )

    createdBy = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="createdTasks"
    )

    assignedTo = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="assignedTasks"
    )

    status = models.CharField(
        max_length=20,
        choices=Status.choices,
        default=Status.TODO
    )

    priority = models.CharField(
        max_length=10,
        choices=Priority.choices,
        default=Priority.MEDIUM
    )

    dueDate = models.DateField(
        null=True,
        blank=True
    )

    slug = models.SlugField(
        max_length=180,
        unique=True,
        editable=False
    )

    list_select_related = (
        "project",
        "assignedTo",
        "createdBy",
    )

    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = generateUniqueSlug(Task, self.title)

        super().save(*args, **kwargs)

    def __str__(self):
        return self.title