from rest_framework import serializers
from apps.models import App,Framework,Type

class AppSerializer(serializers.ModelSerializer):

    class Meta:
        model = App
        fields = "__all__"

class TypeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Type
        fields = "__all__"

class FrameworkSerializer(serializers.ModelSerializer):

    class Meta:
        model = Framework
        fields = "__all__"