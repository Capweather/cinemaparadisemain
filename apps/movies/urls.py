from django.urls import path
from .views import MovieList, MovieDetails

urlpatterns =[
    path('',MovieList.as_view(),name='MovieList'),
    path('<int:pk>',MovieDetails.as_view(),name='MovieDetail'),
]