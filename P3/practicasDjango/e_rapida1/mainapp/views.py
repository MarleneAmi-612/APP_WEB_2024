from django.shortcuts import render, HttpResponse
from django.shortcuts import redirect #permite redirigir a los usuarios a una página diferente.

# Create your views here.

def index(requests):
    return render(requests, 'mainapp/index.html',{
        'title':'Inicio | Página Principal',
        'content': 'Bienvenidos Piolines a la Pagina Principal'
    })

def about(requests):
    mensaje='Bienvenido Mi Nombre es Amelia la Cacahuatera'
    return render(requests, 'mainapp/about.html', {
        'tittle': 'Acerca de Nosotros',
        'content':'Somos un grupo de Programadores bien ingones ajua',
        'mensaje': mensaje
    })


def mision(requests):
    return render(requests, 'mainapp/mision.html', {
        'tittle': 'Mision de la Empresa',
        'content':'Nos comprometemos a ser una empresa de calidad y buen servicio',
        
    })


def vision(requests):
    return render(requests, 'mainapp/vision.html', {
        'tittle': 'Nuestra Vision',
        'content':'Nuestra Vision es que el cliente se sienta good',
        
    })


#reemplazar el error con otra acción es la funcion de esta vista

def redirigir_usuario(request, exception=None): #se usa para manejar errores 404 (páginas no encontradas)
    return redirect('inicio/') #redirigir al usuario a la página de inicio en lugar de mostrarles un mensaje de error.

#exception es un parámetro que va a guardar la informacion sobre ese error que suceda y pasarselo a la vista encargada de eso