from django.contrib.auth.models import User
from blog_api.models import Category
from blog_api.models import Post
from rest_framework import serializers
from blog_api.serializers.user_serializer import UserSerializer
from blog_api.serializers.category_serializer import CategorySerializer


class PostSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)
    user = UserSerializer(read_only=True)
    category_id = serializers.IntegerField()
    user_id = serializers.IntegerField()

    class Meta:
        model = Post
        fields = "__all__"

    def validate_category_id(self, value):
        if isinstance(value, int) is False or value is None:
            raise serializers.ValidationError("Category is required")
        return value

    def validate_user_id(self, value):
        if isinstance(value, int) is False or value is None:
            raise serializers.ValidationError("User is required")
        return value

    def create(self, validated_data, user_id, category_id):
        user_instance = User.objects.get(id=user_id)
        category_instance = Category.objects.get(id=category_id)
        post_instance = Post(**validated_data)
        post_instance.user = user_instance
        post_instance.category = category_instance
        post_instance.save()
        return post_instance
