from django.conf import settings
from django.db import models
class App(models.Model):
    'Generated Model'
    description = models.TextField(null=True,blank=True,)
    type = models.ForeignKey("apps.Type",null=True,blank=True,on_delete=models.SET_NULL,related_name="app_type",)
    framework = models.ForeignKey("apps.Framework",null=True,blank=True,on_delete=models.SET_NULL,related_name="app_framework",)
    domain_name = models.CharField(null=True,blank=True,max_length=50,)
    name = models.CharField(null=True,blank=True,max_length=50,)
    screenshot = models.URLField(null=True,blank=True,)
    user = models.ForeignKey("users.User",null=True,blank=True,on_delete=models.SET_NULL,related_name="app_user",)
    create_at = models.DateTimeField(null=True,blank=True,auto_now_add=True,)
    updated_at = models.DateTimeField(null=True,blank=True,auto_now=True,)
class Type(models.Model):
    'Generated Model'
    name = models.TextField()
class Framework(models.Model):
    'Generated Model'
    name = models.TextField()

# Create your models here.
