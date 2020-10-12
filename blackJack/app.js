let blackjackGame = {
    'you': {'yourScore' : '#your-box-result', 'div': '#your-box', 'score':0},
    'dealer': {'dealerScore' : '#dealer-box-result', 'div': '#dealer-box', 'score':0},
    'card' : ['2','3','4','5','6','7','8','9','10', 'K','J','Q','A'],
    'cardsValue' : {'2' :2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10, 'K':10,'J':10,'Q':10,'A':[1,11]},
}

const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];

document.querySelector('#hit').addEventListener('click', hit);
document.querySelector('#deal').addEventListener('click', deal);

const HITSOUND = new Audio('sounds/swish.m4a');

function hit(){
    let card = randomChoice();
    showCards(card,YOU);
    updateScore(card,YOU);
    showScore(YOU);
}

function randomChoice(){
    let random = Math.floor(Math.random() * 13);
    return blackjackGame['card'][random]
}

function showCards(card,activePlayer){
    let cardImage = document.createElement('img');
    cardImage.src = `images/${card}.png`;
    document.querySelector(activePlayer['div']).appendChild(cardImage);
    HITSOUND.play();
}

function deal(){
    let yourImages = document.querySelector('#your-box').querySelectorAll('img');
    let botImages = document.querySelector('#dealer-box').querySelectorAll('img');
    for(i=0; i < yourImages.length; i++){
        yourImages[i].remove();
    }

    for(i=0; i < botImages.length; i++){
        botImages[i].remove();
    }
}

function updateScore(card,activePlayer){
    activePlayer['score'] += blackjackGame['cardsValue'][card]
}

function showScore(activePlayer){
    document.querySelector(activePlayer['yourScore']).textContent = activePlayer['score']
}