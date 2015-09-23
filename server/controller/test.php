<?php


// require '../config.php';
$myArray = include '../config.php';

echo(json_encode($_GET)."....".json_encode($myArray['mysql']));
// var $testArray = require '../config.php';

?>