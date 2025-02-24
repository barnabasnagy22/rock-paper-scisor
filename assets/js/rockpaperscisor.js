const options = ["rock", "paper", "scissor"];

function getComputerChoice(){
    const a = Math.floor(Math.random() * 3);  
    return options[a]; 
}

function getHumanChoice(){
    let user = prompt("Select rock, paper or scissor");
    while (!options.includes(user)) { 
        user = prompt("You can only type rock, paper or scissor");
    }
    return user; 
}

let humanScore = 0;
let computerScore = 0;

function playGround(humanChoice, computerChoice){
    console.log(`Human: ${humanChoice}, Computer: ${computerChoice}`);

    if ((humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "scissor" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")) {
        console.log("Human won!");
        humanScore++;
    }
    else if (humanChoice === computerChoice) {
        console.log("It's a draw!");
    }
    else {
        console.log("Computer won!");
        computerScore++;
    }
}

function playRound(){
    for(let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playGround(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log("Human won the game!");
    } else if (humanScore < computerScore) {
        console.log("Computer won the game!");
    } else {
        console.log("It's a tie!");
    }
}

playRound();
