let allButton = document.getElementsByTagName('button');

let copyAllButton = [];
for(let i = 0; i < allButton.length; i++){
    copyAllButton.push(allButton[i].classList[1])
}
console.log(copyAllButton)
function colorChange(buttonChanger){
    if(buttonChanger.value === 'red'){
        redButton();
    }
    else if(buttonChanger.value === 'green'){
        greenButton();
    }
    else if(buttonChanger.value === 'reset'){
        resetButton();
    }
    else if(buttonChanger.value === 'random'){
        randomButton();
    }
}

function redButton(){
    for(i=0; i < allButton.length; i++){
        allButton[i].classList.remove(allButton[i].classList[1]);
        allButton[i].classList.add('btn-danger');
    }
}

function greenButton(){
    for(i=0; i < allButton.length; i++){
        allButton[i].classList.remove(allButton[i].classList[1]);
        allButton[i].classList.add('btn-success');
    }
}

function resetButton(){
    for(i=0; i < allButton.length; i++){
        allButton[i].classList.remove(allButton[i].classList[1]);
        allButton[i].classList.add(copyAllButton[i]);
    }
}

function randomButton(){
    var choice = ["btn-primary", "btn-danger", "btn-warning", "btn-success"]
    for(i=0; i < allButton.length; i++){
        let random = Math.floor(Math.random() * 4);
        allButton[i].classList.remove(allButton[i].classList[1]);
        allButton[i].classList.add(choice[random]);
    }
}
