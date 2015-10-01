<?php

$myArray = include '../config.php';


$conn = new mysqli('p:'.$myArray['host'], $myArray['username'], $myArray['password'], $myArray['database']);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

return $conn;
?>