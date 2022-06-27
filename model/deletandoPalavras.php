<?php
require("conexaoBD.php");
require("Forca.php");
$palavra = $_REQUEST["palavra"];
$dica = $_REQUEST["dica"];
$Forca = new Forca($conn);
$Forca->deletarPalavraDica($palavra,$dica);
?>