let blackjackGame = {
    'you': {'spanScore' : '#your-box-result', 'div': '#your-box', 'score':0},
    'dealer': {'spanScore' : '#dealer-box-result', 'div': '#dealer-box', 'score':0},
    'card' : ['2','3','4','5','6','7','8','9','10', 'K','J','Q','A'],
    'cardsValue' : {'2' :2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10, 'K':10,'J':10,'Q':10,'A':[1,11]},
    'wins' : 0,
    'losses' : 0,
    'draws' : 0,
    'isStand' : false,
    'isTurnOver' : false,
}

const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];

const hitSound = new Audio('sounds/swish.m4a');
const winSound = new Audio('sounds/cash.mp3');
const loseSound = new Audio('sounds/aww.mp3');

document.querySelector('#hit').addEventListener('click', hit);
document.querySelector('#stand').addEventListener('click', stand);
document.querySelector('#deal').addEventListener('click', deal);


function hit(){
    if(blackjackGame['isStand'] === false){
        let card = randomCards();
        showCards(card, YOU);
        updateScore(card, YOU);
        showScore(YOU);
    }
}

function randomCards(){
    let randomNumber = Math.floor(Math.random() *13 );
    return blackjackGame['card'][randomNumber]
}

function showCards(card, activePlayer){
    if(activePlayer['score'] <= 21){
        let imageCards = document.createElement('img');
        imageCards.src = `images/${card}.png`;
        document.querySelector(activePlayer['div']).appendChild(imageCards);
        hitSound.play();
    }
}

function deal(){
    if(blackjackGame['isTurnOver'] === true){

        blackjackGame['isStand'] =false;
        let yourBox = document.querySelector('#your-box').querySelectorAll('img');    
        let dealerBox = document.querySelector('#dealer-box').querySelectorAll('img');
        
        for(let i=0; i < yourBox.length; i++){
            yourBox[i].remove();
        }
    
        for(let i=0; i < dealerBox.length; i++){
            dealerBox[i].remove();
        }

        YOU['score'] = 0;
        DEALER['score'] = 0;
    
        document.querySelector('#your-box-result').textContent = 0;
        document.querySelector('#your-box-result').style.color = 'blanchedalmond';
    
        document.querySelector('#dealer-box-result').textContent = 0;
        document.querySelector('#dealer-box-result').style.color = 'blanchedalmond';

        document.querySelector('#black-jack-result').textContent = "Let's Play";
        document.querySelector('#black-jack-result').style.color = 'black';
        blackjackGame['isTurnOver'] = true
    }
    }

function updateScore(card, activePlayer){
    if(card === 'A'){
        if(activePlayer['score'] + blackjackGame['cardsValue'][card] <= 21){
            activePlayer['score'] += blackjackGame['cardsValue'][card][1]
        }
        else{
            activePlayer['score'] += blackjackGame['cardsValue'][card][0]
        }
    }
    else{
        activePlayer['score'] += blackjackGame['cardsValue'][card];
    }
}

function showScore(activePlayer){
    if(activePlayer['score'] >21){
        document.querySelector(activePlayer['spanScore']).textContent = 'BUST!';
        document.querySelector(activePlayer['spanScore']).style.color = 'red';
    }
    else{
        document.querySelector(activePlayer['spanScore']).textContent = activePlayer['score'];
    }
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function stand(){
    blackjackGame['isStand'] = true;

    while(DEALER['score'] < 16 && blackjackGame['isStand'] === true){
        let card = randomCards();
        showCards(card, DEALER);
        updateScore(card, DEALER);
        showScore(DEALER);
        await sleep(1000);
    }

    blackjackGame['isTurnOver'] = true
    results(decideWinner());
    
}

function decideWinner(){
    let winner;
    if(YOU['score'] <=21){
        if(YOU['score'] > DEALER['score'] || DEALER['score'] >21){
            blackjackGame['wins']++;
            winner = YOU;
        }
        else if(YOU['score'] < DEALER['score']){
            blackjackGame['losses']++;
            winner = DEALER;
        }
        else if(YOU['score'] === DEALER['score']){
            blackjackGame['draws']++;
        }
    }
    else if(YOU['score'] > 21 && DEALER['score'] <=21){
        blackjackGame['losses']++;
        winner = DEALER;
    }
    else if(YOU['score'] >21 && DEALER['score'] >21){
        blackjackGame['draws']++;
    }
    return winner;
}

function results(winner){
    let message, messageColor;

    if(blackjackGame['isTurnOver'] === true){
        if(winner === YOU){
            document.querySelector('#wins').textContent = blackjackGame['wins'];
            message = 'You Won!';
            messageColor = 'green';
            winSound.play();
        }

        else if(winner === DEALER){
            document.querySelector('#losses').textContent = blackjackGame['losses'];
            message = 'You LOST!';
            messageColor = 'red';
            loseSound.play();
        }
        else{
            document.querySelector('#draws').textContent = blackjackGame['draws'];
            message = 'You Drew!!';
            messageColor = 'yellow';
        }

        document.querySelector('#black-jack-result').textContent = message;
        document.querySelector('#black-jack-result').style.color = messageColor;
    }

}