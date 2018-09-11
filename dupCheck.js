$(document).ready(function(){

$("#RainfallEntry").onsubmit(function(){
	 var x = $("#rdate1").val();
	 var y = $("rrate1").val();
				jQuery.ajax({ 
				type: "GET",
				url: "rfDuplicates.cfm", //Will call a cf file that queries the database
				data: {
					date: x,
					rate:y
					},
				dataType: "json",
				complete: function(data){ 
				var rdate1 = JSON.stringify(data.responseJSON.key1);
				var rrate1 = JSON.stringify(data.responseJSON.key2);
					console.log(data); // overflow
					 $("#rdate1").val();					 
					 $("#rrate1").val();
					 
					} 
					
				});

	});	 

     alert('Hello jQuery');

   }
});