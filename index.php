<!DOCTYPE html>
<html lang="en">

<?php
 include("./db/db.php"); 
 include("./include/definitions.php"); 
 
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
  .fakeimg {
      height: 200px;
      background: #aaa;
  }
  #landing{
		padding:5%;
		text-align:center;
  }
  </style>
</head>
<body>

	<div class="jumbotron text-center" style="margin-bottom:0">
	  <h1><?php echo $pageTitle; ?></h1>
	  <p>Resize this responsive page to see the effect!</p> 
	</div>

	
<?php
//PULL IN NAVIGATION
 include("./include/navigation.php");
 ?>

<div class="container" style="margin-top:30px">
  <div class="row">
    
    <div class="col-sm-12" id="landing">
      <h3>Welcome to GivePulse Metrics Page</h3> <h3>Use the Links Above to Track Some Metrics</h3>
		
    </div>
  </div>
</div>



</body>
</html>
