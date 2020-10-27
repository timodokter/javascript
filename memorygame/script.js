//de aangeroepde functions

//de variabelen
var speler1 = "Timo";
var speler2 = "Dylan";
var beurt = " heeft de beurt";
var puntenspeler1 = 0;
var puntenspeler2 = 0;
Boolean; beurtspeler1 = true;
Boolean; zet = true;

//de tekst boven in de top-bar
document.getElementById("tekstbeurt").innerHTML = speler1 + " mag beginnen";
document.getElementById("tekstspeler1").innerHTML = speler1 + " : " + puntenspeler1;
document.getElementById("tekstspeler2").innerHTML = speler2 + " : " + puntenspeler2;
document.getElementById("button").addEventListener("click", button)

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

//button function
function button() {
    if (beurtspeler1 == true) {
        puntenspeler1 += 1;
        document.getElementById("tekstspeler1").innerHTML = speler1 + " : " + puntenspeler1;
    } else {
        puntenspeler2 += 1;
        document.getElementById("tekstspeler2").innerHTML = speler2 + " : " + puntenspeler2;
    }
    zetsysteem()
    beurtsysteem()
}