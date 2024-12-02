from rest_framework.generics import ListCreateAPIView
from .models import ProductoModel
from .serializers import ProductoSerializer
from django.shortcuts import redirect # es para la vista admin

class ProductoListCreateView(ListCreateAPIView):
    queryset = ProductoModel.objects.all()
    serializer_class = ProductoSerializer
    
    
    
    
# es la vista para entrar directamente en el admin no sirte aqui 
def home_redirect(request):
    return redirect('/admin/')
