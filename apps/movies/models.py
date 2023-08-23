from django.db import models
from cloudinary.models import CloudinaryField
from apps.categories.models import Category
# Create your models here.


class Movies(models.Model):
    MYCHOICE = (("Newly Released", "Newly Released"), ("Coming Soon", "Coming Soon" ))
    class Meta(object):
        db_table = "movies"
    name = models.CharField(
        "Name", blank = False,null = False,max_length=50,db_index=True
    )
        
    description = models.CharField(
        "Description", blank = False,null = False,max_length=500,db_index=True
    )

    image = CloudinaryField (
        "image", blank = True, null = True
    )

    image_mobile = CloudinaryField (
        "image_mobile", blank = True, null = True
    )

    movie_duration = models.IntegerField (
        'duration', blank = False, null = False, default=45
    )

    state = models.CharField (
        "state", blank = True, null = True, max_length=50, default="usa"
    )

    release_type = models.CharField (
        "release_type", blank = True, null = True, max_length=50, choices=MYCHOICE
    )

    category_id = models.ForeignKey (
        Category,on_delete=models.CASCADE
    )
    rating= models.IntegerField(
        "Rating", blank=True ,null=True 
    
    )
    release_date =models.DateTimeField(
        "Release Date",blank=False,null=False
    )
    trailer_link =models.CharField(
        "Trailer_Link",blank=False,null=False,max_length=500
    )
    created_at=models.DateTimeField(
        "created_at",blank=True,null=True, auto_now_add=True
    )
    updated_at=models.DateTimeField(
        "updated_at",blank=True,null=True, auto_now=True
    )

    def __str__(self):
        return self.name