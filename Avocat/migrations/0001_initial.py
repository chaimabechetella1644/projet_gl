# Generated by Django 4.2.7 on 2023-12-05 23:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Avocat',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('experience', models.CharField(max_length=500)),
                ('adress', models.CharField(max_length=100)),
                ('competence', models.IntegerField()),
                ('langue', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Client',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('email', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Speciality',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Wilaya',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='RateAndComments',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rate', models.IntegerField(max_length=5)),
                ('commentTitle', models.CharField(max_length=50)),
                ('commentBody', models.CharField(max_length=500)),
                ('avocat', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Avocat.avocat')),
            ],
        ),
        migrations.CreateModel(
            name='Day',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('number', models.IntegerField(max_length=7)),
                ('stat', models.CharField(max_length=50)),
                ('avocat', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='Avocat.avocat')),
                ('client', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='Avocat.client')),
            ],
        ),
        migrations.CreateModel(
            name='AvocatSpecRelation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('avocat', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Avocat.avocat')),
                ('speciality', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Avocat.speciality')),
            ],
        ),
        migrations.AddField(
            model_name='avocat',
            name='wilaya',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='Avocat.wilaya'),
        ),
        migrations.CreateModel(
            name='Article',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('body', models.CharField(max_length=500)),
                ('avocat', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Avocat.avocat')),
            ],
        ),
    ]