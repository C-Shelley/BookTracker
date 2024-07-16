from django.urls import  path
from books import views

urlpatterns = [
    path('', views.get_book, name = "get_book"),
    
    
]