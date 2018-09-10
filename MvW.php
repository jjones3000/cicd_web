<?php
include('./db/db.php');
$attrs = array(PDO::ATTR_PERSISTENT => true);
$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password, $attrs);
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $stmtMen = $conn->prepare('SELECT duration_hours AS "Total Impact Hours" from `impacts` i join `users` u WHERE i.user_id = u.id AND u.gender = "male"');
	$stmtMen -> execute();
	$hrs = array();
	$get_user_data = $stmtMen->fetchAll(PDO::FETCH_COLUMN, 0);
	
	foreach($get_user_data as $row) {		
		array_push($hrs, $row);
	}
	$dataSet = array_sum($hrs);
	
	
	
	$stmtWom = $conn->prepare('SELECT duration_hours AS "Total Impact Hours" from `impacts` i join `users` u WHERE i.user_id = u.id AND u.gender = "female"');
	$stmtWom -> execute();
	$hrsWom = array();
	$get_user_data = $stmtWom->fetchAll(PDO::FETCH_COLUMN, 0);
	
	foreach($get_user_data as $row) {		
		array_push($hrsWom, $row);
	}
	$dataSetWom = array_sum($hrsWom);
	
	$totalsArr=[$dataSet,$dataSetWom];
	$mwTotals = join(",", $totalsArr);

?>