from django.contrib import admin
from django.urls import path
from blog_api.controllers.post_controller import get_posts
from blog_api.controllers.post_controller import create_post

urlpatterns = [
    path('posts/', get_posts),
    path('post/create/', create_post),
]
