from blog_api.serializers.category_serializer import CategorySerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from blog_api.models import Category
from django.forms.models import model_to_dict


@api_view(['GET'])
def get_categories(request):
    posts = Post.objects.all()
    posts_dict = [post.serialize() for post in posts]
    for post, post_dict in zip(posts, posts_dict):
        temp_user = model_to_dict(post.user)
        post_dict["user"] = {
            "username": temp_user["username"],
            "email": temp_user["email"],
            "first_name": temp_user["first_name"],
            "last_name": temp_user["last_name"],
        }
    return Response(posts_dict, status=200)


@api_view(['POST'])
def create_category(request):
    serializer = CategorySerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        if request.user.is_authenticated is False:
            return Response("The User is not Authenticated", status=401)
        else:
            obj = serializer.save(user=request.user)
            return Response(f"The post {obj.title} has been created.", status=201)
    return Response("An error has ocurred", status=400)


@api_view(['GET'])
def get_category(request, slug):
    try:
        post_model = Post.objects.get(slug=slug)
        post_dict = post_model.serialize()
        user_dict = model_to_dict(post_model.user)
        post_dict["user"] = {
            "username": user_dict["username"],
            "email": user_dict["email"],
            "first_name": user_dict["first_name"],
            "last_name": user_dict["last_name"],
        }
    except BaseException:
        return Response(f"The post {slug} could not been found.", status=404)
    return Response(post_dict, status=200)


@api_view(['DELETE', 'POST'])
def delete_category(request, post_id):
    try:
        Post.objects.get(id=post_id).delete()
    except BaseException:
        return Response(f"The post you're trying to delete does not exists.", status=404)
    return Response("Post deleted", status=200)
