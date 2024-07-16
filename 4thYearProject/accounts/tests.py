from django.contrib.staticfiles.testing import StaticLiveServerTestCase
from django.conf import settings
from .models import CustomUser
from selenium.webdriver.chrome.service import Service
from selenium import webdriver

class AccountTest(StaticLiveServerTestCase):
    
    @classmethod
    def setUpClass(cls):
        super().setUpClass()
        options = webdriver.ChromeOptions()
        options.add_argument("--start-maximized")
        service = Service()
        cls.driver = webdriver.Chrome(service=service, options=options)
        

    
    def test1(self):
        self.username = "Test1"
        
        
        