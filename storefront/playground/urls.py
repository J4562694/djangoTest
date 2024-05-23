from django.urls import path
from .views import sayHello, addWhitelistEntry

# URLConf
urlpatterns = [
    path('hello/', sayHello, name='sayHello'), 
    path('addWhitelist/', addWhitelistEntry, name='addWhitelist')
]