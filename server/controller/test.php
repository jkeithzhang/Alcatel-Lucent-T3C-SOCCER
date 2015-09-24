<?php


// require '../config.php';
$myArray = include '../config.php';


$conn = new mysqli('localhost', 'root', 'tigris', 't3c-soccer');

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$result = $conn->query("SELECT * FROM schedule") or trigger_error(mysql_error()." ");;

while($row = mysqli_fetch_assoc($result))
	$test[] = $row;

echo 'result: '.json_encode($test);

// if ($result->num_rows > 0) {
//     // output data of each row
//     while($row = $result->fetch_assoc()) {
//         echo '...';
//     }
// }



// $conn->close();

// echo(json_encode($_GET)."....".json_encode($myArray['mysql']));

?>