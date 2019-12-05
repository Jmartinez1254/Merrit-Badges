/*Merrit badge 3: Guess Advanced*/
var games= 0;
var again = true; 
var totalTurns = 0;
while(again == true){
	guess = 0;
	turns = 0;
	games++; 
	var answer = Math.floor(Math.random(1-100)*10)+1;
	console.log(answer);
	while (guess != answer){
		guess=prompt("guess my number between (1-100)"); 
		if(guess == "q") break;
  		if(validator(guess)==true){
			if(guess<answer) alert("Two low.");
			else if(guess>answer) alert ("Too high"); 
			turns++;
		}
	  	else alert("Invalid guess");
	}
	if(guess == answer){ 
		gameStats(turns);
		newGame(); 

		
	}
	
	else alert("quitter"); 
}



function validator(guess){ 
if (guess > 0 && guess < 101) return true;
else return false;
} 

function gameStats(turns) {
if (guess == answer)  alert("You guessed it in " +turns+ " turns")
  totalTurns = totalTurns+turns;
  var averageTurns = 0;
  averageTurns = totalTurns/games;
  alert("You won " +games+ " games with an average of " +averageTurns+ " turns per game!")
}

function newGame(){
	again = confirm("would you like to play again?");
	if (again == "false") 
		alert("Thank you for playing");	
		return false;	
	}	
	

