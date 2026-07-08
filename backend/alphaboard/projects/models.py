from django.conf import settings
from django.db import models
from common.utils import generateUniqueSlug

class Project(models.Model):
    name = models.CharField(max_length=150)
    description = models.TextField(blank=True)

    owner = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="ownedProjects"
    )

    members = models.ManyToManyField(
        settings.AUTH_USER_MODEL,
        related_name="projects"
    )

    slug = models.SlugField(
        max_length=180,
        unique=True,
        editable=False
    )

    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = generateUniqueSlug(Project, self.name)

        super().save(*args, **kwargs)

    def __str__(self):
        return self.name