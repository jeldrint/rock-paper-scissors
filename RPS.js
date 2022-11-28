let playerVal = 0;
let cpuVal= 0;
let playerSelection;
let computerSelection;

function getComputerChoice(){
    let randomVal = Math.random();
    switch (true){
        case (0 < randomVal && randomVal < 0.37): return "rock";
    
        case (0.37 <= randomVal && randomVal < 0.63): return "paper";
    
        case (randomVal >= 0.63): return "scissors";
    }
}

function playRound(player, cpu){
    switch(player){
        case "1": player = "rock"
        break;
        case "2": player = "paper"
        break;
        case "3": player = "scissors"
        break;
        default: player = player.toLowerCase();
        break;
    }

    switch(true){
        case (player == "rock" && cpu == "rock"): 
            return "Computer's hand is rock too.";

        case (player == "rock" && cpu == "paper"):
            cpuVal++;
            return "Computer's hand is paper. CPU scores. 🥶";
        
        case (player == "rock" && cpu == "scissors"): 
            playerVal++;
            return "Computer's hand is scissors. You score! 🥳";

        case (player == "paper" && cpu == "paper"): 
            return "Computer's hand is paper too.";

        case (player == "paper" && cpu == "scissors"):
            cpuVal++;
            return "Computer's hand is scissors. CPU scores. 🥶";
        
        case (player == "paper" && cpu == "rock"): 
            playerVal++;
            return "Computer's hand is rock. You score! 🥳";

        case (player == "scissors" && cpu == "scissors"): 
            return "Computer's hand is scissors too. ";

        case (player == "scissors" && cpu == "rock"):
            cpuVal++;
            return "Computer's hand is rock. CPU scores. 🥶";
        
        case (player == "scissors" && cpu == "paper"): 
            playerVal++;
            return "Computer's hand is paper. You score! 🥳";

        default: 
            cpuVal++;
            return "Wrong syntax. CPU scores";

    }
}

function game(){
    for (let i = 1; i <= gamesVal; i++){
        playerSelection = prompt("Game #"+ i + "\nScore: " + playerVal + " - " + cpuVal 
        + "\nRock (1), Paper (2) or Scissors (3)? ");
        computerSelection = (getComputerChoice());
        alert(playRound(playerSelection, computerSelection));
    }
}

function result(){
    alert(`tallying scores...\nPlayer: ${playerVal}, CPU: ${cpuVal}\nPress enter`);
    if(playerVal > cpuVal){
        return "Congratulations, you won!";
        
    }
    else if(playerVal == cpuVal){
        return "It's a draw game. Thank you.";
    }
    else{
        return "You lost, sorry. ";
    }
}



const gamesVal = prompt("How many games? ");
alert("Welcome to Rock, Paper and Scissors' game, " + gamesVal + " games. Ready? ");
game();
alert(result());


