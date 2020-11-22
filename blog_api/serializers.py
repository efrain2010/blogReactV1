from rest_framework import serializers
from blog_api.models import Post


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ["parentId",
                  "title",
                  "metaTitle",
                  "content",
                  "featuredImage",
                  "slug",
                  "status",
                  "createdAt",
                  "updatedAt",
                  "publishedAt"]
