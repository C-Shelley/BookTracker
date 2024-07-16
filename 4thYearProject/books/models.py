from django.db import models




class Books(models.Model):
    title = models.CharField(max_length=100, blank = True, null = True)
    author = models.CharField(max_length=100, blank = True, null = True)
    description = models.CharField(max_length=5000, blank = True, null = True)
    pages = models.IntegerField(blank = True, null = True)
    cover = models.CharField(max_length=5000, blank = True, null = True)
    def __str__(self):
        return self.title