from rest_framework import routers
from .api import LineViewset

router = routers.DefaultRouter()

router.register('api/lines', LineViewset, 'lines')

urlpatterns = router.urls