<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<style>
    /*body{
        background-color: red;
    }*/
    #divideo{
        background-color: black;
        width: 1000px;
        height: 600px;
        margin: auto;
        padding: auto;
        align-items: center;
        border-style: inset;
    }
</style>
<?php $ola=include 'teste.php'; ?>
<p>link- <?php echo $ola[1];?></p>
<p>categoria- <?php echo $ola[3];?></p>
<p>nome- <?php echo $ola[2];?></p>
<p>autor- <?php echo $ola[4];?></p>
<button onclick="boas()" id="botao">DA-ME UM CLIPEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE</button>
<body>
   <div id="divideo">    
    <iframe style="display: none;margin: 5% 10%;border: 2px solid white" controls id="video" type="text/html" width="800" height="500" src="http://www.youtube.com/embed/<?php echo $ola[1];?>" frameborder="0"></iframe>
   </div>
</body>

<script>
    var x =document.getElementById("botao");
    var y = document.getElementById("video");
   // x.onclick = function() {boas()};

    function boas(){
        x.style.display = "none";
        y.style.display = "inline-block";
    }
</script>

</html>