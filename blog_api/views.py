from django.shortcuts import render

# Create your views here.
def get_posts(request):
  return [
    {
      id: 1,
      'title': 'post 1',
      'content': 'content 1'
    },
    {
      id: 2,
      'title': 'post 2',
      'content': 'content 2'
    },
    {
      id: 3,
      'title': 'post 3',
      'content': 'content 3'
    },
  ]


def get_authors():
  return [
    {
      'id': 1,
      'name': 'Jane',
    },
    {
      'id': 2,
      'name': 'Paul',
    },
    {
      'id': 3,
      'name': 'George',
    },
  ]