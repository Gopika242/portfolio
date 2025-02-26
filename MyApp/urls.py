from django.urls import path
from MyApp import views

urlpatterns=[
  path('index/',views.index,name='index'),
  path('about/',views.about,name='about'),
 path('contact/',views.contact, name='contact'),
 path('projects/',views.projects,name='projects')
  
]