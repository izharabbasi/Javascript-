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