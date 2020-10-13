let blackjackGame = {
    'you': {'yourScore' : '#your-box-result', 'div': '#your-box', 'score':0},
    'dealer': {'dealerScore' : '#dealer-box-result', 'div': '#dealer-box', 'score':0},
    'card' : ['2','3','4','5','6','7','8','9','10', 'K','J','Q','A'],
    'cardsValue' : {'2' :2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10, 'K':10,'J':10,'Q':10,'A':[1,11]},
}

const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];

let hitSound = new Audio('sounds/swish.m4a');

document.querySelector('#hit').addEventListener('click', hit);
document.querySelector('#stand').addEventListener('click',dealerChoice);
document.querySelector('#deal').addEventListener('click',deal);

function hit(){
    let card = randomChoice();
    showCards(card , YOU);
    updateScore(card,YOU);
    showScore(YOU);
}

function randomChoice(){
    let randomNumber = Math.floor(Math.random() * 13);
    return blackjackGame['card'][randomNumber];
}

function showCards(card , activePlayer){
    if (activePlayer['score'] <= 21){
        let cardImage = document.createElement('img');
        cardImage.src = `images/${card}.png`;
        document.querySelector(activePlayer['div']).appendChild(cardImage);
        hitSound.play();
    }
}

function deal(){
    let yourImages = document.querySelector('#your-box').querySelectorAll('img');
    let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');

    for (let i=0; i < yourImages.length; i++){
        yourImages[i].remove();
    }

    for (let i=0; i < dealerImages.length; i++){
        dealerImages[i].remove();
    }

    YOU['score'] = 0;
    DEALER['score'] = 0;

    document.querySelector('#your-box-result').textContent = 0;
    document.querySelector('#your-box-result').style.color = 'blanchedalmond';
}

function updateScore(card, activePlayer){
    if(card == 'A'){
        if(activePlayer['score'] + blackjackGame['cardsValue'][card][1] <= 21){
            activePlayer['score'] += blackjackGame['cardsValue'][card][1];
        } 
        else {
            activePlayer['score'] += blackjackGame['cardsValue'][card][0];
        }
    }
    else {
        activePlayer['score'] += blackjackGame['cardsValue'][card];
    }
}

function showScore(activePlayer){
    if(activePlayer['score'] > 21){
        document.querySelector(activePlayer['yourScore']).textContent = 'BUST!';
        document.querySelector(activePlayer['yourScore']).style.color = 'red';
    }
    else {
        document.querySelector(activePlayer['yourScore']).textContent = activePlayer['score'];
    }
}

function dealerChoice(){
    let card = randomChoice();
    showCards(card , DEALER);
    updateScore(card,DEALER);
    showScore(DEALER);
}