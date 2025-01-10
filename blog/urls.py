from django.urls import path, include
from .views import index, viaje, login

urlpatterns = [
  path("", login, name="login"),
]