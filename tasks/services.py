def createTask(*, serializer, project, createdBy):
    return serializer.save(
        project=project,
        createdBy=createdBy,
    )