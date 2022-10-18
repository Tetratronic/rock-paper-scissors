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
        console.log('Its a DRAW !!!');

    }else if (playerMove == 'Rock' && computerMove == 'Scissors'){
        console.log('Player Wins !!!!!');
    }else if (playerMove == 'Scissors' && computerMove =='Paper'){
        console.log('Player Win !')
    }else if (playerMove == 'Paper' && computerMove=='Rock'){
        console.log('Player Wins !!!!!!!')

    }else if (computerMove == 'Rock' && playerMove == 'Scissors'){
        console.log('Computer Wins !!!!!');
    }else if (computerMove == 'Scissors' && playerMove =='Paper'){
        console.log('Computer Win !')
    }else if (computerMove == 'Paper' && playerMove=='Rock'){
        console.log('Computer Wins !!!!!!!')
}
}
function game(){
    for (let i = 0; i<5; i++){
        let playerMove = prompt("Rock, Paper, Scissors ?");
        let computerMove = getComputerMove();

        console.log("Player: ",playerMove, "Computer: ", computerMove);

        playRound(playerMove , computerMove);
}
}