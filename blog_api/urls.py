from django.contrib import admin
from django.urls import path
from blog_api.controllers.post_controller import get_posts
from blog_api.controllers.post_controller import create_post
from blog_api.controllers.post_controller import get_post
from blog_api.controllers.post_controller import delete_post

section_name = "posts/"

urlpatterns = [
    path(section_name, get_posts),
    path(section_name + 'create/', create_post),
    path(section_name + 'get/<slug:slug>/', get_post),
    path(section_name + 'delete/<int:post_id>/', delete_post),
]
