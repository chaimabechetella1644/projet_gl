from django.urls import path
from . import views
urlpatterns=[
#path('',views.index),
path('search/allAvocats',views.getAllAvocats),
path('profile/planOfAvocat',views.getPlanOfAvocat)

]