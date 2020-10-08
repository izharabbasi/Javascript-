function genCat(){
    var img = document.createElement('img');
    var div = document.getElementById('cat-gen');
    img.src = 'https://api.thecatapi.com/api/images/get?format=src&type=gif&size=small';
    div.appendChild(img);
}