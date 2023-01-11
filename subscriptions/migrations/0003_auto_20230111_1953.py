# Generated by Django 2.2.28 on 2023-01-11 19:53

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('apps', '0008_auto_20230111_1846'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('subscriptions', '0002_auto_20230111_1932'),
    ]

    operations = [
        migrations.AlterField(
            model_name='plan',
            name='price',
            field=models.FloatField(),
        ),
        migrations.CreateModel(
            name='Subscription',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('active', models.BooleanField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('app', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='subscription_app', to='apps.App')),
                ('plan', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='subscription_plan', to='subscriptions.Plan')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='subscription_user', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
