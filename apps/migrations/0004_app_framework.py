# Generated by Django 2.2.28 on 2023-01-11 17:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apps', '0003_app_type'),
    ]

    operations = [
        migrations.AddField(
            model_name='app',
            name='framework',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
