# Generated by Django 2.2.28 on 2023-01-03 16:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apps', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='app',
            name='description',
            field=models.TextField(blank=True, null=True),
        ),
    ]
