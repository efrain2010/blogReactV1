import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 've_blog.settings')

import django
django.setup()

from django.contrib.auth.models import User
from django.utils import timezone
from blog_api.models import Post
from django.contrib.auth.hashers import make_password


def populate():
    user_model = add_user()
    print(f'- User {user_model.first_name} created -')

    for i in range(6):
        post_temp = {
            "parentId": None,
            "title": f"Post title {i+1}",
            "metaTitle": f"Post title {i+1}",
            "content": f"Post content number {i+1}",
            "slug": f"post-title-{i+1}",
            "status": True,
            "createdAt": timezone.now(),
            "updatedAt": timezone.now(),
            "publishedAt": timezone.now(),
            "user_id": user_model.id
        }
        post_model = add_post(post_temp)
        print(f'- Post {post_model.title} created')


def add_post(post):
    post_model = Post.objects.get_or_create(
        parentId= post["parentId"],
        title= post["title"],
        metaTitle= post["metaTitle"],
        content= post["content"],
        slug= post["slug"],
        status= post["status"],
        createdAt= post["createdAt"],
        updatedAt= post["updatedAt"],
        publishedAt= post["publishedAt"],
        user_id= post["user_id"]
    )[0]
    return post_model


def add_user():
    if len(User.objects.filter(username="efra")) > 0:
      user_model = User.objects.filter(username="efra")[0]
    else:
      user_model = User(
            username = "efra",
            email = "efrain.villanueva3@gmail.com",
            password = make_password("demodemo"),
            first_name = "Efrain",
            last_name = "Villanueva")
    user_model.save()
    return user_model


if __name__ == '__main__':
    print('Starting VE Blog population script...')
    populate()
