<?php

// prendo il file json attraverso 'file_get_contents'

$string = file_get_contents('dischi.json');

// traduco la stringa da formato json in una variabile php e passo true per avere un array associativo

$list = json_decode($string, true);

$result= [];
// discIndex
if(!isset($_GET['discIndex'])){

    $result = $list;
}else{
    // altriemtni seleziono l'ggetto con indice arrivato in get

    $result = $list[$_GET['discIndex']];
}



header('Content-Type: application/json');
echo json_encode($result);
?>