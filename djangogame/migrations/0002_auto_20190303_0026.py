# Generated by Django 2.1.7 on 2019-03-03 06:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('djangogame', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='school',
            name='school_name',
            field=models.CharField(max_length=300, null=True),
        ),
    ]
