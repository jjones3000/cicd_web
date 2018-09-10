<!DOCTYPE html>
<html lang="en">

<?php
 include("./db/db.php"); 
 include("./include/definitions.php"); //PULL IN DEFINITIONS. THIS FILE CONTAINS VARIABLES FOR DISPLAY/VIEWS. THE GOAL = DON'T REPEAT YOURSELF.
 
 ?>
<head>
  <title>Bootstrap 4 Website Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.bundle.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.js"></script>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"></script>
  <style>
  
  html,body{
	  
	  height:100%;
  }
  .fakeimg {
      height: 200px;
      background: #aaa;
	  padding:3%;
	  font-weight: bold;
  }
  form{
	  padding-left:3%;
	  
  }
  </style>
  
  <script>
 $(document).ready(function(){
 
			$("#submit").click(function(){
									event.preventDefault();
									event.stopPropagation();
									var first_name = $('#first_name').val();
									var last_name = $('#last_name').val();
									
									jQuery.ajax({ 
											type: "POST",
											url: "retTotHrs.php", //SEND THE FIRST AND LAST NAME TO THIS FILE VIA AJAX.
											data: {
												first_name:first_name,
												last_name:last_name,
												},
											dataType: "html",
											complete: function(data){ 
												$("#fakeimg").html(data.responseText); //SEND RESPONSE (TOTAL IMPACT HRS FOR A PERSON), RETURN IT TO CALLING PAGE. PLACE IT IN DIV.												 
												} 
												
									});										
									
			});

});

  
</script>
</head>
<body>

<div class="jumbotron text-center" style="margin-bottom:0">
  <h1><?php echo $pageTitle; ?></h1>
  <p>Resize this responsive page to see the effect!</p> 
</div>

<?php include("./include/navigation.php"); ?>

<div class="container" style="margin-top:30px; margin-bottom:10%">
  <div class="row">
  
    <div class="col-sm-3">
      <h2>Measure Your Impact</h2>
      <h5>Enter Name Below:</h5>
		  <div class="fakeimg">
				<form method="POST">
					First Name: <input type="text" name="first_name" id="first_name"><br>
					Last Name: <input type="text" name="last_name" id="last_name"><br>
					<input type="submit" name="submit" id="submit">
				</form>
		  </div>      
    </div>
	
    <div class="col-sm-9" id="display">
      <h4>Enter Your Name (Left) and See Your Impact</h4>
      <h5>Title description, <?php echo date("F j, Y, g:i a"); ?></h5>
      <div class="fakeimg" id="fakeimg">What impact have you made?</div> 
    </div>
	
  </div>
</div>

<div class="jumbotron text-center" style="margin-bottom:0">
  <p>Footer</p>
</div>

</body>
</html>
