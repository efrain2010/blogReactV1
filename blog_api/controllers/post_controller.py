from django.contrib.auth.models import User
from django.forms.models import model_to_dict
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.response import Response
from blog_api.serializers.post_serializer import PostSerializer
from blog_api.models import Post
from blog_api.models import Category


@api_view(['GET'])
def get_posts(request):
    queryset = Post.objects.order_by('-id')
    serializer = PostSerializer(queryset, many=True)
    return Response(serializer.data, status=200)


@api_view(['POST'])
@authentication_classes([SessionAuthentication, BasicAuthentication])
@permission_classes([IsAuthenticated])
def create_post(request):
    serializer = PostSerializer(data=request.data)
    if serializer.is_valid(
        raise_exception=True) and serializer.validate_user_id(
        request.data["user_id"]) and serializer.validate_category_id(
            request.data["category_id"]):
        obj = serializer.create(serializer.validated_data, request.data["user_id"], request.data["category_id"])
        return Response(f"The post {obj.title} has been created.", status=201)
    return Response("An error has ocurred", status=400)


@api_view(['POST'])
@authentication_classes([SessionAuthentication, BasicAuthentication])
@permission_classes([IsAuthenticated])
def update_post(request):
    serializer = PostSerializer(data=request.data)
    if serializer.is_valid(
        raise_exception=True) and serializer.validate_user_id(
        request.data["user_id"]) and serializer.validate_category_id(
            request.data["category_id"]):
        obj = serializer.create(serializer.validated_data, request.data["user_id"], request.data["category_id"])
        return Response(f"The post {obj.title} has been created.", status=201)
    return Response("An error has ocurred", status=400)


@api_view(['GET'])
def get_post(request, slug):
    try:
        queryset = Post.objects.get(slug=slug)
    except BaseException:
        return Response(f"The post you're trying to delete does not exists.", status=404)
    serializer = PostSerializer(queryset)
    return Response(serializer.data, status=200)


@api_view(['DELETE', 'POST'])
def delete_post(request, post_id):
    try:
        Post.objects.get(id=post_id).delete()
    except BaseException:
        return Response(f"The post you're trying to delete does not exists.", status=404)
    return Response("Post deleted", status=200)
