
$(document).ready(function(){
	$("#fridge").click(function(){
  		$("#actualpage").show(400);
  	});

  		$("#fridge").click(function(){
  		$("#opener").hide();
  	});

	$("#textbox").hover(function(){
    	$("#textbox").css("background-color","#F8F8F8");
    	},function(){
    	$("#textbox").css("background-color","");
  	});

	$("#textbox").hover(function(){
    	$("#textbox").css("color","black");
    	},function(){
    	$("#textbox").css("color","#909090");
  	});

	$("#label1").click(function(){
    $("#label1").text("Ice Cream");
  	});

	$("#label2").click(function(){
    $("#label2").text("UC Berkeley");
  	});

	$("#label3").click(function(){
    $("#label3").text("Family");
  	});

	$("#label4").click(function(){
    $("#label4").text("Friends");
  	});

});
