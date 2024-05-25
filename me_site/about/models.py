from django.db import models


# Create your models here.
class Profile(models.Model):
    name = models.CharField(max_length=256, null=True, blank=True)
    age = models.PositiveSmallIntegerField(null=True, blank=True)
