from django.conf import settings
from django.db import models
class App(models.Model):
    'Generated Model'
    name = models.TextField()
    description = models.TextField(null=True,blank=True,)
    type = models.IntegerField(null=True,blank=True,)
    framework = models.IntegerField(null=True,blank=True,)

# Create your models here.
