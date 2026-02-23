function rockPaperScissors() {
    num = Math.floor(Math.random() * 3) + 1;
    if (num === 1) {
        return "rock";
    } else if (num === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

let userChoice =prompt("Let's play rock paper scissors! Type your choice below:");
let computerChoice = rockPaperScissors();

if (userChoice === computerChoice) {
    alert("It's a tie! Both you and the computer chose " + userChoice + ".");
} else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
) {
    alert("You win! You chose " + userChoice + " and the computer chose " + computerChoice + ".");
} else {
    alert("You lose! You chose " + userChoice + " and the computer chose " + computerChoice + ".");
}