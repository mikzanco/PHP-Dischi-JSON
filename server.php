<?php

// prendo il file json attraverso 'file_get_contents'

$string = file_get_contents('dischi.json');

// traduco la stringa da formato json in una variabile php

$list = json_decode($string, true);




header('Content-Type: application/json');
echo json_encode($list);
?>