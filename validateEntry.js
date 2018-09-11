	function validateFlowEntry() {
		var x = true;
		
		var readtype1 = document.getElementById("read1").value;
		var readtype2 = document.getElementById("read2").value;
		var readtype3 = document.getElementById("read3").value;
		var readtype4 = document.getElementById("read4").value;
		var readtype5 = document.getElementById("read5").value;
		
		var dtField1 = document.getElementById("date1").value;
		var dtField2 = document.getElementById("date2").value;
		var dtField3 = document.getElementById("date3").value;
		var dtField4 = document.getElementById("date4").value;
		var dtField5 = document.getElementById("date5").value;
				
		var time1 = document.getElementById("time1").value;
		var time2 = document.getElementById("time2").value;
		var time3 = document.getElementById("time3").value;
		var time4 = document.getElementById("time4").value;
		var time5 = document.getElementById("time5").value;
				
		var plant1 = document.getElementById("plant1").value;
		var plant2 = document.getElementById("plant2").value;
		var plant3 = document.getElementById("plant3").value;
		var plant4 = document.getElementById("plant4").value;
		var plant5 = document.getElementById("plant5").value;

		var area1 = document.getElementById("area1").value;
		var area2 = document.getElementById("area2").value;
		var area3 = document.getElementById("area3").value;
		var area4 = document.getElementById("area4").value;
		var area5 = document.getElementById("area5").value;

		var train1 = document.getElementById("train1").value;
		var train2 = document.getElementById("train2").value;
		var train3 = document.getElementById("train3").value;
		var train4 = document.getElementById("train4").value;
		var train5 = document.getElementById("train5").value;
		

		var rate1 = document.getElementById("rate1").value;
		var rate2 = document.getElementById("rate2").value;
		var rate3 = document.getElementById("rate3").value;
		var rate4 = document.getElementById("rate4").value;
		var rate5 = document.getElementById("rate5").value;
	


		document.getElementById("date1").style.border = "";
		document.getElementById("date2").style.border = "";
		document.getElementById("date3").style.border = "";
		document.getElementById("date4").style.border = "";
		document.getElementById("date5").style.border = "";
		document.getElementById("rate1").style.border = "";
		document.getElementById("rate2").style.border = "";
		document.getElementById("rate3").style.border = "";
		document.getElementById("rate4").style.border = "";
		document.getElementById("rate5").style.border = "";
		document.getElementById("time1").style.border = "";
		document.getElementById("time2").style.border = "";
		document.getElementById("time3").style.border = "";
		document.getElementById("time4").style.border = "";
		document.getElementById("time5").style.border = "";
		
		var combo1 = "rec1"+ dtField1 + plant1 + area1 + train1;
		var combo2 = "rec2"+ dtField2 + plant2 + area2 + train2;
		var combo3 = "rec3"+ dtField3 + plant3 + area3 + train3;
		var combo4 = "rec4"+ dtField4 + plant4 + area4 + train4;
		var combo5 = "rec5"+ dtField5 + plant5 + area5 + train5;

		var comboSub1 = combo1.substring(4,combo1.length);
		var comboSub2 = combo2.substring(4,combo2.length);
		var comboSub3 = combo3.substring(4,combo3.length);
		var comboSub4 = combo4.substring(4,combo4.length);
		var comboSub5 = combo5.substring(4,combo5.length);
		
		//console.log("****"+combo1);
		//console.log("===="+comboSub1);
		
		//var resultArr = [combo1, combo2,combo3,combo4,combo5];
		var fieldArr = [comboSub1, comboSub2, comboSub3, comboSub4, comboSub5];

       // var len = fieldArr.length-1;
      //  var elementLength = fieldArr.length+1;
        
		//fieldArr.forEach(function(element) {
			//console.log(">>>>"+element);
			
			if(plant1=='WAL' && readtype1=='2HR' && rate1 > 165){
				
			document.getElementById("rate1").style.border = "5px solid red";
			document.getElementById("errMssg").innerHTML = "Value Cannot Exceed 165 MGD";
			document.getElementById("errMssg").style.visibility = "visible";
			x = false;		
			}
			
			if(plant1=='SAR' && readtype1=='2HR' && rate1 > 150000){
				
			}
			
		for(var i=0; i < (fieldArr.length-1); i++){

			if(fieldArr[i] == fieldArr[i+1] && fieldArr[i].length > 13 )
				{
					//alert(i+". "+fieldArr[i].value)
					var rowErr = "pfrow"+(i+1);
					var rowErrStr = rowErr.toString();
					var nrowErr = "pfrow"+(i+2);
					var nrowErrStr = nrowErr.toString();
					//console.log(nrowErrStr);
					//document.writeln(fieldArr[i] +" == "+fieldArr[i+1]+"<br>" );
					document.getElementById(rowErrStr).style.border = "5px solid red";
					document.getElementById(nrowErrStr).style.border = "5px solid red";
					document.getElementById("errMssg").style.visibility = "visible";
					document.getElementById("errMssg").innerHTML = "Cannot Enter Duplicates for the Same Plant, Area, Train on the Same Day";
					//document.getElementById("errMssg").style.visibility = "visible";
					x = false;
					
				}
				
		}	
		
		


		
		if(dtField1 == "" && rate1 != ""){ // #1
			document.getElementById("date1").style.border = "5px solid red";
			document.getElementById("errMssg").style.visibility = "visible";
			document.getElementById("errMssg").innerHTML = "Correct Errors and Submit";
			x = false;
		}
		if(dtField1 != '' && rate1 == ''){ //#2
			document.getElementById("rate1").style.border = "5px solid red";
			document.getElementById("errMssg").innerHTML = "Correct Errors and Submit";
			document.getElementById("errMssg").style.visibility = "visible";
			x = false;		
		}
		if(dtField2 != "" && rate2 == ""){ //#3
			document.getElementById("rate2").style.border = "5px solid red";
			document.getElementById("errMssg").style.visibility = "visible";
			document.getElementById("errMssg").innerHTML = "Correct Errors and Submit";
			x = false;
		
		}		
		if(dtField2 == "" && rate2 != ""){ //#4
			document.getElementById("date2").style.border = "5px solid red";
			document.getElementById("errMssg").style.visibility = "visible";
			document.getElementById("errMssg").innerHTML = "Correct Errors and Submit";;
			x = false;
		
		}
		if(dtField3 != "" && rate3 == ""){ //#5
			document.getElementById("rate3").style.border = "5px solid red";
			document.getElementById("errMssg").style.visibility = "visible";
			document.getElementById("errMssg").innerHTML = "Correct Errors and Submit";
			x = false;
		
		}		
		if(dtField3 == "" && rate3 != ""){ //#6
			document.getElementById("date3").style.border = "5px solid red";
			document.getElementById("errMssg").style.visibility = "visible";
			document.getElementById("errMssg").innerHTML = "Correct Errors and Submit";
			x= false;
		
		}		
		if(dtField4 != "" && rate4 == ""){ //#7
			document.getElementById("rate4").style.border = "5px solid red";
			document.getElementById("errMssg").style.visibility = "visible";
			document.getElementById("errMssg").innerHTML = "Correct Errors and Submit";
			x = false;
		
		}		
		if(dtField4 == "" && rate4 != ""){ //#8
			document.getElementById("date4").style.border = "5px solid red";
			document.getElementById("errMssg").style.visibility = "visible";
			document.getElementById("errMssg").innerHTML = "Correct Errors and Submit";
			x = false;
		
		}		
		if(dtField5 != "" && rate5 == ""){ //#9
			document.getElementById("rate5").style.border = "5px solid red";
			document.getElementById("errMssg").style.visibility = "visible";
			document.getElementById("errMssg").innerHTML = "Correct Errors and Submit";
			x = false;
		
		}		
		if(dtField5 == "" && rate5 != ""){ //#10
			document.getElementById("date5").style.border = "5px solid red";
			document.getElementById("errMssg").style.visibility = "visible";
			document.getElementById("errMssg").innerHTML = "Correct Errors and Submit";
			x = false;
		
		}
		if(dtField1 == "" && rate1 == "" && dtField2 == "" && rate2 == "" && dtField3 == "" && rate3 == "" && dtField4 == "" && rate4 == "" && dtField5 == "" && rate5 == ""){
			document.getElementById("errMssg").style.visibility = "visible";
			document.getElementById("errMssg").innerHTML = "*** NO VALUES ENTERED - PLEASE WAIT ***";			
			document.getElementById("PumpFlowEntry").style.border = "5px solid red";
			document.getElementById("PumpFlowEntry").style.padding = "2%";
			setTimeout(redirectPFPR, 3000);
			x = false;

			
		
		}	
		//alert(x);
		return x;

}		
			function redirectPFPR(){
				window.location="PlantFlowPumpRead.cfm";
			}
			
			function graphResRefFlow(){
				window.location="GraphicalResults.cfm?rt=flow";
				
			}
			
			function graphResRefRain(){
				window.location="GraphicalResults.cfm?rt=rain";
			}
			
			
			function graphResRef(){
				window.location="GraphicalResults.cfm";
			}

