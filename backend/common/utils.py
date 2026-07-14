from django.utils.text import slugify


def generateUniqueSlug(model, value):
    """
    Generate a unique slug for the given model.
    """

    baseSlug = slugify(value)
    slug = baseSlug

    counter = 2

    while model.objects.filter(slug=slug).exists():
        slug = f"{baseSlug}-{counter}"
        counter += 1

    return slug