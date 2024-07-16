# Generated by Django 5.0.4 on 2024-04-21 16:04

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Books',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, max_length=100, null=True)),
                ('author', models.CharField(blank=True, max_length=100, null=True)),
                ('description', models.CharField(blank=True, max_length=5000, null=True)),
                ('pages', models.IntegerField(blank=True, null=True)),
                ('cover', models.CharField(blank=True, max_length=5000, null=True)),
            ],
        ),
    ]
