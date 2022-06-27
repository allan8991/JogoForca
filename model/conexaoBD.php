<?php
$conn = new mysqli('localhost', 'root', 'alladin2013', 'forca');
if (!$conn) {
    die("erro ao conexar ao banco: " . mysqli_connect_error());
}
?>