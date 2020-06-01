/*$(document).ready(function(){
	a = 1;
	b = 0.02;
	
	$("#itemjoppa").click(function(){
		if (a <= 0.04){
			audio = new Audio('bang.mp3');
			audio.play();
			$(this).remove();
			document.getElementById("itemjoppes").innerHTML="Жопа сгорела...";
			document.getElementById("joppescaption").innerHTML="Вы пошатнули мироздание.";
		}
		else {
			a -= b;
			$(this).css({
			"transform": "scale(" + a + ", " + a + ")"
			});
		}
		
	});
});*/