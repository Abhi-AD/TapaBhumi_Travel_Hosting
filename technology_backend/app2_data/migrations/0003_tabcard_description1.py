# Generated by Django 5.0.4 on 2024-05-21 09:52

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app2_data', '0002_tabcard'),
    ]

    operations = [
        migrations.AddField(
            model_name='tabcard',
            name='description1',
            field=models.TextField(default=datetime.datetime(2024, 5, 21, 9, 52, 22, 330146, tzinfo=datetime.timezone.utc)),
            preserve_default=False,
        ),
    ]
