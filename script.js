function getComputerMove(){
    let move = Math.floor(Math.random()*3);
    if (move==0) {
        return 'Rock';
    }else if (move == 1) {
        return 'Paper'; 
    }else {
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


 
const buttons = document.querySelectorAll('button');
let pmove
let winner
let cpuScore = 0
let pScore = 0
const display = document.querySelector('.display-result');
const text = document.createElement('p');
const score = document.createElement('p');

score.textContent = "SCORE     Computer : 0    Player : 0";

display.appendChild(text);
display.appendChild(score);


const res = buttons.forEach((button) => {

    button.addEventListener('click', () => {
        if (pScore == 5 || cpuScore == 5){
            text.textContent = "The game has ended, piss off !!!!!!!"
            return
        }else{
            pmove = button.textContent;
            winner = playRound(pmove, getComputerMove());
            text.textContent = winner + " Wins !!";
            if (winner == "Player"){
                pScore += 1
            }else if(winner == "Computer"){
                cpuScore += 1
            }
            score.textContent = `Score    Computer : ${cpuScore}    Player : ${pScore}`;

    }
    });
});



