
<?php

$destinatario = "administracion@horsetravelcompany.com.ar";
$asunto = "Consulta de Servicios";
$nombre = $_POST ['nombre'];
$email = $_POST ['email'];
$telefono = $_POST ['telefono'];
$mensaje = $_POST ['mensaje'];
$remitente = $_REQUEST['email'];
$header = "From: $remitente";
$mensajeCompleto = $mensaje . "\n\nNombre: " . $nombre . " / Email: " . $email . " / Teléfono " . $telefono; 

mail($destinatario, $asunto, $mensajeCompleto, $header);
echo "<script>alert('Correo enviado exitosamente')</script>";
echo "<script>setTimeout(\"location.href='index.html'\",1000)</script>";

?>