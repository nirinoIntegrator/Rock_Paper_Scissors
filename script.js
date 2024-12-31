const choices = ["rock", "paper", "scissors"];
let humanScore = 0, computerScore = 0;

// Function to make the computer play return computer choices
const getComputerChoice = () => choices[Math.floor(Math.random() * choices.length)];

// Function to get player choice
const getHumanChoice = () => {
    let choice;
    do {
        choice = prompt("Choose rock, paper, or scissors").toLowerCase();
    } while (!choices.includes(choice));
    return choice;
};

// Function playRound to make a round
const playRound = (humanChoice, computerChoice) => {
    if (humanChoice === computerChoice) {
        console.log("It's a tie ! You both chose " + humanChoice);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore++;
        console.log(`You loose! ${computerChoice} beats ${humanChoice}`);
    }

    console.log(`Current scores: You - ${humanScore}, Computer - ${computerScore}`)
}

// playGame function, main function to play the game, set the numbers of rounds to 5 for now
const playGame = (rounds = 5) => {
    for (let i = 0; i < rounds; i++) playRound(getHumanChoice(),getComputerChoice());
}

playGame();