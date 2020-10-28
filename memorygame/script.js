//de aangeroepde functions

//de variabelen
var speler1 = "Timo";
var speler2 = "Dylan";
var beurt = " heeft de beurt";
var puntenspeler1 = 0;
var puntenspeler2 = 0;
var pics;
var aantal = 0;
var i = 1

Boolean; beurtspeler1 = true;
Boolean; zet = true;

//de tekst boven in de top-bar
document.getElementById("tekstbeurt").innerHTML = speler1 + " mag beginnen";
document.getElementById("tekstspeler1").innerHTML = speler1 + " : " + puntenspeler1;
document.getElementById("tekstspeler2").innerHTML = speler2 + " : " + puntenspeler2;

function dooverlay() {
    overlay = document.getElementsByClassName("overlay")
}

//punten-, beurtsysteem
function beurtsysteem() {
    if (puntenspeler1 % 5 === 0) {
        beurtspeler1 = false;
        zet = false;
    } else if (puntenspeler2 % 5 === 0) {
        beurtspeler1 = true;
        zet = true;
    }
}

function zetsysteem() {
    beurtsysteem()
    if (zet === true) {
        document.getElementById("tekstbeurt").innerHTML = speler1 + beurt;
    } else if (zet === false){
        document.getElementById("tekstbeurt").innerHTML = speler2 + beurt;
    }
}