function genCat(){
    var images = document.createElement('img');
    var div = document.getElementById('cat-gen');
    images.src = 'https://api.thecatapi.com/api/images/get?format=src&type=gif&size=small';
    div.appendChild(images);
}