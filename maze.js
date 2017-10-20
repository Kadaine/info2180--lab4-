
let borders;
let condition = false;

window.onload = function (){
	borders = document.querySelectorAll('.boundary');
	for (var i = 0; i < borders.length - 1; i++){
		borders[i].onmouseover = bordercrossed;
	}
}

function bordercrossed (){
	if (!condition){
		condition = true;
	borders = document.querySelectorAll('.boundary');
	for (var i = 0; i < borders.length - 1; i++){
			borders[i].className += " youlose";
	    }
	}	
}