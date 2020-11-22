# Generated by Django 2.2.5 on 2020-11-22 18:27

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=120)),
                ('metaTitle', models.CharField(max_length=120)),
                ('content', models.TextField()),
                ('featuredImage', models.ImageField(blank=True, null=True, upload_to='uploads/%Y/%m/%d')),
                ('slug', models.SlugField()),
                ('status', models.CharField(choices=[(1, 'Public'), (2, 'Private'), (3, 'Draft')], default=(1, 'Public'), max_length=12)),
                ('createdAt', models.DateTimeField()),
                ('updatedAt', models.DateTimeField()),
                ('publishedAt', models.DateTimeField()),
                ('parentId', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='blog_api.Post')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=120)),
                ('metaTitle', models.CharField(max_length=120)),
                ('slug', models.SlugField()),
                ('post', models.ManyToManyField(to='blog_api.Post')),
            ],
        ),
        migrations.CreateModel(
            name='Meta',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('key', models.CharField(max_length=120)),
                ('content', models.TextField()),
                ('post', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='blog_api.Post')),
            ],
        ),
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=120)),
                ('content', models.TextField()),
                ('parentId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='blog_api.Comment')),
                ('post', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='blog_api.Post')),
            ],
        ),
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=120)),
                ('metaTitle', models.CharField(max_length=120)),
                ('slug', models.SlugField()),
                ('post', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='blog_api.Post')),
            ],
        ),
    ]
