function ageInDays(){
    var ageInDays = prompt('Please Enter Your Birth Year');
    var age = (2020 - ageInDays) * 365;
    var h1 = document.createElement('h1');
    var results = document.createTextNode('Your Age in Days Is ' + age);
    h1.setAttribute('id','age');
    h1.appendChild(results);
    document.getElementById('results').appendChild(h1)
}

function reset(){
    document.getElementById('age').remove();
}

























