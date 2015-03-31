//TODO: 
//rock paper scissors game
var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();

//map a random number to the name of one of 3 possibilities
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} alert("Computer: " + computerChoice);


 //choice1 is userChoice, choice2 is the computerChoice
var compare = function (choice1, choice2){
    if(choice1 == choice2){
        return("The result is a tie!");
    }   
    

    else if(choice1 === "rock"){
        if(choice2 === "scissors"){
            return("rock wins");
        }
        else if(choice2 === "paper"){
        	console.log("paper wins");
        	return("paper wins"); 
        } else{ return("something weird happened.");    }  
    }

    else if(choice1 === "paper"){
        if(choice2 === "rock"){
            console.log("paper wins");
            return("paper wins");
        } 
        else if(choice2 === "scissors"){
        	console.log("scissors wins");
        	return("scissors wins"); 
        } else{ return("something weird happened.");   }
    } 
    
    
	
   else if(choice1 === "scissors"){
        if(choice2 === "rock"){
            console.log("rock wins");
            return("rock wins");
        } 
        else if(choice2 == "paper"){
        	console.log("scissors wins");
        	return("scissors wins");	
        } else{ return("something weird happened.");    } 
   }    
   else{ return("something weird happened.");}

};	//end of compare();

console.log(computerChoice);
console.log(userChoice);
compare(computerChoice, userChoice);
alert(compare(computerChoice, userChoice));