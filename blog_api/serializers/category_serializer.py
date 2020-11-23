from rest_framework import serializers
from blog_api.models import Category


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"

    def update(self, instance, validated_data):
        print(instance, validated_data)
