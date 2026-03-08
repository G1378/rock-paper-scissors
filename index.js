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



function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        alert("It's a tie! Both you and the computer chose " + humanChoice + ".");
        // No score increment for tie
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


function playGame() {
    const humanselection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanselection, computerSelection);
}

//alert("Final score: You " + humanScore + " - Computer " + computerScore);


document.querySelector("#btn-1").addEventListener("click", () => {
    const humanSelection = "rock";
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    document.getElementById("score").innerText = "You: " + humanScore + " Computer: " + computerScore;
});

document.querySelector("#btn-2").addEventListener("click", () => {
    const humanSelection = "paper";
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    document.getElementById("score").innerText = "You: " + humanScore + " Computer: " + computerScore;
});

document.querySelector("#btn-3").addEventListener("click", () => {
    const humanSelection = "scissors";
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    document.getElementById("score").innerText = "You: " + humanScore + " Computer: " + computerScore;
});

document.querySelector("#reset").addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    document.getElementById("score").innerText = "You: " + humanScore + " Computer: " + computerScore;
});                 