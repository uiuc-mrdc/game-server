import datetime
from django.db import models
from django.utils import timezone

class School(models.Model):
    school_name = models.CharField(max_length=300)
    def __str__(self):
       return self.school_name

class Team(models.Model):
    team_name = models.CharField(max_length=100, unique=True)
    school = models.ForeignKey(School, null=True, on_delete=models.SET_NULL, blank=True)
    def __str__(self):
        return self.team_name
