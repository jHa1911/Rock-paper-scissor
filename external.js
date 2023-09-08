const choices = ["rock", "paper", "scissors"];
let rounds = 0;
let userWins = 0;
let computerWins = 0;

function computerPlay() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        userWins++;
        document.getElementById('userpoints').innerHTML = userWins;
        return `You win! You chose ${playerSelection}, I choose ${computerSelection}.`;
    } else {
        computerWins++;
        document.getElementById('computerpoints').innerHTML = computerWins;
        return `I win! You chose ${playerSelection}, I choose ${computerSelection}.`;
    }
}

function resetGame() {
    rounds = 0;
    userWins = 0;
    computerWins = 0;
    document.getElementById("roundResult").textContent = "";
    document.getElementById("finalResult").textContent = "";
    document.getElementById("userpoints").innerHTML = "0";
    document.getElementById("computerpoints").innerHTML = "0";
}




function startGame(choice){
    if (rounds < 5) {
        const computerChoice = computerPlay();
        const result = playRound(choice, computerChoice);
        document.getElementById("roundResult").textContent = result;
        rounds++;
        if (rounds === 5) {
            if (userWins > computerWins) {
                document.getElementById("finalResult").textContent = "You win the game!";
            } else if (computerWins > userWins) {
                document.getElementById("finalResult").textContent = "Computer wins the game!";
        }else {
                document.getElementById("finalResult").textContent = "It's a tie game!";
            }
        }
    }
} 


document.getElementById('rockbtn').addEventListener('click', function() {
    startGame('rock');
})

document.getElementById('paperbtn').addEventListener('click', function() {
    startGame('paper');
})

document.getElementById('scissorbtn').addEventListener('click', function() {
    startGame('scissor');
})

document.getElementById('newGameButton').addEventListener('click', function() {
    resetGame();
});





