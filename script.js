function getComputerChoice()
{
    const result = Math.random();
    if (result >= 0.66)
    {
        return "rock";
    }
    else if (result < 0.66 && result > 0.33)
    {
        return "scissors";
    }
    else if (result <= 0.33)
    {
        return "paper";
    }
}

function getHumanChoice()
{
    let userChoice = prompt("Choose Rock, Paper, or Scissors").toLowerCase();
    if (userChoice === "rock")
    {
        return "rock";
    }
    else if (userChoice === "scissors")
    {
        return "scissors";
    }
    else if (userChoice === "paper")
    {
        return "paper";
    }
    else
    {
        return "INVALID CHOICE";
    }
}

let humanScore = 0;
let computerScore = 0;
let humanPick = "NA";
let computerPick = "NA";

function playRound(humanChoice, computerChoice)
{
    if (humanChoice === "rock" && computerChoice === "scissors")
    {
        console.log("You win! Rock beats Scissors");
        humanScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "paper")
    {
        console.log("You lose! Rock loses to Paper");
        computerScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper")
    {
        console.log("You win! Scissors beats Paper");
        humanScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock")
    {
        console.log("You lose! Scissors loses to Rock");
        computerScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "rock")
    {
        console.log("You win! Paper beats Rock");
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors")
    {
        console.log("You lose! Paper loses to Scissors");
        computerScore++;
    }
    else if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors")
    {
        console.log("Tie on " + computerChoice + "!");
    }
    else
    {
        console.log("Invalid game.");
    }
}

function playGame()
{
    for (let i = 0; i < 5; i++)
    {
        humanPick = getHumanChoice();
        computerPick = getComputerChoice();
        playRound(humanPick, computerPick);
        console.log("SCORE: You - " + humanScore + ", CPU - " + computerScore);
    }
}

playGame();