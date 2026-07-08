from django.urls import path

from .views import TaskCommentViewSet, CommentViewSet

taskComments = TaskCommentViewSet.as_view({
    "get": "list",
    "post": "create",
})

commentDetail = CommentViewSet.as_view({
    "get": "retrieve",
    "patch": "partial_update",
    "delete": "destroy",
})

urlpatterns = [
    path(
        "tasks/<slug:task_slug>/comments/",
        taskComments,
        name="task-comments",
    ),
    path(
        "comments/<int:pk>/",
        commentDetail,
        name="comment-detail",
    ),
]