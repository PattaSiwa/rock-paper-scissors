const gameChoices = ["rock", "paper", "scissors"]

const randomMove = () => {
    return gameChoices[Math.floor(Math.random() * 3)]
}


//need to have 3 functions to call for each options

const runRock = () => {
    let compMove = randomMove()
    rockPaperScissors(compMove, 'rock')
}

const runPaper = () => {
    let compMove = randomMove()
    rockPaperScissors(compMove, 'paper')
}

const runScissors = () => {
    let compMove = randomMove()
    rockPaperScissors(compMove, 'scissors')
}

const resetDisplay = () => {
    const h3 = document.querySelector('h3')
    h3.textContent = "Please make your selection below!"
}


const rockPaperScissors = (com, user) => {
    //changing the h3 innerText to correspond the outcome

    const h3 = document.querySelector('h3')

    if (com === user) {
        h3.textContent = `It's a tie!! You and Computer chose ${com.charAt(0).toUpperCase() + com.slice(1)}`
    } else if (com === "rock") {
        if (user === "paper") {
            h3.textContent = "You won! Paper beats Rock!"
        } else if (user === "scissors") {
            h3.textContent = "Computer won! Rock beats Scissors"
        }
    } else if (com === "paper") {
        if (user === "rock") {
            h3.textContent = "Computer won! Paper beats Rock!"
        } else if (user === "scissors") {
            h3.textContent = "You won! Scissors beat Paper!"
        }
    } else if (com === "scissors") {
        if (user === "rock") {
            h3.textContent = "You won! Rock beats Scissors!"
        } else if (user === "paper") {
            h3.textContent = "Computer won! Scissors beat Paper!"
        }
    }

    // reset the screen after 5 seconds
    setTimeout(resetDisplay, 4000)

}

// let userInput = prompt("Would you like to play?", 'yes or quit')

// while (userInput !== "quit" || userInput !== "q" ) {

//     let compMove = randomMove()
//     userInput = prompt("What's your move?", "rock, paper,scissors or quit").toLowerCase()
//     rockPaperScissors(compMove, userInput)

// }

// console.log("You've quit the game")

/////// connect all the buttons with on click and run the game with corresponding game choice as argument

document.getElementById('rock').addEventListener('click', runRock)
document.getElementById('paper').addEventListener('click', runPaper)
document.getElementById('scissors').addEventListener('click', runScissors)
