# Generated by Django 3.0.7 on 2020-06-26 18:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('contenttypes', '0002_remove_content_type_name'),
        ('auth', '0011_update_proxy_permissions'),
        ('users', '0003_auto_20200612_1714'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='UserGroups',
            new_name='UserGroup',
        ),
        migrations.RenameModel(
            old_name='UserPermissions',
            new_name='UserPermission',
        ),
    ]
