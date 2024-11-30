<?php
session_start();

// si está logueado muestra mi emnsajitoS
if (isset($_SESSION['username'])) {
    $mensajee = "Bienvenido, ha iniciado sesión correctamente";
    
}

?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
        Inicio|PHP Proyecto UTD
    </title>
    <link rel="stylesheet" href="css/estilos.css" type="text/css">
</head>
<body>
    <header>
        <div id="logotipo">
            <img src="img/logophp.png" alt="Imagen Django" title="Django">
            <h1>PHP Proyecto Web</h1>
        </div>
    </header>
    <nav>
        <ul>
            
            <?php if (isset($_SESSION['username'])): ?>
                <li><a href="index.php">Inicio</a></li>
                <li><a href="html/mision.html">Mision</a></li>
                <li><a href="html/vision.html">Vision</a></li>
                <li><a href="html/about.html">Acerca de</a></li>
                <li><a href="html/listado_art.html">Articulos</a></li>
                <li><a href="html/listado_cat.html">Categorias</a></li>
                <li><a href="php/logout.php">Cerrar Sesión</a></li>
            <?php else: ?>
                <li><a href="index.php" >Inicio</a></li>
                <li><a href="php/login.php">Iniciar Sesión</a></li>
                <li><a href="php/registro.php">Registro</a></li>
            <?php endif; ?>


        </ul>
    </nav>
    <section id="content">
       <div class="box">
            <?php if (isset($_SESSION['username'])): ?>
                <h1>Inicio</h1>
                <hr>
                <?php if (!empty($mensajee)): ?>
                    <div class="alert alert-success">
                        <p><?php echo $mensajee; ?></p> 
                    </div>
                <?php endif; ?>
                <p>.:: ¡Bienvenid@ <?php echo $_SESSION['username']; ?> a mi pagina de Inicio! ::.</p>
                
            <?php else: ?>
                <h1>Inicio</h1>
                <hr>
                <p>Porfavor inicie sesion....</p>

                
            <?php endif; ?>
    
       </div>
    </section>
    <footer>
        <p>Django con Dagonline &copy; 2024 | Visitado el: 01/10/24</p>
    </footer>
</body>
</html>