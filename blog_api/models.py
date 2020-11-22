from django.db import models
from django.conf import settings

User = settings.AUTH_USER_MODEL


class Post(models.Model):
    POSTS_STATUS = [
        (1, 'Public'),
        (2, 'Private'),
        (3, 'Draft'),
    ]

    parentId = models.ForeignKey("self", blank=True, null=True, on_delete=models.CASCADE)
    title = models.CharField(max_length=120)
    metaTitle = models.CharField(max_length=120)
    content = models.TextField()
    featuredImage = models.ImageField(upload_to='uploads/%Y/%m/%d', blank=True, null=True)
    slug = models.SlugField()
    status = models.CharField(
        max_length=12,
        choices=POSTS_STATUS,
        default=POSTS_STATUS[0]
    )
    createdAt = models.DateTimeField()
    updatedAt = models.DateTimeField()
    publishedAt = models.DateTimeField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def serialize(self):
        return {
            "id": self.id,
            "parentId": self.parentId,
            "title": self.title,
            "metaTitle": self.metaTitle,
            "content": self.content,
            "slug": self.slug,
            "status": self.status,
            "createdAt": self.createdAt,
            "updatedAt": self.updatedAt,
            "publishedAt": self.publishedAt
        }

    @property
    def featuredImageUrl(self):
        if self.featuredImage and hasattr(self.featuredImage, 'url'):
            return self.featuredImage.url


class Comment(models.Model):
    parentId = models.ForeignKey("self", on_delete=models.CASCADE)
    title = models.CharField(max_length=120)
    content = models.TextField()
    post = models.ForeignKey(
        Post,
        on_delete=models.CASCADE
    )


class Meta(models.Model):
    key = models.CharField(max_length=120)
    content = models.TextField()
    post = models.OneToOneField(
        Post,
        on_delete=models.CASCADE
    )


class Category(models.Model):
    title = models.CharField(max_length=120)
    metaTitle = models.CharField(max_length=120)
    slug = models.SlugField()
    post = models.ForeignKey(
        Post,
        on_delete=models.CASCADE
    )


class Tag(models.Model):
    title = models.CharField(max_length=120)
    metaTitle = models.CharField(max_length=120)
    slug = models.SlugField()
    post = models.ManyToManyField(Post)
