from django.urls import path, include
from .views import index, viaje

urlpatterns = [
  path("viaje", viaje, name="viaje"),
]