let allButtons = document.getElementsByTagName('button');

let copyAllButtons = []
for (let i= 0; i < allButtons.length; i++){
    copyAllButtons.push(allButtons[i].classList[1])
}


function colorChange(colorChanger){
    if(colorChanger.value === 'red'){
        redButton();
    }
    if(colorChanger.value === 'green'){
        greenButton();
    }
    if(colorChanger.value === 'reset'){
        resetButton();
    }
    if(colorChanger.value === 'random'){
        randomButton();
    }
}

function redButton(){
    for(i=0; i < allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-danger');
    }
}

function greenButton(){
    for(i=0; i < allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-success');
    }
}

function resetButton(){
    for(i=0; i < allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(copyAllButtons[i]);
    }
}

function randomButton(){
    let choice = ["btn-primary", "btn-danger", "btn-warning", "btn-success"]
    for(i=0; i < allButtons.length; i++){
        let random = Math.floor(Math.random() * 4)
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(choice[random]);
    }
}