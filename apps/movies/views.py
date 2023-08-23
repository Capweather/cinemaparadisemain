from django.shortcuts import render
from .models import Movies
from .serializers import MoviesSerializer
from rest_framework import generics, filters
from django_filters .rest_framework import DjangoFilterBackend
# Create your views here.

class MovieList(generics.ListAPIView):
    queryset = Movies.objects.order_by('-created_at').all()
    serializer_class=MoviesSerializer
    filter_backends=[DjangoFilterBackend,filters.SearchFilter]
    filterset_fields=['category_id','release_type']
    search_fields = ['name','description']


class MovieDetails(generics.RetrieveAPIView):
    queryset= Movies.objects.all()
    serializer_class=MoviesSerializer
