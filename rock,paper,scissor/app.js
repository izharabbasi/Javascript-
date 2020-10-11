function rpsGame(yourChoice){
    console.log(yourChoice);
    var humanChoice , botChoice;
    humanChoice = yourChoice.id;
    botChoice = randomChoice(randomNumber());
    console.log('Computer Choice' , botChoice)

    results = deccideWinner(humanChoice,botChoice);
    console.log(results);

    message = finalMessage(results);
    console.log(message)
    rpsFrontEnd(humanChoice,botChoice,message);
}

function randomNumber(){
    return Math.floor(Math.random() * 3);
}

function randomChoice(number){
    return ['rock','paper','scissor'][number]
}

function deccideWinner(yourChoice,computerChoice){
    let rpsDatabase = {
        'rock':{'scissor': 1, 'rock': 0.5, 'paper': 0},
        'paper':{'rock': 1, 'paper': 0.5, 'scissor': 0},
        'scissor':{'paper': 1, 'scissor': 0.5, 'rock': 0},
    };

    let yourScore = rpsDatabase[yourChoice][computerChoice]
    let botScore = rpsDatabase[computerChoice][yourChoice]

    return [yourScore, botScore]
}

function finalMessage([yourScore, botScore]){
    if (yourScore === 0){
        return {'message' : 'You Lost!', 'color' : 'red'}
    }
    else if (yourScore === 0.5){
        return {'message' : 'You tied!', 'color' : 'yellow'}
    }
    else{
        return {'message' : 'You Won!', 'color' : 'green'}
    }
}

function rpsFrontEnd(yourImgChoice, botImgChoice, finalMessage){
    let imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src,
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imageDatabase[yourImgChoice] +"' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1)'>";
    messageDiv.innerHTML = "<h1 style='color:" + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>";
    botDiv.innerHTML = "<img src='" + imageDatabase[botImgChoice] +"' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243,38,24,1)'>";

    document.getElementById('flex-box-div').appendChild(humanDiv);
    document.getElementById('flex-box-div').appendChild(messageDiv);
    document.getElementById('flex-box-div').appendChild(botDiv);
}
