from django.contrib import admin
from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter
from courses import views

from .views import CategoriesView

r = DefaultRouter()
r.register('categories', views.CategoriesView, basename='category')
r.register('courses', views.CoursesView, basename='course')
r.register('lessons', views.LessonsView, basename='lesson')
r.register('users', views.UserView, basename='user')
r.register('comments', views.CommentView, basename='comment')

urlpatterns = [
    path('', include(r.urls)),
]
