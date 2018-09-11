$(document).ready(function(){



		 
		$("button[name='LoginSubmit']").click(function(){
			
			//alert("hello");
				event.preventDefault();
				event.stopPropagation(); 
			
					var x=false;
					var adminUser = document.getElementById('user');
					var adminUser = document.getElementById('admin');
					//console.log(userType);
					//alert(x);
					if('input[name=userType]==admin')
					{
						//alert("hi admin");
						document.getElementById('LoginError').innerHTML = 'Must Login as Admin or User';
						//document.getElementById('LoginError').style.border = "5px solid red";
						document.getElementById('LoginError').style.visibility = "visible";
						document.getElementById('LoginError').style.color = "red";
						document.getElementById('LoginError').style.fontSize = "75%";
						document.getElementById('LoginError').style.padding = "5% 0";
						x=true;
					}
					return x;
		
		});
		
});