# Generated by Django 4.2.5 on 2023-11-26 13:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('improver', '0003_alter_word_word'),
    ]

    operations = [
        migrations.AddConstraint(
            model_name='link',
            constraint=models.UniqueConstraint(fields=('user', 'base', 'translation'), name='link_uniqueness'),
        ),
    ]
