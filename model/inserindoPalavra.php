<?php
require("Forca.php");
require("conexaoBD.php");
$palavra = $_REQUEST["palavra"];
$dica = $_REQUEST["dica"];
$Forca = new Forca($conn);
$Forca->inserirPalavraDica($palavra,$dica);


?>