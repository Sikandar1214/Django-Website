from django.contrib import admin
from .models import Post, BlogComment,Carousel

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    class Media:
        js = ('tinyInject.js',)  # Include the TinyMCE script

    list_display = ('title', 'author', 'timeStamp', 'views')
    search_fields = ('title', 'author')

# Register the BlogComment model
admin.site.register(BlogComment)
admin.site.register(Carousel)

