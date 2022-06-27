<?php
require("Forca.php");
require("conexaoBD.php");
$Forca = new Forca($conn);
$Forca->buscarPalavraDica();
?>