const gameChoices = ["rock", "paper", "scissors"]

const randomMove = () => {
    return gameChoices[Math.floor(Math.random() * 3)]
}

// console.log(randomMove())



const rockPaperScissors = (com, user) => {
    if (com === user) {
        console.log(`It's a tie!!`)
    } else if (com === "rock") {
        if (user === "paper") {
            console.log("Player won! Paper beats Rock!")
        } else if (user === "scissors") {
            console.log("Computer won! Rock beats Scissors")
        }
    } else if (com === "paper") {
        if (user === "rock") {
            console.log("Computer won! Paper beats Rock!")
        } else if (user === "scissors") {
            console.log("Player won! Scissors beat Paper!")
        }
    } else if (com === "scissors") {
        if (user === "rock") {
            console.log("Player won! Rock beats Scissors!")
        } else if (user === "paper") {
            console.log("Computer won! Scissors beat Paper!")
        }
    }

}

// let userInput = prompt("Would you like to play?", 'yes or quit')

// while (userInput !== "quit" || userInput !== "q" ) {

//     let compMove = randomMove()
//     userInput = prompt("What's your move?", "rock, paper,scissors or quit").toLowerCase()
//     rockPaperScissors(compMove, userInput)

// }

// console.log("You've quit the game")