//RAINFALL ENTRY VALIDATION
			
function validateRainfallEntry(){
		
		var x = true;
		event.preventDefault();
		document.forms["RainfallEntry"]["oneDate"].style.border = "";

		
		document.forms["RainfallEntry"]["rrate1"].style.border = "";
		document.forms["RainfallEntry"]["rrate2"].style.border = "";
		document.forms["RainfallEntry"]["rrate3"].style.border = "";
		document.forms["RainfallEntry"]["rrate4"].style.border = "";
		document.forms["RainfallEntry"]["rrate5"].style.border = "";
		
		var oneDate = document.getElementById("oneDate").value;
		var date1 = document.getElementById("oneDate").value;
		var date2 = document.getElementById("oneDate").value;
		var date3 = document.getElementById("oneDate").value;
		var date4 = document.getElementById("oneDate").value;
		var date5 = document.getElementById("oneDate").value;
		
		var plant1 = document.getElementById("rplant1").value;
		var plant2 = document.getElementById("rplant2").value;
		var plant3 = document.getElementById("rplant3").value;
		var plant4 = document.getElementById("rplant4").value;
		var plant5 = document.getElementById("rplant5").value;
		
		var rrate1 = document.getElementById("rrate1").value;
		var rrate2 = document.getElementById("rrate2").value;
		var rrate3 = document.getElementById("rrate3").value;
		var rrate4 = document.getElementById("rrate4").value;
		var rrate5 = document.getElementById("rrate5").value;

		
		var combo1 = date1 + plant1;
		var combo2 = date2 + plant2;
		var combo3 = date3 + plant3;
		var combo4 = date4 + plant4;
		var combo5 = date5 + plant5;
		//var x = false;	
		var fieldArr = [combo1, combo2, combo3, combo4, combo5];
		
	for(var i=0; i < (fieldArr.length-1); i++){

			if(fieldArr[i] == fieldArr[i+1] && fieldArr[i].length > 10 )
				{
					//alert(i+". "+fieldArr[i].value)
					var rowErr = "rfrow"+(i+1);
					var rowErrStr = rowErr.toString();
					var nrowErr = "rfrow"+(i+2);
					var nrowErrStr = nrowErr.toString();
					//console.log(nrowErrStr);
					//document.writeln(fieldArr[i] +" == "+fieldArr[i+1]+"<br>" );
					document.getElementById(rowErrStr).style.border = "5px solid red";
					document.getElementById(nrowErrStr).style.border = "5px solid red";
					document.getElementById("rerrMssg").style.visibility = "visible";
					document.getElementById("rerrMssg").innerHTML = "Cannot Enter Duplicate Measurements for the Same Plant the Same Day";
					//document.getElementById("errMssg").style.visibility = "visible";
					x = false;
					
				}
				
		}	
		

/*
		if(oneDate != "" && rrate1 == ""){
			document.getElementById("rrate1").style.border = "5px solid red";
			document.getElementById("rerrMssg").style.visibility = "visible";
			document.getElementById("rerrMssg").innerHTML = "Enter Rate";
			x = false;
		}
*/		
		if(oneDate == "" && rrate1 != ""){
			document.getElementById("oneDate").style.border = "5px solid red";
			document.getElementById("rerrMssg").style.visibility = "visible";
			document.getElementById("rerrMssg").innerHTML = "Enter Date";
			x = false;
		}
/*		
		if(oneDate != "" && rrate2 == ""){
			document.getElementById("rrate2").style.border = "5px solid red";
			document.getElementById("rerrMssg").style.visibility = "visible";
			document.getElementById("rerrMssg").innerHTML = "Enter Rate";
			x = false;
		}		
*/		
		if(oneDate == "" && rrate2 != ""){
			document.getElementById("oneDate").style.border = "5px solid red";
			document.getElementById("rerrMssg").style.visibility = "visible";
			document.getElementById("rerrMssg").style.color = "red";
			document.getElementById("rerrMssg").innerHTML = "Enter Date";
			x = false;
		}
/*		
		if(oneDate != "" && rrate3 == ""){
			document.getElementById("rrate3").style.border = "5px solid red";
			document.getElementById("rerrMssg").style.visibility = "visible";
			document.getElementById("rerrMssg").innerHTML = "Enter Rate";
			x = false;
		}		
*/		
		if(oneDate == "" && rrate3 != ""){
			document.getElementById("oneDate").style.border = "5px solid red";
			document.getElementById("rerrMssg").style.visibility = "visible";
			document.getElementById("rerrMssg").innerHTML = "Enter Date";
			x = false;
		}
/*		
		if(oneDate != "" && rrate4 == ""){
			document.getElementById("rrate4").style.border = "5px solid red";
			document.getElementById("rerrMssg").style.visibility = "visible";
			document.getElementById("rerrMssg").innerHTML = "Enter Rate";
			x = false;
		}	
*/		
		if(oneDate == "" && rrate4 != ""){
			document.getElementById("oneDate").style.border = "5px solid red";
			document.getElementById("rerrMssg").style.visibility = "visible";
			document.getElementById("rerrMssg").innerHTML = "Enter Date";
			x = false;
		}
/*		
		if(oneDate != "" && rrate5 == ""){
			document.getElementById("rrate5").style.border = "5px solid red";
			document.getElementById("rerrMssg").style.visibility = "visible";
			document.getElementById("rerrMssg").innerHTML = "Enter Rate";
			x = false;
		}
*/		
		if(oneDate == "" && rrate5 != ""){
			document.getElementById("oneDate").style.border = "5px solid red";
			document.getElementById("rerrMssg").style.visibility = "visible";
			document.getElementById("rerrMssg").innerHTML = "Enter Date";
			x = false;
		}
		if(oneDate != '' && plant1 !='' && rrate1 ==''){
			document.getElementById("rrate1").style.border = "5px solid red";
			document.getElementById("rerrMssg").style.visibility = "visible";
			document.getElementById("rerrMssg").innerHTML = "Enter a Rate for the Location";
			document.getElementById("rerrMssg").style.fontWeight = "bold";
			document.getElementById("rerrMssg").style.fontSize = "x-large";
			document.getElementById("rerrMssg").style.color = "red";
			x = false;
		}
		if(oneDate != '' && plant2 !='' && rrate2 ==''){
			document.getElementById("rrate2").style.border = "5px solid red";
			document.getElementById("rerrMssg").style.visibility = "visible";
			document.getElementById("rerrMssg").innerHTML = "Enter a Rate for the Location";
			document.getElementById("rerrMssg").style.fontWeight = "bold";
			document.getElementById("rerrMssg").style.fontSize = "x-large";
			document.getElementById("rerrMssg").style.color = "red";
			x = false;
		}
		if(oneDate != '' && plant3 !='' && rrate3 ==''){
			document.getElementById("rrate3").style.border = "5px solid red";
			document.getElementById("rerrMssg").style.visibility = "visible";
			document.getElementById("rerrMssg").innerHTML = "Enter a Rate for the Location";
			document.getElementById("rerrMssg").style.fontWeight = "bold";
			document.getElementById("rerrMssg").style.fontSize = "x-large";
			document.getElementById("rerrMssg").style.color = "red";
			x = false;
		}
		if(oneDate != '' && plant4 !='' && rrate4 ==''){
			document.getElementById("rrate4").style.border = "5px solid red";
			document.getElementById("rerrMssg").style.visibility = "visible";
			document.getElementById("rerrMssg").innerHTML = "Enter a Rate for the Location";
			document.getElementById("rerrMssg").style.fontWeight = "bold";
			document.getElementById("rerrMssg").style.fontSize = "x-large";
			document.getElementById("rerrMssg").style.color = "red";
			x = false;
		}

		if(oneDate != '' && plant5 !='' && rrate5 ==''){
			document.getElementById("rrate5").style.border = "5px solid red";
			document.getElementById("rerrMssg").style.visibility = "visible";
			document.getElementById("rerrMssg").innerHTML = "Enter a Rate for the Location";
			document.getElementById("rerrMssg").style.fontWeight = "bold";
			document.getElementById("rerrMssg").style.fontSize = "x-large";
			document.getElementById("rerrMssg").style.color = "red";
			x = false;
		}
		
		
		if(oneDate == "" && rrate1 == "" && rrate2 == "" && rrate3 == "" && rrate4 == "" && rrate5 == "" && plant1 == "" && plant2 == "" && plant3 == "" && plant4 == "" && plant5 == ""){			
			document.getElementById("RainfallEntry").style.border = "5px solid red";
			document.getElementById("RainfallEntry").style.padding = "2%";
			document.getElementById("rerrMssg").style.visibility = "visible";
			document.getElementById("rerrMssg").innerHTML = "*** NO VALUES ENTERED - Please Wait ***";
			document.getElementById("rerrMssg").style.color = "red";
			
			setTimeout(redirect, 2000);
			
			function redirect(){
				window.location="lab_home.php";

			}
			
			x = false;			
		}
		
		return x;
		
}



