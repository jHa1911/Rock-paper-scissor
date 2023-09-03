let playerSelection = prompt("Enter your choice: ");




function ComputerChoice(){
    const choices = ['rock', 'paper', 'scissor'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

let computerChoice = ComputerChoice();


function playRound(playerSelection, computerChoice){
    if(playerSelection === computerChoice){
        return 'The game is a tie!';
    }
    if(playerSelection === 'rock'){
        if(computerChoice === 'paper'){
            return 'Computer won!';
        }else{
            return 'You won!';
        }
    }
    if(playerSelection === 'paper'){
        if(computerChoice === 'scissor'){
            return 'Computer won!';
        }else{
            return 'You won!';
        }
    }
    if(playerSelection === 'scissor'){
        if(computerChoice === 'rock'){
            return 'Computer won!';
        }else{
            return 'You won!';
        }
    }

}

let result1 = playRound(playerSelection, computerChoice);
document.getElementById("demo1").innerHTML = result1;

let count_computer = 0, count_person = 0;

function game(){
    for(let i = 0; i<=5; i++) {
        if(playRound(playerSelection, computerChoice) === "Computer won!"){
            count_computer++;
        }
        else if (playRound(playerSelection, computerChoice) === "You won!"){
            count_person++;
        }
        else{
            count_computer++;
            count_person++;
        }
    }
    if (count_computer < count_person){
        return "You won the game!";
    }
    else if (count_computer > count_person){
        return "Computer won!";
    }
    else{
        return "The game is a tie!";
    }
}


let result = game();
document.getElementById("demo").innerHTML = result;

