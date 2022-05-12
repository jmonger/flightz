from django.db import models

class Inquiry(models.Model):
    name = models.CharField(max_length=60)
    email = models.EmailField(max_length=60)
    phone = models.CharField(max_length=60)
    message = models.TextField()



