
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import AppViewSet,TypeViewSet
router = DefaultRouter()
router.register('app', AppViewSet )
router.register('type', TypeViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
