from django.contrib import admin
from django.urls import path
from .views import get_posts
from .views import get_authors

urlpatterns = [
    path('get_posts/', get_posts),
    path('get_authors/', get_authors),
]