from django.urls import path
from .views import HomePageView, ProfilePageView, SearchResultsPageView



urlpatterns = [
    path('', HomePageView.as_view(), name='home'),
    path('profile/', ProfilePageView.as_view(), name='profile'),
    path('searchresults/', SearchResultsPageView.as_view(), name='searchresults'),
   
   ]