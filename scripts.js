const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachin())
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomnumber = Math.floor(Math.random() * 3)

    return choices[randomnumber]
}

const playTheGame = (human, Machine) => {

    if (human === Machine) {
        result.innerHTML = "Deu empate!"

    } else if (
        (human === 'paper' && Machine === 'rock') ||
        (human === 'rock' && Machine === 'scissors') ||
        (human === 'scissors' && Machine === 'paper')
    ) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber

        result.innerHTML = "Você ganhou!"
    } else {
        machineScoreNumber++
        machineScore = machineScoreNumber

        result.innerHTML = "Você perdeu para a alexa!"
    }
}