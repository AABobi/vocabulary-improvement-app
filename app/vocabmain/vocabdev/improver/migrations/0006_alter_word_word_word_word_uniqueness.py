# Generated by Django 4.2.5 on 2023-12-07 21:45

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('improver', '0005_alter_word_word'),
    ]

    operations = [
        migrations.AlterField(
            model_name='word',
            name='word',
            field=models.CharField(max_length=255, validators=[django.core.validators.RegexValidator('^[a-zA-Z]*$', 'Only letters allowed')]),
        ),
        migrations.AddConstraint(
            model_name='word',
            constraint=models.UniqueConstraint(fields=('word', 'language'), name='word_uniqueness'),
        ),
    ]