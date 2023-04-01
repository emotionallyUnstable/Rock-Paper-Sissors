const options = ["rock", "paper", "scissor"];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "It's a tie";
    } else if (
        (playerSelection == "rock" && computerSelection == "scissor") || 
        (playerSelection == "scissor" && computerSelection == "paper") || 
        (playerSelection == "paper" && computerSelection == "rock")
    ) {
        return "Player";
    } else {
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "It's a tie") {
        return "It's a tie!";
    } else if (result == "Player") {
        return `You win! ${playerSelection} beats ${computerSelection}`
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
}

function getPlayerChoice() {
    let validInput = false;

    while(validInput == false) {
        const choice = prompt("Rock Paper Scissor");

        if (choice == null) {
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(choice.includes(choiceInLower)) {
            validInput = true;
            return choiceInLower;
        }
    }
}

function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log("Welcome!")
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice()
        console.log(playRound(playerSelection,computerSelectionroc));
        console.log("-----------------")
        if (checkWinner(playerSelection,computerSelection) == "Player") {
            scorePlayer++;
        } else if (checkWinner(playerSelection, computerSelection) == "Computer") {
            scoreComputer++;
        }
    }
    console.log("Game Over");
    if (scorePlayer > scoreComputer) {
        console.log("Player was the winner!");
    } else if (scorePlayer < scoreComputer) {
        console.log("Computer was the winner!");
    } else {
        console.log("We have a tie!");
    }
}
   

game();