from django import forms
from .models import UploadFile
class UploadFileForm(forms.ModelForm):
    class Meta:
        model = UploadFile
        fields = ('excel_file','laz_file','obj_file','kml_file','pdf_file' )

class TowerForm(forms.Form):
    Tower_ID = forms.CharField()