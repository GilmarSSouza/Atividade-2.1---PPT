var vic = 0;
var der = 0;
var emp = 0;
document.getElementById(Vitoria).value = vic;
document.getElementById(Empate).value = emp;
document.getElementById(Derrota).value = der;
function pedra() {
	 var x = Math.floor(Math.random()*3); 
	console.log(x);
		if (x==1) {
	var AI = "pedra";
	}
	else if (x==2) {
	var AI = "papel";
}
	else if(x==0){
	var AI = "tesoura";
	}
	console.log(AI);
	var PPT = "pedra";
	console.log(PPT);
 	if (AI == "tesoura") {
    	    alert ("Pedra quebra tesoura");
    	    vic++;
    	} else if (AI == "papel"){
        	alert ("Papel envolve a Pedra");
        	der++;
    	} else if (AI == "pedra") {
        	alert ("Empate");
        	emp++;
		}
}
function papel() {
	 	var x = Math.floor(Math.random()*3); 
	console.log(x);
	 	if (x==1) {
	var AI = "pedra";
	}
	else if (x==2) {
	var AI = "papel";
}
	else if(x==0){
	var AI = "tesoura";
	}
	console.log(AI);
	var PPT = "papel";
	console.log(PPT);
	if (AI == "pedra") {
        alert ("Papel envolve pedra");
        vic++;
    }else if (AI == tesoura) {
        alert ("Tesoura corta papel");
        der++;
    }else if (AI == "papel")  {
        alert ("Empate");
    	emp++;
    }
}
function tesoura() {
	 	var x = Math.floor(Math.random()*3); 
	console.log(x);
	 	if (x==1) {
	var AI = "pedra";
	}
	else if (x==2) {
	var AI = "papel";
}
	else if(x==0){
	var AI = "tesoura";
	}
	console.log(AI);
	var PPT = "tesoura";
	console.log(PPT);
	if (AI == "pedra") {
        alert ("Pedra quebra tesoura");
    	vic++;
    } else if (AI == papel){
        alert ("tesoura corta papel");
    	der++;
    } else if (AI == "tesoura") {
        alert ("Empate");
    	emp++;
    }
}