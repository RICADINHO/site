<html>
<body>
<form action="<?php $_PHP_SELF ?>" method="POST">
Num1: <input type="number" name="num1" value="0"><br>
Num2: <input type="number" name="num2" value="0"><br>
Operaçao: <br> Somar:<input checked type="radio" name="op" value="mais"> Subtrair:<input type="radio" name="op" value="menos"> Dividir:<input type="radio" name="op" value="divd"> Multiplicar:<input type="radio" name="op" value="mult"><br>
<input type="submit" name="submeter" value="calcular"><br>
</form>
<?php
error_reporting(E_ERROR | E_PARSE);
/*$soma = $_GET['num1'] + $_GET['num2'];
echo $soma;*/
$ope = $_POST["op"];
$num1 = $_POST["num1"];
$num2 = $_POST["num2"];
if($ope == "mais"){
    echo "resultado: ".($num1 + $num2);
}else if($ope == "menos"){
    echo "resultado: ".($num1 - $num2);
}else if($ope == "divd"){
    if($num2 == 0){
        echo "nao se pode dividir por 0";
    }else{
        echo "resultado: ".($num1 / $num2);
    }
}else if($ope == "mult"){
    echo "resultado: ".($num1 * $num2);
}else{
    echo "seleciona algo e tal";
}
?>

</body>
</html>