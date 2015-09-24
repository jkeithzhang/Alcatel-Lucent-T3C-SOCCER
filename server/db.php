<?php

$myArray = include '../config.php';


$conn = new mysqli('p:localhost', 'root', 'tigris', 't3c-soccer');

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

return $conn;
?>