"""
URL configuration for proyectoUTD project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from mainapp import views
from django.conf.urls import handler404 #permite que Django use una vista personalizada en caso de un error 404

urlpatterns = [
    path('admin/', admin.site.urls),
    path('inicio/',views.index, name='inicio'),
    path('',views.index, name='inicio'),
    path('acercade/',views.about, name='acercade'),
    path('mision/',views.mision, name='mision'),
    path('vision/',views.vision, name='vision'),

]
#cada vez que ocurra este error, en lugar de mostar su pagina por defecto toda fellota, me lleve a inicio
handler404 = views.redirigir_usuario 