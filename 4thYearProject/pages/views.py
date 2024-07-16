from django.views.generic import TemplateView

class HomePageView(TemplateView):
    template_name = 'home.html'

class ProfilePageView(TemplateView):
    template_name = 'profile.html'

class SearchResultsPageView(TemplateView):
    template_name = 'searchresults.html'



