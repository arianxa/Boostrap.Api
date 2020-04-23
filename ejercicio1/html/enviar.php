
<?php
        //En el destino colocar el correo alque quieres que lleguen los datos del contacto de tu formulario
        //
        if($_SERVER['REQUEST_METHOD']=='POST') {
                $destino = "jordigw@hotmail.com";
                $nombre = $_POST['nombre'];

                $apellido = $_POST["apellido"];
                $email = $_POST["email"];
                $numero = $_POST["phone"];
                $mensaje = $_POST["message"];
                $contenido = "name: " . $nombre . "\napellido: " . $apellido . "\nemail: " . $email . "\nphone: " . $numero . "\nmessage: " . $mensaje;
                mail($destino, "Contacto", $contenido);
                
                var_dump($_POST);
        }
        else {
            echo("wiwuqehwqiue");
        }
    //header("Location: https://www.google.com");   
//Esto es opcional, aqui pueden colocar un mensaje de "enviado correctamente" o redireccionarlo a algun lugar
?>