from django.conf import settings
from django.db import models
class Plan(models.Model):
    'Generated Model'
    name = models.CharField(max_length=20,)
    description = models.TextField()
    price = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True,)
    updated_at = models.DateTimeField(auto_now=True,)
class Subscription(models.Model):
    'Generated Model'
    user = models.ForeignKey("users.User",on_delete=models.CASCADE,related_name="subscription_user",)
    plan = models.ForeignKey("subscriptions.Plan",on_delete=models.CASCADE,related_name="subscription_plan",)
    app = models.ForeignKey("apps.App",on_delete=models.CASCADE,related_name="subscription_app",)
    active = models.BooleanField()
    created_at = models.DateTimeField(auto_now_add=True,)
    updated_at = models.DateTimeField(auto_now=True,)

# Create your models here.
