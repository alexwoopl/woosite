from django.db import models

# Create your models here.
class SiteSection(models.Model):
    key = models.CharField(max_length=20)
    url = models.CharField(max_length=50)
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name
