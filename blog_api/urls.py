from django.contrib import admin
from django.urls import path
from blog_api.controllers.post_controller import get_posts
from blog_api.controllers.post_controller import create_post
from blog_api.controllers.post_controller import get_post
from blog_api.controllers.post_controller import update_post
from blog_api.controllers.post_controller import delete_post
from blog_api.controllers.category_controller import get_categories
from blog_api.controllers.category_controller import create_category
from blog_api.controllers.category_controller import get_category
from blog_api.controllers.category_controller import update_category
from blog_api.controllers.category_controller import delete_category

posts_url = "posts/"
categories_url = "categories/"

urlpatterns = [
    # posts
    path(posts_url, get_posts),
    path(posts_url + 'create/', create_post),
    path(posts_url + 'get/<slug:slug>/', get_post),
    path(posts_url + 'update/<int:post_id>/', update_post),
    path(posts_url + 'delete/<int:post_id>/', delete_post),
    # categories
    path(categories_url, get_categories),
    path(categories_url + 'create/', create_category),
    path(categories_url + 'get/<slug:slug>/', get_category),
    path(categories_url + 'update/<int:pk>/', update_category),
    path(categories_url + 'delete/<int:cat_id>/', delete_category),
]
