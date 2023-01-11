from rest_framework import serializers
from apps.models import App,Type

class AppSerializer(serializers.ModelSerializer):

    class Meta:
        model = App
        fields = "__all__"

class TypeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Type
        fields = "__all__"