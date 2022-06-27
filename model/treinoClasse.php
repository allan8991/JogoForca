<?php
   class Produto{
      public $nome;
      public $preco;
      public $quantidade;  
    }
   class Fornecedor{
    private $codigo;
    private $razaoSocial;
    private $endereco;
    private $cidade;
    public $produto;//= new Produto();
    public $prod = array();

    public function __construct($codigo,$razaoSocial,$endereco, $cidade){
          $this->codigo=$codigo;
          $this->razaoSocial=$razaoSocial;
          $this->endereco=$endereco;
          $this->cidade=$cidade;
         }
    public function inserirProduto($nome, $preco,$quantidade){
        $this->produto = new Produto();
        $this->produto->nome = $nome;
        $this->produto->preco = $preco;
        $this->produto->quantidade = $quantidade;
        $novoArray = array($this->produto->nome,$this->produto->preco ,$this->produto->quantidade);
        array_push($this->prod,$novoArray);
        
        
    }

   }
  $fornecedor = new Fornecedor(123,4567,"rua mendes de aguriar","rj");
  $fornecedor->inserirProduto("calculadora",130.00,1);
  $fornecedor->produto->nome = "geladeira";
  var_dump($fornecedor ->prod);

?>