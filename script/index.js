$(document).ready(function(){

	$("th").click(function(){
	
		var id=$(this).attr("id");		
		
		if(id=="menu1")
		{
			window.location.href = "index.html";
		}
		if(id=="menu2")
		{
			window.location.href = "aboutus.html";
		}
		if(id=="menu3")
		{
			window.location.href = "ibmechile.html";
		}
		if(id=="menu4")
		{
			window.location.href = "interes.html";
		}
		if(id=="menu5")
		{
			window.location.href = "contactus.html";
		}	
	
	});



});