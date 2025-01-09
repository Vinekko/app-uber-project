from django.db import models

# Create your models here.

class Client(models.Model):
    name = models.CharField(max_length=200)
    lastname = models.CharField(max_length=200)
    cedula = models.CharField(max_length=9, unique=True)
    is_driver = models.BooleanField(default=False)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=200)

    def str(self):
        return f"{self.name} {self.lastname}"


class Driver(models.Model):
    car_model = models.CharField(max_length=200)
    license_plate = models.CharField(max_length=10, unique=True)
    available = models.BooleanField(default=True)
    client = models.OneToOneField(Client, on_delete=models.CASCADE, primary_key=True)
    password = models.CharField(max_length=200) 

    def str(self):
        return f"{self.client.name} {self.client.lastname}"