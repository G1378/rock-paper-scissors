let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    num = Math.floor(Math.random() * 3) + 1;
    if (num === 1) {
        return "rock";
    } else if (num === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}


function getHumanChoice() {
    return prompt("Let's play rock paper scissors! Type your choice below:");
}


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        alert("It's a tie! Both you and the computer chose " + humanChoice + ".");
        computerScore++;
        humanScore++;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        alert("You win! You chose " + humanChoice + " and the computer chose " + computerChoice + ".");
        humanScore++;
    } else {
        alert("You lose! You chose " + humanChoice + " and the computer chose " + computerChoice + ".");
        computerScore++;
    }
}

const humanselection = getHumanChoice();
let computerSelection = getComputerChoice();
playRound(humanselection, computerSelection);