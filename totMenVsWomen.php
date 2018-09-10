<!DOCTYPE html>
<html lang="en">

<?php
 include("./db/db.php"); // PULL IN DB CONNECTION PARAMS
 include("./include/definitions.php"); // PULL IN DEFINITIONS (STATIC VARIABLES)
 include('./db/MvW.php'); // PULL IN SQL FOR GRAPHING DATA.
 
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
 </style>
</head>
	<body>
	<?php 
	
		include('./db/db.php');
		include('./include/navigation.php');

	?>
		<div class="container">
			<div class="row" id="content" style="padding-top:5%">
				<div class="col-lg-12">
					<div class="chartDisplay">
						<p><canvas id="myChart1"></canvas></p><br>
						<h2>I think Women win!</h2>
					</div>
				</div>
			</div>
		</div>
			
<script>
var ctx1 = document.getElementById("myChart1").getContext('2d');
ctx1.canvas.width = 3;
ctx1.canvas.height = 1;

var myChart1 = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ["Men","Women"],
        datasets: [{
            label: 'Graph of Impact (Men vs. Women)',
            data: [<?php echo $mwTotals; ?>],
			    //data: [<?php echo $dataSet; ?>],
            backgroundColor: [
               'rgba(54, 162, 235, 0.2)',
                'rgba(255, 159, 64, 0.2)',				
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
	
		legend: {
		display:false,
	},
		title:{
		display:true,
		text: "Graph of Impact (Men vs. Women)",
		fontSize: 30,
		}

    }
	
});
</script>

</body>
</html>
