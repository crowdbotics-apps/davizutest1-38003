from django.conf import settings
from django.db import models
class App(models.Model):
    'Generated Model'
    name = models.TextField()
    description = models.TextField(null=True,blank=True,)
    framework = models.IntegerField(null=True,blank=True,)
    type = models.ForeignKey("apps.Type",on_delete=models.SET_NULL,null=True,blank=True,related_name="app_type",)
class Type(models.Model):
    'Generated Model'
    name = models.TextField()

# Create your models here.
