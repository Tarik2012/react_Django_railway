from django.urls import path
from .views import ProductoListCreateView,home_redirect

urlpatterns = [
    path('productos/', ProductoListCreateView.as_view(), name='productos-list-create'),
]