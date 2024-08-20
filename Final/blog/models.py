from django.db import models
from django.contrib.auth.models import User
from django.utils.timezone import now
from tinymce import models as tinymce_models


class Post(models.Model):
    sno = models.AutoField(primary_key=True)
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=14)
    slug = models.CharField(max_length=130)
    views = models.IntegerField(default=0)
    image = models.ImageField(upload_to="static/blog/images", default="")
    timeStamp = models.DateTimeField(blank=True)
    content = models.TextField()

    def __str__(self):
        return self.title + " by " + self.author


class BlogComment(models.Model):
    sno = models.AutoField(primary_key=True)
    comment = models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    parent = models.ForeignKey('self', on_delete=models.CASCADE, null=True)
    timestamp = models.DateTimeField(default=now)

    def __str__(self):
        return self.comment[0:13] + "..." + "by" + " " + self.user.username


class Carousel(models.Model):
    image = models.ImageField(upload_to="static/coursel/images", default="")
    title = models.CharField(max_length=255)
    about = models.CharField(max_length=70)

    def __str__(self):
        return self.title
