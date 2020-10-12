function rpsGame(yourChoice){
    console.log(yourChoice);
    let humanChoice, botChoice;
    humanChoice = yourChoice.id;
    console.log(humanChoice);

    botChoice = randomChoice(randomNumber());
    console.log('Computer Choice', botChoice);

    results = decideWinner(humanChoice, botChoice);
    console.log(results);

    message = finalMessage(results);
    console.log(message);

    rpsFrontEnd(humanChoice, botChoice, message)
}

function randomNumber(){
    return Math.floor(Math.random() * 3)
}

function randomChoice(number){
    return ['rock','paper','scissor'][number]
}

function decideWinner(yourChoice, compterChoice){
    let rpsDatabase = {
        'rock':{'scissor': 1, 'rock': 0.5, 'paper': 0},
        'paper':{'rock': 1, 'paper': 0.5, 'scissor': 0},
        'scissor':{'paper': 1, 'scissor': 0.5, 'rock': 0},
    };

    let yourScore = rpsDatabase[yourChoice][compterChoice];
    let computerScore = rpsDatabase[compterChoice][yourChoice];
    
    return [yourScore,computerScore]
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

function rpsFrontEnd(humanImgChoice, computerImgChoice, finalMessage){
    let imageDatabase = {
        'rock' : document.getElementById('rock').src,
        'paper' : document.getElementById('paper').src,
        'scissor' : document.getElementById('scissor').src,
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    let humanDiv = document.createElement('div');
    let messageDiv = document.createElement('div');
    let botDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imageDatabase[humanImgChoice] +"' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1)'>";
    messageDiv.innerHTML = "<h1 style='color:" + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>";
    botDiv.innerHTML = "<img src='" + imageDatabase[computerImgChoice] +"' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243,38,24,1)'>";

    document.getElementById('flex-box-div').appendChild(humanDiv);
    document.getElementById('flex-box-div').appendChild(messageDiv);
    document.getElementById('flex-box-div').appendChild(botDiv);
}

