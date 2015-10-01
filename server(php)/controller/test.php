<?php


$myArray = include '../db.php';

$result = $conn->query("SELECT * FROM schedule") or trigger_error(mysql_error()." ");;

while($row = mysqli_fetch_assoc($result))
	$test[] = $row;

// if ($result->num_rows > 0) {
//     // output data of each row
//     while($row = $result->fetch_assoc()) {
//         echo '...';
//     }
// }

echo json_encode($test);

?>