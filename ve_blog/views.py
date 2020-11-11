from django.http import HttpResponse


def get_init_view(request):
    return HttpResponse("hello, Django!")
