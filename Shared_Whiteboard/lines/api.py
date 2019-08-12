from lines.models import Lines
from rest_framework import viewsets, permissions
from .serializers import LineSerializer

# Line Viewset
class LineViewset(viewsets.ModelViewSet):
  queryset = Lines.objects.all()
  permission_classes = [
    permissions.AllowAny
  ]
  serializer_class = LineSerializer