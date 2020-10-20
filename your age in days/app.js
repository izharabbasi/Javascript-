document.querySelector('#click').addEventListener('click', ageInDays);
document.querySelector('#reset').addEventListener('click', reset);

function ageInDays(){
    let yourAge = prompt('Please Enter Your Age');
    age = (2020 - yourAge) * 365;
    let h1 = document.createElement('h1');
    let results = document.createTextNode('Your Age in Days is ' + age);
    h1.setAttribute('id', 'age');
    h1.appendChild(results)
    document.querySelector('#result').appendChild(h1)
}

function reset(){
    document.querySelector('#age').remove();
}

//Challenge 2 CAT GENERATOR

document.querySelector('#cat').addEventListener('click', generateCat);

function generateCat(){
    let catImage = document.createElement('img');
    catImage.src = 'https://api.thecatapi.com/api/images/get?format=src&type=gif&size=small';
    document.querySelector('#add-cat').appendChild(catImage);

}

// Challenge ROCK PAPER SCISSOR

function rpsGame(yourChoice){
    let humanChoice , botChoice;
    humanChoice = yourChoice.id;
    botChoice = randomChoice(randomNumber());
    
    results = decideWinner(humanChoice,botChoice);
    message = finalMessage(results);

    rpsFrontEnd(humanChoice, botChoice, message);
}

function randomNumber(){
    return Math.floor(Math.random() * 3);
}

function randomChoice(number){
    return ['rock', 'paper' , 'scissor'][number]
}

function decideWinner(humanChoice , botChoice){
    let rpsDatabase = {
        'rock':{'scissor': 1, 'rock': 0.5, 'paper': 0},
        'paper':{'rock': 1, 'paper': 0.5, 'scissor': 0},
        'scissor':{'paper': 1, 'scissor': 0.5, 'rock': 0},
    };

    let yourScore = rpsDatabase[humanChoice][botChoice];
    let botScore = rpsDatabase[botChoice][humanChoice];

    return [yourScore , botScore]
}

function finalMessage([yourScore]){
    if(yourScore === 0){
        return {'message':'You Lost!', 'color' : 'red'}
    }
    else if(yourScore === 0.5){
        return {'message':'You tied!', 'color' : 'yellow'}
    }
    else{
        return {'message':'You won!', 'color' : 'green'}
    }
}

function rpsFrontEnd(humanImgChoice,computerImgChoice, finalMessage){
    let imageDatabase = {
        'rock' : document.querySelector('#rock').src,
        'paper' : document.querySelector('#paper').src,
        'scissor' : document.querySelector('#scissor').src,
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    humanDiv = document.createElement('div');
    messageDiv = document.createElement('div');
    botDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imageDatabase[humanImgChoice] +"' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1)'>";
    messageDiv.innerHTML = "<h1 style='color:" + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>";
    botDiv.innerHTML = "<img src='" + imageDatabase[computerImgChoice] +"' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243,38,24,1)'>";

    document.querySelector('#flex-box-3').appendChild(humanDiv);
    document.querySelector('#flex-box-3').appendChild(messageDiv);
    document.querySelector('#flex-box-3').appendChild(botDiv);
}

// Challenge 3 BUTTON COLOR CHANGER

allButtons = document.getElementsByTagName('button');

copyAllButtons = []

for (i=0; i < allButtons.length; i++){
    copyAllButtons.push(allButtons[i].classList[1]);
}

function colorChanger(buttonThingy){
    if(buttonThingy.value === 'red'){
        buttonRed();
    }
    else if(buttonThingy.value === 'green'){
        buttonGreen();
    }
    else if(buttonThingy.value === 'reset'){
        reset();
    }
    else if(buttonThingy.value === 'random'){
        random();
    }
}

function buttonRed(){
    for(i=0; i< allButtons.length;i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-danger');
    }
}

function buttonGreen(){
    for(i=0; i< allButtons.length;i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-success');
    }
}

function reset(){
    for(i=0; i< allButtons.length;i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(copyAllButtons[i]);
    }
}

function random(){
    let choice = ["btn-primary", "btn-danger", "btn-success" , "btn-warning"];
    for(i=0; i < allButtons.length; i++){
        let random = Math.floor(Math.random() * 4);
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(choice[random]);
    }
}


