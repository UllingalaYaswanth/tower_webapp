# -*- encoding: utf-8 -*-
"""
Copyright (c) 2019 - present AppSeed.us
"""

from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class UploadFile(models.Model):
    excel_file = models.FileField(upload_to='media/excel/')
    laz_file = models.FileField(upload_to='media/laz/')
    obj_file = models.FileField(upload_to='media/obj/')
    kml_file = models.FileField(upload_to='media/kml/')
    pdf_file = models.FileField(upload_to='media/pdf/')

