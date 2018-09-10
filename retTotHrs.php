<?php
include('./db/db.php'); //PULL IN DB CONNECTION PARAMS
$first_name= $_POST['first_name']; //FIRST AND LAST NAME POSTED FROM THE FORM VIA AJAX.
$last_name = $_POST['last_name'];

//USE PHP DATA OBJECTS AND PARAMERITIZE INPUT TO PROTECT AGAINST SQL INJECTION
$attrs = array(PDO::ATTR_PERSISTENT => true);
$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password, $attrs);
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $stmt = $conn->prepare('SELECT `duration_hours` AS `allhours` FROM `users` u, `events` e, `impacts` i WHERE u.id = i.user_id AND i.group_id = e.group_id AND u.first_name = :firstname AND u.last_name = :lastname');
    $stmt->bindParam(':firstname', $first_name);
    $stmt->bindParam(':lastname', $last_name);
	$stmt -> execute();
	$hrs = array();
	
	$get_user_data = $stmt->fetchAll(PDO::FETCH_COLUMN, 0);
	
// ITERATE AND SUM TOTAL HOURS FOR AN INDIVIDUAL
	foreach($get_user_data as $row) {
		
		
		array_push($hrs, $row);
	}
//RETURN THIS TO THE AJAX CALL FOR DISPLAY ON THE CALLING PAGE
	echo "Hi ".$first_name. ". You have made an impact with the following number of hours:  <span style='font-size:150%;'>" .array_sum($hrs). "</span><p> Good Job!</p>";




?>