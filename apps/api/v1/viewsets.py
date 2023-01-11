from rest_framework import authentication
from apps.models import App,Framework,Type
from .serializers import AppSerializer,FrameworkSerializer,TypeSerializer
from rest_framework import viewsets

class AppViewSet(viewsets.ModelViewSet):
    serializer_class = AppSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = App.objects.all()

class TypeViewSet(viewsets.ModelViewSet):
    serializer_class = TypeSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Type.objects.all()

class FrameworkViewSet(viewsets.ModelViewSet):
    serializer_class = FrameworkSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Framework.objects.all()