// REPORTING VALIDATION
function vRR(){
	
		document.forms["ReadingReport"]["date1"].style.border = "";
		document.forms["ReadingReport"]["date2"].style.border = "";
		
		var d1 = document.getElementById("date1").value;
		var d2 = document.getElementById("date2").value;
		var x = true;
		
		
		if(d1 == "" && d2 != ""){
			document.getElementById("date1").style.border = "5px solid red";
			document.getElementById("errMssg").style.visibility = "visible";
			document.getElementById("errMssg").innerHTML = "Enter From Date";
			x = false;			
			
		}
		
		if(d1 != "" && d2 == ""){
			document.getElementById("date2").style.border = "5px solid red";
			document.getElementById("errMssg").style.visibility = "visible";
			document.getElementById("errMssg").innerHTML = "Enter To Date";
			x = false;			
			
		}
		
		if (new Date(d1) > new Date(d2)){
			document.getElementById("ReadingReport").style.border = "5px solid red";
			document.getElementById("ReadingReport").style.padding = "1%";
			document.getElementById("errMssg").style.visibility = "visible";
			document.getElementById("errMssg").innerHTML = "Invalid Date Range";
			x = false;
		}
		
		if(d1 == "" && d2 == ""){			
			document.getElementById("ReadingReport").style.border = "5px solid red";
			document.getElementById("ReadingReport").style.padding = "2%";
			document.getElementById("errMssg").style.visibility = "visible";
			document.getElementById("errMssg").innerHTML = "*** NO VALUES ENTERED ***";
			setTimeout(redirect, 1000);
			
			function redirect(){
				window.location="GeneralReadRpt.cfm";
			}
			
			x = false;			
		}
		
	return x;		
		
	}




	function validateAnalyteEntry() {
	
		
		document.getElementById("date1").style.border = "";
		document.getElementById("date2").style.border = "";
		document.getElementById("date3").style.border = "";
		document.getElementById("date4").style.border = "";
		document.getElementById("date5").style.border = "";
		document.getElementById("results1").style.border = "";
		document.getElementById("results2").style.border = "";
		document.getElementById("results3").style.border = "";
		document.getElementById("results4").style.border = "";
		document.getElementById("results5").style.border = "";
		
		
		var analyte1 = document.getElementById("an1").value;
		var analyte2 = document.getElementById("an2").value;
		var analyte3 = document.getElementById("an3").value;
		var analyte4 = document.getElementById("an4").value;
		var analyte5 = document.getElementById("an5").value;
		
		var dtField1 = document.getElementById("date1").value;
		var dtField2 = document.getElementById("date2").value;
		var dtField3 = document.getElementById("date3").value;
		var dtField4 = document.getElementById("date4").value;
		var dtField5 = document.getElementById("date5").value;
	
		var plant1 = document.getElementById("plant1").value;
		var plant2 = document.getElementById("plant2").value;
		var plant3 = document.getElementById("plant3").value;
		var plant4 = document.getElementById("plant4").value;
		var plant5 = document.getElementById("plant5").value;
		
		var area1 = document.getElementById("area1").value;
		var area2 = document.getElementById("area2").value;
		var area3 = document.getElementById("area3").value;
		var area4 = document.getElementById("area4").value;
		var area5 = document.getElementById("area5").value;
		
		var train1 = document.getElementById("train1").value;
		var train2 = document.getElementById("train2").value;
		var train3 = document.getElementById("train3").value;
		var train4 = document.getElementById("train4").value;
		var train5 = document.getElementById("train5").value;
		
		var results1 = document.getElementById("results1").value;
		var results2 = document.getElementById("results2").value;
		var results3 = document.getElementById("results3").value;
		var results4 = document.getElementById("results4").value;
		var results5 = document.getElementById("results5").value;
		
		
		var x = true;
		
		var combo1 = analyte1 + dtField1 + plant1 + area1 + train1;
		var combo2 = analyte2 + dtField2 + plant2 + area2 + train2;
		var combo3 = analyte3 + dtField3 + plant3 + area3 + train3;
		var combo4 = analyte4 + dtField4 + plant4 + area4 + train4;
		var combo5 = analyte5 + dtField5 + plant5 + area5 + train5;
		
		var fieldArr = [combo1, combo2, combo3, combo4, combo5];
		
				for(var i=0; i < (fieldArr.length-1); i++){

			if(fieldArr[i] == fieldArr[i+1] && fieldArr[i].length > 13 )
				{
					//alert(i+". "+fieldArr[i].value)
					var rowErr = "pfrow"+(i+1);
					var rowErrStr = rowErr.toString();
					var nrowErr = "pfrow"+(i+2);
					var nrowErrStr = nrowErr.toString();
					//console.log(nrowErrStr);
					//document.writeln(fieldArr[i] +" == "+fieldArr[i+1]+"<br>" );
					document.getElementById(rowErrStr).style.border = "5px solid red";
					document.getElementById(nrowErrStr).style.border = "5px solid red";
					document.getElementById("errMssg").style.visibility = "visible";
					document.getElementById("errMssg").innerHTML = "Cannot Enter Duplicates for the Same Plant, Area, Train on the Same Day";
					//document.getElementById("errMssg").style.visibility = "visible";
					x = false;
					
				}
				
		}	
		
/* VALIDATE PH RANGES BELOW */

		if(analyte1 == 'PH' && results1 < 6 || results1 >9){
			
			document.getElementById("results1").style.border = "5px solid red";
			document.getElementById("errMssg").innerHTML = "PH not in valid range";
			document.getElementById("errMssg").style.visibility = "visible";
			x = false;
			
		}
		if(analyte2 == 'PH' && results2 < 6 || results2 >9){
			
			document.getElementById("results2").style.border = "5px solid red";
			document.getElementById("errMssg").innerHTML = "PH not in valid range";
			document.getElementById("errMssg").style.visibility = "visible";
			x = false;
			
		}
		if(analyte3 == 'PH' && results3 < 6 || results3 >9){
			
			document.getElementById("results3").style.border = "5px solid red";
			document.getElementById("errMssg").innerHTML = "PH not in valid range";
			document.getElementById("errMssg").style.visibility = "visible";
			x = false;
			
		}
		if(analyte4 == 'PH' && results4 < 6 || results4 >9){
			
			document.getElementById("results4").style.border = "5px solid red";
			document.getElementById("errMssg").innerHTML = "PH not in valid range";
			document.getElementById("errMssg").style.visibility = "visible";
			x = false;
			
		}
		if(analyte5 == 'PH' && results5 < 6 || results5 >9){
			
			document.getElementById("results5").style.border = "5px solid red";
			document.getElementById("errMssg").innerHTML = "PH not in valid range";
			document.getElementById("errMssg").style.visibility = "visible";
			x = false;
			
		}
/* VALIDATE PH RANGES ABOVE */

/* VALIDATE CL2 RANGES BELOW */

///// #1
		if(analyte1 == 'CL2' && plant1 == 'DES' || plant1 == 'NE' || plant1 == 'TBFS' && results1 < 1  || results1 > 4){
			
			document.getElementById("results1").style.border = "5px solid red";
			document.getElementById("errMssg").innerHTML = "CL2 OUTSIDE VALID RANGE";
			document.getElementById("errMssg").style.visibility = "visible";
			x = false;
			
		}
		else if(analyte1 == 'CL2' && results1 < 1){
			document.getElementById("results1").style.border = "5px solid red";
			document.getElementById("errMssg").innerHTML = "CL2 OUTSIDE VALID RANGE";
			document.getElementById("errMssg").style.visibility = "visible";
			x = false;
			
		}
/// #2
		
		if(analyte2 == 'CL2' && plant2 == 'DES' || plant2 == 'NE' || plant2 == 'TBFS' && results2 < 1  || results2 > 4){
			
			document.getElementById("results2").style.border = "5px solid red";
			document.getElementById("errMssg").innerHTML = "CL2 OUTSIDE VALID RANGE";
			document.getElementById("errMssg").style.visibility = "visible";
			x = false;
			
		}
		else if(analyte2 == 'CL2' && results1 < 1){
			document.getElementById("results1").style.border = "5px solid red";
			document.getElementById("errMssg").innerHTML = "CL2 OUTSIDE VALID RANGE";
			document.getElementById("errMssg").style.visibility = "visible";
			x = false;
			
		}
/// #3
		
		if(analyte3 == 'CL2' && plant3 == 'DES' || plant3 == 'NE' || plant3 == 'TBFS' && results3 < 1  || results3 > 4){
			
			document.getElementById("results3").style.border = "5px solid red";
			document.getElementById("errMssg").innerHTML = "CL2 OUTSIDE VALID RANGE";
			document.getElementById("errMssg").style.visibility = "visible";
			x = false;
			
		}
		else if(analyte3 == 'CL2' && results1 < 1){
			document.getElementById("results1").style.border = "5px solid red";
			document.getElementById("errMssg").innerHTML = "CL2 OUTSIDE VALID RANGE";
			document.getElementById("errMssg").style.visibility = "visible";
			x = false;
			
		}
/// #4
		
		if(analyte4 == 'CL2' && plant4 == 'DES' || plant4 == 'NE' || plant4 == 'TBFS' && results4 < 1  || results4 > 4){
			
			document.getElementById("results4").style.border = "5px solid red";
			document.getElementById("errMssg").innerHTML = "CL2 OUTSIDE VALID RANGE";
			document.getElementById("errMssg").style.visibility = "visible";
			x = false;
			
		}
		else if(analyte4 == 'CL2' && results1 < 1){
			document.getElementById("results1").style.border = "5px solid red";
			document.getElementById("errMssg").innerHTML = "CL2 OUTSIDE VALID RANGE";
			document.getElementById("errMssg").style.visibility = "visible";
			x = false;
			
		}
/// #5
		
		if(analyte5 == 'CL2' && plant5 == 'DES' || plant5 == 'NE' || plant5 == 'TBFS' && results5 < 1  || results5 > 4){
			
			document.getElementById("results5").style.border = "5px solid red";
			document.getElementById("errMssg").innerHTML = "CL2 OUTSIDE VALID RANGE";
			document.getElementById("errMssg").style.visibility = "visible";
			x = false;
			
		}
		else if(analyte5 == 'CL2' && results1 < 1){
			document.getElementById("results1").style.border = "5px solid red";
			document.getElementById("errMssg").innerHTML = "CL2 OUTSIDE VALID RANGE";
			document.getElementById("errMssg").style.visibility = "visible";
			x = false;
			
		}



/* VALIDATE CL2 RANGES ABOVE */


/* VALIDATE DO RANGES BELOW */

/// #1
		if(analyte1 == 'DO' && plant1 == 'WAL' || plant1 == 'SAR' && results1 < 6){
			
			document.getElementById("results1").style.border = "5px solid red";
			document.getElementById("errMssg").innerHTML = "DO OUTSIDE VALID RANGE";
			document.getElementById("errMssg").style.visibility = "visible";
			x = false;
			
		}

		else if(analyte1 == 'CL2' && plant1 == 'DES' || plant1 == 'NE' && results1 < 5){
			document.getElementById("results1").style.border = "5px solid red";
			document.getElementById("errMssg").innerHTML = "DO OUTSIDE VALID RANGE";
			document.getElementById("errMssg").style.visibility = "visible";
			x = false;
			
		}		
		
		else if(analyte1 == 'CL2' && plant1 == 'TBFS' && results1 < 2){
			document.getElementById("results1").style.border = "5px solid red";
			document.getElementById("errMssg").innerHTML = "DO OUTSIDE VALID RANGE";
			document.getElementById("errMssg").style.visibility = "visible";
			x = false;
			
		}
		
/// #2
		if(analyte2 == 'DO' && plant2 == 'WAL' || plant2 == 'SAR' && results2 < 6){
			
			document.getElementById("results2").style.border = "5px solid red";
			document.getElementById("errMssg").innerHTML = "DO OUTSIDE VALID RANGE";
			document.getElementById("errMssg").style.visibility = "visible";
			x = false;
			
		}

		else if(analyte2 == 'CL2' && plant2 == 'DES' || plant2 == 'NE' && results2 < 5){
			document.getElementById("results2").style.border = "5px solid red";
			document.getElementById("errMssg").innerHTML = "DO OUTSIDE VALID RANGE";
			document.getElementById("errMssg").style.visibility = "visible";
			x = false;
			
		}		
		
		else if(analyte2 == 'CL2' && plant2 == 'TBFS' && results2 < 2){
			document.getElementById("results2").style.border = "5px solid red";
			document.getElementById("errMssg").innerHTML = "DO OUTSIDE VALID RANGE";
			document.getElementById("errMssg").style.visibility = "visible";
			x = false;
			
		}
		
/// #3
		if(analyte3 == 'DO' && plant3 == 'WAL' || plant3 == 'SAR' && results3 < 6){
			
			document.getElementById("results3").style.border = "5px solid red";
			document.getElementById("errMssg").innerHTML = "DO OUTSIDE VALID RANGE";
			document.getElementById("errMssg").style.visibility = "visible";
			x = false;
			
		}

		else if(analyte3 == 'CL2' && plant3 == 'DES' || plant3 == 'NE' && results3 < 5){
			document.getElementById("results3").style.border = "5px solid red";
			document.getElementById("errMssg").innerHTML = "DO OUTSIDE VALID RANGE";
			document.getElementById("errMssg").style.visibility = "visible";
			x = false;
			
		}		
		
		else if(analyte3 == 'CL2' && plant3 == 'TBFS' && results3 < 2){
			document.getElementById("results3").style.border = "5px solid red";
			document.getElementById("errMssg").innerHTML = "DO OUTSIDE VALID RANGE";
			document.getElementById("errMssg").style.visibility = "visible";
			x = false;
			
		}	
		
/// #4
		if(analyte4 == 'DO' && plant4 == 'WAL' || plant4 == 'SAR' && results4 < 6){
			
			document.getElementById("results4").style.border = "5px solid red";
			document.getElementById("errMssg").innerHTML = "DO OUTSIDE VALID RANGE";
			document.getElementById("errMssg").style.visibility = "visible";
			x = false;
			
		}

		else if(analyte4 == 'CL2' && plant4 == 'DES' || plant4 == 'NE' && results4 < 5){
			document.getElementById("results4").style.border = "5px solid red";
			document.getElementById("errMssg").innerHTML = "DO OUTSIDE VALID RANGE";
			document.getElementById("errMssg").style.visibility = "visible";
			x = false;
			
		}		
		
		else if(analyte4 == 'CL2' && plant4 == 'TBFS' && results4 < 2){
			document.getElementById("results4").style.border = "5px solid red";
			document.getElementById("errMssg").innerHTML = "DO OUTSIDE VALID RANGE";
			document.getElementById("errMssg").style.visibility = "visible";
			x = false;
			
		}		
/// #5
		if(analyte5 == 'DO' && plant5 == 'WAL' || plant5 == 'SAR' && results5 < 6){
			
			document.getElementById("results5").style.border = "5px solid red";
			document.getElementById("errMssg").innerHTML = "DO OUTSIDE VALID RANGE";
			document.getElementById("errMssg").style.visibility = "visible";
			x = false;
			
		}

		else if(analyte5 == 'CL2' && plant5 == 'DES' || plant5 == 'NE' && results5 < 5){
			document.getElementById("results5").style.border = "5px solid red";
			document.getElementById("errMssg").innerHTML = "DO OUTSIDE VALID RANGE";
			document.getElementById("errMssg").style.visibility = "visible";
			x = false;
			
		}		
		
		else if(analyte5 == 'CL2' && plant5 == 'TBFS' && results5 < 2){
			document.getElementById("results5").style.border = "5px solid red";
			document.getElementById("errMssg").innerHTML = "DO OUTSIDE VALID RANGE";
			document.getElementById("errMssg").style.visibility = "visible";
			x = false;
			
		}





/* VALIDATE DO RANGES ABOVE */
		
		if(dtField1 == "" && results1 != ""){ // #1
			document.getElementById("date1").style.border = "5px solid red";
			document.getElementById("errMssg").innerHTML = "Correct Errors and Submit";
			document.getElementById("errMssg").style.visibility = "visible";
			x = false;
		}
		if(dtField1 != '' && results1 == ''){ //#2
			document.getElementById("results1").style.border = "5px solid red";
			document.getElementById("errMssg").innerHTML = "Correct Errors and Submit";
			document.getElementById("errMssg").style.visibility = "visible";
			x = false;		
		}
		if(dtField2 != "" && results2 == ""){ //#3
			document.getElementById("results2").style.border = "5px solid red";
			document.getElementById("errMssg").innerHTML = "Correct Errors and Submit";
			document.getElementById("errMssg").style.visibility = "visible";
			x = false;
		
		}		
		if(dtField2 == "" && results2 != ""){ //#4
			document.getElementById("date2").style.border = "5px solid red";
			document.getElementById("errMssg").innerHTML = "Correct Errors and Submit";;
			document.getElementById("errMssg").style.visibility = "visible";
			x = false;
		
		}
		if(dtField3 != "" && results3 == ""){ //#5
			document.getElementById("results3").style.border = "5px solid red";
			document.getElementById("errMssg").innerHTML = "Correct Errors and Submit";
			document.getElementById("errMssg").style.visibility = "visible";
			x = false;
		
		}		
		if(dtField3 == "" && results3 != ""){ //#6
			document.getElementById("date3").style.border = "5px solid red";
			document.getElementById("errMssg").innerHTML = "Correct Errors and Submit";
			document.getElementById("errMssg").style.visibility = "visible";
			x= false;
		
		}		
		if(dtField4 != "" && results4 == ""){ //#7
			document.getElementById("results4").style.border = "5px solid red";
			document.getElementById("errMssg").innerHTML = "Correct Errors and Submit";
			document.getElementById("errMssg").style.visibility = "visible";
			x = false;
		
		}		
		if(dtField4 == "" && results4 != ""){ //#8
			document.getElementById("date4").style.border = "5px solid red";
			document.getElementById("errMssg").innerHTML = "Correct Errors and Submit";
			document.getElementById("errMssg").style.visibility = "visible";
			x = false;
		
		}		
		if(dtField5 != "" && results5 == ""){ //#9
			document.getElementById("results5").style.border = "5px solid red";
			document.getElementById("errMssg").innerHTML = "Correct Errors and Submit";
			document.getElementById("errMssg").style.visibility = "visible";
			x = false;
		
		}		
		if(dtField5 == "" && results5 != ""){ //#10
			document.getElementById("date5").style.border = "5px solid red";
			document.getElementById("errMssg").innerHTML = "Correct Errors and Submit";
			document.getElementById("errMssg").style.visibility = "visible";
			x = false;
		
		}
		
		if(dtField1 == "" && results1 == "" && dtField2 == "" && results2 == "" && dtField3 == "" && results3 == "" && dtField4 == "" && results4 == "" && dtField5 == "" && results5 == ""){
			document.getElementById("errMssg").innerHTML = "*** NO VALUES ENTERED - PLEASE WAIT ***";			
			document.getElementById("errMssg").style.visibility = "visible";
			document.getElementById("AnalyteEntry").style.border = "5px solid red";
			document.getElementById("AnalyteEntry").style.padding = "2%";
			setTimeout(redirect, 2000);

			function redirect(){
				window.location="PPAnalytes.cfm";
			}
			x = false;
		
		}	
		//alert(x);
		return x;

}			
