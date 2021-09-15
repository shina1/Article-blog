from django.urls import path
from django.conf.urls import url

from .views import (
    ArticleListView, 
    ArticleDetialsView,
    ArticleCreateView,
    ArticleUpdateView,
    ArticleDeleteView
    )

urlpatterns = [
    url(r'^$', ArticleListView.as_view()),
    url(r'^create/$',ArticleCreateView.as_view()),
    url(r'^(?P<pk>\d+)/$', ArticleDetialsView.as_view()),
    url(r'^(?P<pk>\d+)/update/$', ArticleUpdateView.as_view()),
    url(r'^(?P<pk>\d+)/delete/$', ArticleDeleteView.as_view()),
]

# urlpatterns = [
#     path('', ArticleListView.as_view()),
#     path('<pk>', ArticleDetialsView.as_view()),
# ]