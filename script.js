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

// function getHumanChoice(){
//     let userInput= prompt("Enter Rock Paper or Scissor");
//     userInput= userInput.toLowerCase();
//     return userInput;
// }

//Scores//



    let humanScore=0
    let computerScore=0
        function playRound(humanChoice,computerChoice){
            if(humanChoice== "rock" && computerChoice== "paper"){
                console.log("You lose Paper beats rock")
                computerScore++
                cScore.textContent= computerScore
                result.textContent="You lose, Paper beats rock"

            }
            else if(humanChoice== "rock" && computerChoice== "rock"){
                console.log("Its a tie!")
                result.textContent="Its a tie!"
            }

            else if(humanChoice== "rock" && computerChoice== "scissor"){
                console.log("You win! Rock beats scissor")
                humanScore++
                hScore.textContent= humanScore
                result.textContent="You win! Rock beats scissor"

            }
            else if(humanChoice== "paper" && computerChoice== "paper"){
                console.log("Its a tie!")
                result.textContent="Its a tie!"
            }
            else if(humanChoice== "paper" && computerChoice== "rock"){
                console.log("You win! Paper beats rock")
                humanScore++
                hScore.textContent= humanScore
                result.textContent="You win! Paper beats rock"
            }
            else if(humanChoice== "paper" && computerChoice== "scissor"){
                console.log("You lose, Scissor beats paper")
                computerScore++
                cScore.textContent= computerScore
                result.textContent="You lose, Scissor beats paper"

            }
            else if(humanChoice== "scissor" && computerChoice== "paper"){
                console.log("You win! Scissor beats paper")
                humanScore++
                hScore.textContent= humanScore
                result.textContent="You win. Scissor beats paper"

            }
            else if(humanChoice== "scissor" && computerChoice== "rock"){
                console.log("You lose, Rock beats scissor")
                computerScore++
                cScore.textContent= computerScore
                result.textContent="You lose, Rock beats scissor"

            }
            else if(humanChoice== "scissor" && computerChoice== "scissor"){
                console.log("Its a tie!")
                result.textContent="Its a tie!"
            }
            if(humanScore ==5 || computerScore==5){
                rButton.disabled= true  
                pButton.disabled= true  
                sButton.disabled= true 
                
                if(humanScore > computerScore)
                    result.textContent="You won!"
                else if(humanScore < computerScore)
                    result.textContent="You lost!"


                
           }
           
           


parent.appendChild(result)
}

const rButton = document.getElementById("rock")
const pButton = document.getElementById("paper")
const sButton = document.getElementById("scissor")

rButton.addEventListener("click", () =>{
    playRound("rock",getComputerChoice())   
    
})
pButton.addEventListener("click", () =>{
    playRound("paper",getComputerChoice())
})
sButton.addEventListener("click", () =>{
    playRound("scissor",getComputerChoice())
}) 

const hScore = document.getElementById("hScore")
const cScore = document.getElementById("cScore")
const parent = document.getElementById("parent")

const result = document.createElement("div")
result.classList.add("result")










