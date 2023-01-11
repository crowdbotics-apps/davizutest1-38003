from django.contrib import admin
from .models import App,Framework,Type
admin.site.register(App)
admin.site.register(Type)
admin.site.register(Framework)

# Register your models here.
