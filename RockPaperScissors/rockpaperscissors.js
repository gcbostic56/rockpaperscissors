export const hands = ['rock' , 'paper', 'scissors'];

export function gitHand() {
    const randomNumber = parseInt(Math.random()*10)%3
    return hands[randomNumber]
}



// export const choiceButtons = document.querySelectorAll('[data-selection]')

// choiceButtons.forEach(choiceButton => {
//     choiceButton.addEventListener('click', e => {
//         const resultsName = choiceButton.dataset.selection
//         makeChoice(resultsName)
//     })
//     })

// function makeChoice(selection) {
//     const computerSelection = gitHand()
//     console.log(computerSelection)
//     console.log(selection)
// }

const Player1 = {
    name: 'User'
}
const Computer = {
    name: 'Computer'
}

export function playRound(Player1, Computer) {
    let hand1 = gitHand()
    // let hand1 = makeChoice()
    let hand2 = gitHand()
    
    if ((hand1 === 'rock' && hand2 === 'scissors')||(hand1 === 'paper' && hand2 === 'rock')||(hand1 === 'scissors' && hand2 === 'paper')) {
        console.log(hand1+ ' beats '+hand2+' User Wins!')
        // document.getElementsByClassName("results").innerHTML = hand1+ ' beats '+hand2+' User Wins!'
        return Player1;
        
    }
    else if ((hand2 === 'rock' && hand1 === 'scissors')||(hand2 === 'paper' && hand1 === 'rock')||(hand2 === 'scissors' && hand1 === 'paper')) {
        console.log(hand2+ ' beats '+hand1+' Player 2 Wins!')
        // document.getElementsByClassName("results").innerHTML = (hand2+ ' beats '+hand1+' Player 2 Wins!')
        return Computer;
        
        
    }
    else {
        console.log('Ah Shucks... It is a tie')
        // document.getElementsByClassName("results").innerHTML = ('Ah Shucks... It is a tie')
        return null;
    }  
}
// let P1Wins = 0;
// let P2Wins = 0;

// // function playGame(Player1, Computer, playUntil = 5) {
// //     let game = playRound(Player1, Computer) 
// //     if (game === Player1) {
// //         P1Wins += 1;
// //         console.log('Player 1 Scores: '+P1Wins)
// //         console.log('Player 2: '+P2Wins)
// //     }
// //     else if (game === Computer) {
// //         P2Wins += 1;
// //         console.log('Player 1: '+P1Wins)
// //         console.log('Player 2 Scores: '+P2Wins)
// //     }
// //     if (P1Wins === playUntil || P2Wins === playUntil) {
// //         console.log('Good game! Better luck next time!')
// //         return [game]
// //     }
    
// //     return playGame(Player1, Computer)
// // }



// // playGame(Player1,Computer)

