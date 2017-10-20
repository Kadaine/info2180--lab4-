let border1;
let condition = false 

window.onload = function (){
	border1 = document.getElementById('boundary1');
	border1.onmouseover = function(){
		if(!condition){
			border1.className += " youlose";
			condition = true;
		}
	}



}