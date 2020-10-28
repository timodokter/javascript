//de aangeroepde functions
createGameImages()

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
// document.getElementById("button").addEventListener("click", button)

//foto's
function createGameImages() {
    pictureHolder = document.getElementsByClassName("picture-holder");
        for (i = 1; i < pictureHolder.length; i++) {
            gamePlaatje = document.createElement("img");
            gamePlaatje.src = "img/game" + (i) + ".jpg";
            gamePlaatje.id = (i);
            pictureHolder[i].appendChild(gamePlaatje);
        }
        console.log(pictureHolder.length)
}

//picture holder
function createPicsHolders() {
    var idnummer = 1;
    pics = document.getElementById("pics")
    for (aantal = 0; aantal < 2; aantal++) {
        for(i = 0; i < 8; i++) {
            pictureHolder = document.createElement("div");
            pictureHolder.className = "picture-holder";
            pictureHolder.id = "picture-holder" + idnummer;
            pics.appendChild(pictureHolder);
            idnummer++;
        }
    }
}

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