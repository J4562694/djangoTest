from django.db import models

# Create your models here.
class SearchLog(models.Model):
    url = models.CharField(max_length=255)
    iswp = models.BooleanField(default=True)
    searchTime = models.DateTimeField(auto_now=True)
    # class Meta:
    #     db_table = 'whitelist'

class Whitelist(models.Model):
    driverName = models.CharField(max_length=255)
    licensePlate = models.CharField(max_length=255)
    class Meta:
        db_table = 'whitelist'
        managed = False
