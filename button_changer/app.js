var allButtons = document.getElementsByTagName('button');

var copyAllButtons = [];
for(let i=0; i < allButtons.length; i++){
    copyAllButtons.push(allButtons[i].classList[1]);
}
console.log(copyAllButtons)
function buttonColorChange(buttonThingy){
    if(buttonThingy.value === 'red'){
        buttonRed();
    }
    else if(buttonThingy.value === 'green'){
        buttonGreen();
    }
    else if(buttonThingy.value === 'reset'){
        buttonReset();
    }
    else if(buttonThingy.value === 'random'){
        buttonRandom();
    }
}

function buttonRed(){
    for(let i = 0; i < allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-danger')
    }
}

function buttonGreen(){
    for(let i = 0; i < allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-success')
    }
}

function buttonReset(){
    for(let i = 0; i < allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(copyAllButtons[i])
    }
}

function buttonRandom(){
    var choice = ["btn-primary", "btn-danger", "btn-warning", "btn-success"]
    for(let i = 0; i < allButtons.length; i++){
        var random = Math.floor(Math.random() * 4)
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(choice[random])
    }
}


