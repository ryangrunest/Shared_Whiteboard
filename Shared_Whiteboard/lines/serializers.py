from rest_framework import serializers
from lines.models import Lines

# Line Serializer
class LineSerializer(serializers.ModelSerializer):
  class Meta:
    model = Lines
    fields = '__all__'