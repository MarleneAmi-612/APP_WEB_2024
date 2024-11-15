from django.shortcuts import render

# Create your views here.

def index_view(requests):
    return render(requests, 'mainapp/index.html',{
        'title': 'Inicio | Pagina Principal',
        'content': 'Este es el inicio de mi página'
    })

def about_view(requests):
    return render(requests, 'mainapp/about.html',{
        'title': 'Página | Nosotros',
        'content': 'Este es el about'
    })

def mision_view(requests):
    return render(requests, 'mainapp/mision.html',{
        'title': 'Página | Mision',
        'content': 'Nuestra Mision es bla bla ba nlanalnalsnd'
    })


def vision_view(requests):
    return render(requests, 'mainapp/vision.html',{
        'title': 'Página | Vision',
        'content': 'Esta es la página que contiene la vision de la agencia'
    })


