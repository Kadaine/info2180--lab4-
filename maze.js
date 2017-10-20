let borders;
let condition = false;
let goal1;
let getstart;

window.onload = function (){
	goal1 = document.getElementById('end');
	goal1.onmouseover = message;
	getstart = document.getElementById('start');
	getstart.onclick = restart;
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

function message (){
	if(!condition){
		alert("You win the game");
	}
}

function restart(){
	condition = false;
	borders = document.querySelectorAll('.boundary');
	for (var i = 0; i < borders.length - 1; i++){
		borders[i].className = " boundary";
	}

}