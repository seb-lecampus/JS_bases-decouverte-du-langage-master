// you can write js here
console.log('exo-3');

const choices = ['rock', 'paper', 'scissors', 'bomb']

function getPlayerChoice(playerInput){
	playerInput.toLowerCase()

	//if(playerInput == 'rock' || playerInput == 'paper' || playerInput == 'scissors')
	if(choices.includes(playerInput))
		return playerInput;
	else
		console.log("BAD INPUT")
}

function getComputerChoice(){
	let rand = Math.floor(Math.random() * 2)
	return choices[rand];
}

function findWinner(playerChoice, computerChoice){
	if(playerChoice == 'bomb')
		return "Won"
	
	if(playerChoice == computerChoice){
		return "Tied"
	} else {
		if(playerChoice == 'rock'){
			if(computerChoice == 'scissors')
				return "Won"
			else
				return "Lost"
		} else if (playerChoice == 'paper'){
			if(computerChoice == 'rock')
				return "Won"
			else
				return "Lost"
		} else if (playerChoice == 'scissors'){
			if(computerChoice == 'rock')
				return "Lost"
			else
				return "Won"
		}
	}
}

function playGame(uChoice, computerChoice){
	console.log({uChoice, computerChoice})
	console.log(findWinner(uChoice, computerChoice))
}

let playerInput = prompt("Your choice ( rock, paper, scissors) ?")
	playerInput = getPlayerChoice(playerInput)

playGame(playerInput, getComputerChoice())