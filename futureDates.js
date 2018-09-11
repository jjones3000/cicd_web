	$("#oneDate").change(function(){
		//var date = $("#oneDate").val();
		var date = document.getElementById("oneDate").value;
		var currDate = new Date();
		
		
		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth()+1; //January is 0!

		var yyyy = today.getFullYear();
		if(dd<10){
			dd='0'+dd;
		} 
		if(mm<10){
			mm='0'+mm;
		} 
		var today = mm+'/'+dd+'/'+yyyy;
		


		if( (new Date(date).getTime() > new Date(currDate).getTime()))
		{
			alert("CANNOT SELECT FUTURE DATES");
			$("#oneDate").val(today);
		}		
		
		
	});	