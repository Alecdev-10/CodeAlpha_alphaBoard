from django.urls import path

from .views import ProjectTaskViewSet, TaskViewSet

projectTasks = ProjectTaskViewSet.as_view({
    "get": "list",
    "post": "create",
})

taskDetail = TaskViewSet.as_view({
    "get": "retrieve",
    "put": "update",
    "patch": "partial_update",
    "delete": "destroy",
})

urlpatterns = [
    path(
        "projects/<slug:project_slug>/tasks/",
        projectTasks,
        name="project-tasks",
    ),
    path(
        "tasks/<slug:slug>/",
        taskDetail,
        name="task-detail",
    ),
]