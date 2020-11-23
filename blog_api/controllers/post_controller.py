from blog_api.serializers import PostSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from blog_api.models import Post


@api_view(['GET'])
def get_posts(request):
    posts = Post.objects.all()
    posts_dict = [post.serialize() for post in posts]
    return Response(posts_dict, status=200)


@api_view(['POST'])
def create_post(request):
    serializer = PostSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        if request.user.is_authenticated is False:
            return Response({"authentication": "The User is not Authenticated"}, status=400)
        else:
            obj = serializer.save(user=request.user)
            return Response({"Chambea": "Yes"}, status=200)
    return Response({"Chambea": "No"}, status=400)


@api_view(['GET'])
def get_post(request, slug):
    post = Post.objects.get(slug=slug).serialize()
    return Response(post, status=200)
