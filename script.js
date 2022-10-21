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
let result
let cpuScore = 0
let pScore = 0
const display = document.querySelector('.display-result');
const text = document.createElement('p');
const score = document.createElement('p');

display.appendChild(text);
display.appendChild(score);

buttons.forEach((button) => {

    button.addEventListener('click', () => {
        pmove = button.textContent;
        result = playRound(pmove, getComputerMove());
        text.textContent = result + "Wins !!!!!";
        if (result === 'Player'){
            pScore = pScore + 1;

        }else if(result ==='Computer'){
            cpuScore = cpuScore +1;
        }
        if (pScore == 5 || cpuScore == 5){
            score.textContent="Da game ended baby"
        }else{
            score.textContent = `Player:${pScore}    Computer:${cpuScore}`
        }

    });
});





