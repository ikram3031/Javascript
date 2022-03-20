let blackjackGame = {
    'you': {'scoreSpan': '#your-blackjack-result', 'div': '#your-box', },
    'dealer': {'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0},
    'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'J', 'Q', 'A'],
    //assigning values of cards
    'cardsMap':{ '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'K': 10, 'J': 10, 'Q': 10, 'A': [1,11]},
}

const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];

//sound
const hitSound = new Audio('sounds/swish.m4a');

//hit button
document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);

document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);

//hit button function
function blackjackHit(){
    let card = randomCard();
    console.log(card);
    console.log(YOU['score']);
    showCard(card, YOU);
    showScore(YOU);
    updateScore(card, YOU);
    //console.log(YOU['score']);
}

//random cards
function randomCard() {
    let randomIndex = Math.floor(Math.random() * 13);
    return blackjackGame['cards'][randomIndex];
}

//card appearning function
function showCard(card, activePlayer){
    let cardImage = document.createElement('img');
    cardImage.src = `images/${card}.jpg`;
    document.querySelector(activePlayer['div']).appendChild(cardImage);
    hitSound.play();
}

//deal button
function blackjackDeal(){
    let yourImages = document.querySelector('#your-box').querySelectorAll('img');
    let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');
    
    for(i=0; i < yourImages.length; i++) {
        yourImages[i].remove();
    }
    for(i=0; i < dealerImages.length; i++) {
        dealerImages[i].remove();
    }
    
}

//update score
function updateScore(card, activePlayer){
    activePlayer['score'] += blackjackGame['cardsMap'][card];
   
}

//show score
function showScore(activePlayer){
    console.log(activePlayer['score']);
    document.querySelector(activePlayer['scoreSpan']).innerHTML = activePlayer['score'];
    
}
