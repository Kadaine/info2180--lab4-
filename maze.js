let borders;
let condition = false;
let goal1;
let getstart;
let testwin = false;

window.onload = function (){
	stat = document.getElementById('status');
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
	if(!testwin){
	if (!condition){
		condition = true;
	borders = document.querySelectorAll('.boundary');
	stat.innerHTML = "You lose";
	for (var i = 0; i < borders.length - 1; i++){
			borders[i].className += " youlose";
	    }
	}
	}	
}

function message (){
	if(!condition){
		testwin = true
		stat.innerHTML = "You win";
	}
}

function restart(){
	condition = false;
	testwin = false;
	borders = document.querySelectorAll('.boundary');
	stat.innerHTML = "Move your mouse over the S to begin";
	for (var i = 0; i < borders.length - 1; i++){
		borders[i].className = " boundary";
	}

}