from django.forms.models import model_to_dict
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from blog_api.serializers.category_serializer import CategorySerializer
from blog_api.models import Category


@api_view(['GET'])
def get_categories(request):
    queryset = Category.objects.order_by('-id')
    serializer = CategorySerializer(queryset, many=True)
    return Response(serializer.data, status=200)


@api_view(['POST'])
@authentication_classes([SessionAuthentication, BasicAuthentication])
@permission_classes([IsAuthenticated])
def create_category(request):
    serializer = CategorySerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        obj = serializer.save()
        return Response(f"The category {obj.title} has been created.", status=201)
    return Response("An error has ocurred", status=400)


@api_view(['PUT', 'POST'])
@authentication_classes([SessionAuthentication, BasicAuthentication])
@permission_classes([IsAuthenticated])
def update_category(request, pk):
    try:
        category = Category.objects.get(pk=pk)
    except Category.DoesNotExist:
        return Response("Category not found.", status=404)

    if request.method == "PUT":
        serializer = CategorySerializer(category, data=request.data)
        if serializer.is_valid(raise_exception=True):
            obj = serializer.save()
            return Response(f"The category {obj.title} has been updated.", status=200)
    return Response("An error has ocurred", status=400)


@api_view(['GET'])
def get_category(request, slug):
    try:
        queryset = Category.objects.get(slug=slug)
    except BaseException:
        return Response(f"The category you're trying to delete does not exists.", status=404)
    serializer = CategorySerializer(queryset)
    return Response(serializer.data, status=200)


@api_view(['DELETE', 'POST'])
def delete_category(request, cat_id):
    try:
        Category.objects.get(id=cat_id).delete()
    except BaseException:
        return Response(f"The category you're trying to delete does not exists.", status=404)
    return Response("Category deleted", status=200)
