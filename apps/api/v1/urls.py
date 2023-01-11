
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import AppViewSet,FrameworkViewSet,TypeViewSet
router = DefaultRouter()
router.register('app', AppViewSet )
router.register('type', TypeViewSet )
router.register('framework', FrameworkViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
