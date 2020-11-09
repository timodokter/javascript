//de aangeroepde functions
AddIdOnImg()

//de variabelen
var speler1 = "Timo";
var speler2 = "Dylan";
var beurt = " heeft de beurt";
var puntenspeler1 = 0;
var puntenspeler2 = 0;
var aantal = 0;

Boolean; beurtspeler1 = true;
Boolean; zet = true;

//de tekst boven in de top-bar
document.getElementById("tekstbeurt").innerHTML = speler1 + " mag beginnen";
document.getElementById("tekstspeler1").innerHTML = speler1 + " : " + puntenspeler1;
document.getElementById("tekstspeler2").innerHTML = speler2 + " : " + puntenspeler2;

function DoOverlay() {
    overlay = document.getElementsByClassName("overlay")
}

//fotos lader
function FotoLader() {
    var container = document.getElementsByClassName("container");
    var images = ["game1.jpg","game2.jpg","game3.jpg","game4.jpg","game5.jpg","game6.jpg","game7.jpg","game8.jpg","game9.jpg"];
    for (aantal = 0; aantal < 2; aantal++) {
        for (var i = 0; i < 9; i++) {
            var fmg = document.createElement("img");
            fmg.setAttribute("src", "img/" + images[i]);
            fmg.setAttribute("class", "foto");
            fmg.setAttribute("alt", images[i]);
            console.log(i);
            console.log("img/" + images[i]);
            container.appendChild(fmg);
        }
    }
}

function AddIdOnImg() {
    var idnummer = document.getElementsByClassName("foto");
    for (var i = 0; i < 18; i++) {
        idnummer[i].id = "img_" + (i + 1);
        // console.log(idnummer[i])
    }
}

//punten-, beurtsysteem
function BeurtSysteem() {
    if (puntenspeler1 % 5 === 0) {
        beurtspeler1 = false;
        zet = false;
    } else if (puntenspeler2 % 5 === 0) {
        beurtspeler1 = true;
        zet = true;
    }
}

function ZetSysteem() {
    BeurtSysteem()
    if (zet === true) {
        document.getElementById("tekstbeurt").innerHTML = speler1 + beurt;
    } else if (zet === false){
        document.getElementById("tekstbeurt").innerHTML = speler2 + beurt;
    }
}