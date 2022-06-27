<?php

class Forca
{
    private $conn;
    private $arrayForca = array();
    function __construct($conn)
    {
        $this->conn = $conn;
    }
    function inserirPalavraDica($palavra, $dica)
    {
        $sql = "INSERT INTO  tb_Forca (palavra,dica) VALUES ('$palavra','$dica')";
        $registrar = $this->conn->prepare($sql);
        $inserir = $registrar->execute();
        if ($inserir) {
            print_r(json_encode("Inserido com sucesso"));
        } else {
            print_r(json_encode("Erro ao inserir"));
        }
        $this->conn->close();
    }
    function buscarPalavraDica()
    {

        $sql = "SELECT * from tb_Forca";
        if ($result = $this->conn->query($sql)) {


            while ($row = $result->fetch_row()) {

                array_push($this->arrayForca, array("dica" => $row[1], "palavra" => $row[0]));
            }
            print_r(json_encode($this->arrayForca));


            $result->close();
        }


        $this->conn->close();
    }


    function deletarPalavraDica($palavra, $dica)
    {
        $sql = "DELETE FROM tb_Forca WHERE palavra ='$palavra' AND dica ='$dica' ";
        $deletado = $this->conn->query($sql);
        $linhas = $this->conn->affected_rows;
        if ($linhas > 0) {
            print_r(json_encode("Deletado com sucesso"));
        } else {
            print_r(json_encode("Erro ao deletar a palavra e dica"));
        }
        $this->conn->close();
    }
}
