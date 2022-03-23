const hands = ['rock' , 'paper', 'scissors'];

function gitHand() {
    return parseInt(Math.random()*10)%3
}

const Player1 = {
    name: 'Steve', gitHandMethod: gitHand
}

const Player2 = {
    name: 'Frank', gitHandMethod: gitHand
}

const Player3 = {
    name: 'Greg', gitHandMethod: gitHand
}

const Player4 = {
    name: 'Beep', gitHandMethod: gitHand
}

function playRound(Player1, Player2) {
    let hand1 = hands[Player1.gitHandMethod()]
    let hand2 = hands[Player2.gitHandMethod()]
    
    if ((hand1 === 'rock' && hand2 === 'scissors')||(hand1 === 'paper' && hand2 === 'rock')||(hand1 === 'scissors' && hand2 === 'paper')) {
        console.log(hand1+ ' beats '+hand2+' Player 1 Wins!')
        return Player1;
    }
    else if ((hand2 === 'rock' && hand1 === 'scissors')||(hand2 === 'paper' && hand1 === 'rock')||(hand2 === 'scissors' && hand1 === 'paper')) {
        console.log(hand2+ ' beats '+hand1+' Player 2 Wins!')
        return Player2;
    }
    else {
        console.log('Ah Shucks... It is a tie')
        return null;
    }
}
let P1Wins = 0;
let P2Wins = 0;

function playGame(Player1, Player2, playUntil = 5) {
    let game = playRound(Player1, Player2) 
    if (game === Player1) {
        P1Wins += 1;
        console.log('Player 1 Scores: '+P1Wins)
        console.log('Player 2: '+P2Wins)
    }
    else if (game === Player2) {
        P2Wins += 1;
        console.log('Player 1: '+P1Wins)
        console.log('Player 2 Scores: '+P2Wins)
    }
    if (P1Wins === playUntil || P2Wins === playUntil) {
        return [game]
    }
    return playGame(Player1, Player2)
}



console.log(playGame(Player1,Player2))

// function playTournament(Player1, Player2, Player3, Player4, playUntil = 5) {
//     let winner1 = playGame(Player1, Player2);
//     console.log('DING DING DING AYE YO YOU WON ' +winner1.name+ ' you go my good sir')
//     let winner2 = playGame(Player3, Player4)
//     console.log('DING DDING DING AYE YO YOU WON ' +winner2.name+ ' you go my good sir')
//     let mainwinner = playGame(winner1,winner2)
//     console.log('Congrats ' +mainwinner.name+ ' You done did the thing yoh')
// }

// console.log(playTournament(Player1, Player2, Player3, Player4))