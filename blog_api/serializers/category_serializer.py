from rest_framework import serializers
from blog_api.models import Category


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["title",
                  "metaTitle",
                  "slug",
                  "post"]
