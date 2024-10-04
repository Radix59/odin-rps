

const selector = document.querySelector(".selection");

selector.addEventListener("click", getHumanChoice);


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

function getHumanChoice(event)
{
    switch (event.target.id)
    {
        case "rock":
            playRound("rock", getComputerChoice());
            break;
        case "scissors":
            playRound("scissors", getComputerChoice());
            break;
        case "paper":
            playRound("paper", getComputerChoice());
            break;
    }
}

const humanScore = document.querySelector("#humanscore");
const computerScore = document.querySelector("#computerscore");

function playRound(humanChoice, computerChoice)
{
    if (humanChoice === "rock" && computerChoice === "scissors")
    {
        console.log("You win! Rock beats Scissors");
        humanScore.textContent++;
    }
    else if (humanChoice === "rock" && computerChoice === "paper")
    {
        console.log("You lose! Rock loses to Paper");
        computerScore.textContent++;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper")
    {
        console.log("You win! Scissors beats Paper");
        humanScore.textContent++;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock")
    {
        console.log("You lose! Scissors loses to Rock");
        computerScore.textContent++;
    }
    else if (humanChoice === "paper" && computerChoice === "rock")
    {
        console.log("You win! Paper beats Rock");
        humanScore.textContent++;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors")
    {
        console.log("You lose! Paper loses to Scissors");
        computerScore.textContent++;
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