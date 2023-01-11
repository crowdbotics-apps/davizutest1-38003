from django.conf import settings
from django.db import models
class Plan(models.Model):
    'Generated Model'
    name = models.CharField(max_length=20,)
    description = models.TextField()
    price = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True,)
    updated_at = models.DateTimeField(auto_now=True,)

# Create your models here.
