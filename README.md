# Rock_Paper_Scissors
Rock paper scissors in JS on a console

## Declare global scope
```
SET choices TO ["rock", "paper", "scissors"]
SET humanScore TO 0
Set computerScore TO 0
```
## getComputerChoice
```
FUNCTION getComputerChoice
    SET randomIndex TO RANDOM number between 0 and LENGTH(choices) - 1
    RETURN choices[randomIndex]
END FUNCTION
```
## getHumanChoice
```
FUNCTION getHumanChoice
	SET choice TO prompt choice
	IF choice not in choices THEN
		prompt again
	ELSE
	RETURN choice
END FUNCTION
```

## playRound
```
FUNCTION playRound(humanChoice, computerChoice)
	IF humanChoice EQUALS computerChoice THEN 
		LOG "It's a tie! Both chose " + humanChoice 
	ELSE IF (humanChoice EQUALS "rock" AND computerChoice EQUALS "scissors") OR  (humanChoice EQUALS "paper" AND computerChoice EQUALS "rock") OR (humanChoice EQUALS "scissors" AND computerChoice EQUALS "paper") THEN 
	INCREMENT humanScore LOG "You win! " + humanChoice + " beats " + computerChoice ELSE INCREMENT computerScore LOG "You lose! " + computerChoice + " beats " + humanChoice 
	END IF 
	RETURN "Current Scores: Human - " + humanScore + ", Computer - " + computerScore
END FUNCTION
```

## playGame
```
FUNCTION playGame
	SET numbersOfRounds TO 5
	FOR i = 0 TO numbersOfRounds
		playRound(getHumanChoice(), getComputerChoice())
	EndFor
END FUNCTION
```