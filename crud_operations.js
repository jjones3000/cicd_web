function ApprovalFunction(rtype) {

		switch(rtype)
		{

			case 'PlantFlow':
				var callFile = 'fApproveMeasurements.cfm';
				break;
			case 'Rainfall':
				var callFile = 'rApproveMeasurements.cfm';
				break;
			case 'Analytes':
				var callFile = 'aApproveMeasurements.cfm';
				break;
			default:
			break;
		
		}


			var elemNum = $('input[name="aCheck"]').length;
			for(i=0; i<elemNum; i++)
			{			
				if(document.getElementsByName("aCheck")[i].checked && document.getElementsByName('aYN')[i].innerHTML == 'N')
					{
							var curElem = document.getElementsByName("mvalue")[i].id;
								$.ajax({
									type: "POST",
									url: callFile,							  
									data: {
											postVal:curElem,
											},
									datatype:'json',
									complete:function(msg){
									////alert('fxn completed');
									   }
								});	
								document.getElementsByName('aYN')[i].innerHTML = 'Y';			
					}
			}
			$('input[name="aCheck"]').removeAttr('checked');
			
}