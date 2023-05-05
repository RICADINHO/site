<?php
$servername = "mince dice";
$username = "root@localhost";
$password = "Sans-12345";
$dbname = "BD_RICA_DICA";
$link_nome = array("erro");
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error){
  die("Connection failed: " . $conn->connect_error);
}
$sql = "SELECT nome,id,link,categoria,autor FROM link";
$result = $conn->query($sql);
$link = array("NULL");
$nomes = array("NULL2");
$categoria = array("NULL3");
$autor = array("NULL4");

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    //echo "id: " . $row["id"]. "<br>Nome: ". $row["nome"] ."<br>Link: ". $row["link"] ."<br>";
	array_push($link,$row["link"]);
  array_push($nomes,$row["nome"]);
  array_push($categoria,$row["categoria"]);
  array_push($autor,$row["autor"]);
  }
  
} else {
  echo "0 results";
}
$clip_random = rand(1,(count($link)-1));
array_push($link_nome,$link[$clip_random]);
array_push($link_nome,$nomes[$clip_random]);
array_push($link_nome,$categoria[$clip_random]);
array_push($link_nome,$autor[$clip_random]);
$conn->close();
return $link_nome;//$link[$clip_random];
?>