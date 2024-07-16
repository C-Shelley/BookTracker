from django.shortcuts import render

from .models import Books
import requests

all_books = {}


def get_book(request):
    if 'title' in request.GET:
        title = request.GET['title']
        url = f"https://www.googleapis.com/books/v1/volumes?q=isbn:{title}"
        response = requests.get(url)
        data = response.json()
        book_data = data['items']
        for i in book_data:
             book_data = Books(
                    title=i['volumeInfo']['title'],
                    cover=i['volumeInfo']['imageLinks']['thumbnail'],
                    author=i['volumeInfo']['authors'],
                    description=i['volumeInfo']['description'],
                    pages = i['volumeInfo']['pageCount'],
            )
        book_data.save()
    all_books = Books.objects.values('title','cover', 'author', 'pages').distinct()
    return render(request, 'books.html', {"all_books": all_books})
