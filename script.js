function getComputerMove(){
    let move = Math.floor(Math.random()*3);
    if (move==0) {
        cpuimage.src = "./images/01.svg"
        return 'Rock';
    }else if (move == 1) {
        cpuimage.src = "./images/02.svg"
        return 'Paper'; 
    }else {
        cpuimage.src = "./images/03.svg"
        return 'Scissors'
    }
}


function playRound(playerMove, computerMove){
    if (playerMove === computerMove){
        return ('Draw');

    }else if (playerMove == 'Rock' && computerMove == 'Scissors'){
        return ('Player');
    }else if (playerMove == 'Scissors' && computerMove =='Paper'){
        return ('Player')
    }else if (playerMove == 'Paper' && computerMove=='Rock'){
        return ('Player')

    }else if (computerMove == 'Rock' && playerMove == 'Scissors'){
        return ('Computer');
    }else if (computerMove == 'Scissors' && playerMove =='Paper'){
        return ('Computer')
    }else if (computerMove == 'Paper' && playerMove=='Rock'){
        return 'Computer'
}
}


 
const buttons = document.querySelectorAll('input');
let pmove
let winner
let pimage = document.querySelector('.playerchoice')
let cpuimage = document.querySelector('.cpuchoice')
let cpuScore = 0
let pScore = 0
const display = document.querySelector('.display-result');
const text = document.createElement('h1');
const score = document.createElement('h4');

score.innerHTML = "SCORE<br/><br/>  Player : 0    Computer : 0    ";
text.textContent = "Let's GO !!"
display.appendChild(text);
display.appendChild(score);

buttons.forEach((button) => {

    button.addEventListener('click', () => {
        if (pScore == 5 || cpuScore == 5){
            text.textContent = "I said bye !! if you wanna play again click the play again BUTTON"
            return
        }else{
            pmove = button.className;
            if (pmove=="Rock"){
                pimage.src = "./images/01.svg"
            }else if(pmove =="Paper"){
                pimage.src = "./images/02.svg"
            }else{
                pimage.src= "./images/03.svg"
            }
            winner = playRound(pmove, getComputerMove());
            (winner == 'Draw') ? text.textContent = "Draw" : (text.textContent = winner + " Wins !!") ;
            if (winner == "Player"){
                pScore++
            }else if(winner == "Computer"){
                cpuScore++
            }
            score.innerHTML = `SCORE<br/> <br/> Player: ${pScore}    Computer : ${cpuScore}    `;
    }
        if (pScore == 5 || cpuScore == 5){
            text.textContent = "The game has ended, piss off !!!!!!!"
    }
    });

});



