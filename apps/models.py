from django.conf import settings
from django.db import models
class App(models.Model):
    'Generated Model'
    description = models.TextField(null=True,blank=True,)
    type = models.ForeignKey("apps.Type",null=True,blank=True,on_delete=models.SET_NULL,related_name="app_type",)
    framework = models.ForeignKey("apps.Framework",null=True,blank=True,on_delete=models.SET_NULL,related_name="app_framework",)
    domain_name = models.CharField(max_length=50,null=True,blank=True,)
    name = models.CharField(max_length=50,null=True,blank=True,)
    screenshot = models.URLField(null=True,blank=True,)
    user = models.ForeignKey("users.User",on_delete=models.SET_NULL,null=True,blank=True,related_name="app_user",)
    create_at = models.DateTimeField(auto_now_add=True,null=True,blank=True,)
    updated_at = models.DateTimeField(auto_now=True,null=True,blank=True,)
class Type(models.Model):
    'Generated Model'
    name = models.TextField()
class Framework(models.Model):
    'Generated Model'
    name = models.TextField()

# Create your models here.
