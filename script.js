const choices = ["rock", "paper", "scissors"];
let humanScore = 0, computerScore = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.textContent.toLowerCase(), getComputerChoice());
    });
});

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
    if (!hasGameEnded()) {
        const results = document.querySelector(".results");
        results.innerHTML = "";

        const textChoices = document.createElement("p");
        const scores = document.createElement("span");

        if (humanChoice === computerChoice) {
            textChoices.textContent = "It's a tie ! You both chose " + humanChoice;
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "rock")
        ) {
            humanScore++;
            textChoices.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        } else {
            computerScore++;
            textChoices.textContent = `You loose! ${computerChoice} beats ${humanChoice}`;
        }
        scores.textContent = `Current scores: You - ${humanScore}, Computer - ${computerScore}`;

        results.appendChild(textChoices);
        results.appendChild(scores);
        hasGameEnded();
    }
}

const hasGameEnded = () => {
    if (humanScore === 5 || computerScore === 5) {
        const results = document.querySelector(".results");
        results.innerHTML = "";

        const scores = document.createElement("span");
        scores.textContent = `Current scores: You - ${humanScore}, Computer - ${computerScore}`;
        results.appendChild(scores);
        
        const endGame = document.createElement("p");
        endGame.textContent = humanScore === 5 ? "Human won !" : "Computer won !";
        results.appendChild(endGame);
        return true;
    }
    return false;
}

// playGame function, main function to play the game, set the numbers of rounds to 5 for now
const playGame = (rounds = 5) => {
    for (let i = 0; i < rounds; i++) playRound(getHumanChoice(), getComputerChoice());
}

//playGame();