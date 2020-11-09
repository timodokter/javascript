var winner = null;
var zetten = 0;
var laatsGeklikt = null;
var volgendeZet = true;

var speler1 = "Timo: ";
var speler2 = "Dylan: ";
var puntenSpeler1 = 0;
var puntenSpeler2 = 0;
var spelers = ["Timo", "Dylan"];

var openKaarten = [null, null];
var spelerAanZet = Math.floor(Math.random() * 2)
console.log(spelerAanZet)

//aangeroepte methodes
toonPlayer()

//de overlays
function overlays() {
    let pictureholders = document.getElementsByClassName("picture-holder");
    pictureholders[0].style.backgroundImage = 'url("img/ps-logo.jpg")';
}

//speler aan zet
function toonPlayer() {
    document.getElementById("beurt").innerHTML = spelers[spelerAanZet];
}

//score van speler
function toonScore() {
    document.getElementById("puntenSpeler1").innerHTML = puntenSpeler1;
    document.getElementById("puntenSpeler2").innerHTML = puntenSpeler2;
}