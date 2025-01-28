function getComputerChoice()
{
    let value= Math.floor(Math.random()*3)
    if(value==0)
    {
        console.log("The computer chose Rock")
        return "rock";
    }
    else if(value==1)
    {
        console.log("The computer chose Paper")
        return "paper";
    }
    else if(value==2){
        console.log("The computer chose Scissor")
        return "scissor";
    }
}


//human choice//

function getHumanChoice(){
    let userInput= prompt("Enter Rock Paper or Scissor");
    userInput= userInput.toLowerCase();
    return userInput;
}

//Scores//


function playGame(){
    let humanScore=0
    let computerScore=0
        function playRound(humanChoice,computerChoice){
            if(humanChoice== "rock" && computerChoice== "paper"){
                console.log("You lose :( paper wrapped the rock")
                computerScore++
            }
            else if(humanChoice== "rock" && computerChoice== "rock"){
                console.log("Its a tie!")
            }

            else if(humanChoice== "rock" && computerChoice== "scissor"){
                console.log("You win! Rock smashed the scissor")
                humanScore++
            }
            else if(humanChoice== "paper" && computerChoice== "paper"){
                console.log("Its a tie!")
            }
            else if(humanChoice== "paper" && computerChoice== "rock"){
                console.log("You win! paper wrapped the rock")
                humanScore++
            }
            else if(humanChoice== "paper" && computerChoice== "scissor"){
                console.log("You lose :( scissor cuts the paper")
                computerScore++
            }
            else if(humanChoice== "scissor" && computerChoice== "paper"){
                console.log("You win! scissor cuts the paper")
                humanScore++
            }
            else if(humanChoice== "scissor" && computerChoice== "rock"){
                console.log("You lose :( rock smashed the scissor")
                computerScore++
            }
            else if(humanChoice== "scissor" && computerChoice== "scissor"){
                console.log("Its a tie!")
        }


}
playRound(getHumanChoice(),getComputerChoice())
playRound(getHumanChoice(),getComputerChoice())
playRound(getHumanChoice(),getComputerChoice())
playRound(getHumanChoice(),getComputerChoice())
playRound(getHumanChoice(),getComputerChoice())


}
playGame()


