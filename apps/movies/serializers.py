from .models import Movies
from rest_framework import serializers

class MoviesSerializer(serializers.ModelSerializer):
    image=serializers.ImageField(allow_null=True)
    class Meta:
        model=Movies
        fields="__all__"