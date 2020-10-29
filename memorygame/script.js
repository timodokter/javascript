//de aangeroepde functions


//de variabelen
var speler1 = "Timo";
var speler2 = "Dylan";
var beurt = " heeft de beurt";
var puntenspeler1 = 0;
var puntenspeler2 = 0;
var aantal = 0;
var tester = 0;

Boolean; beurtspeler1 = true;
Boolean; zet = true;

//de tekst boven in de top-bar
document.getElementById("tekstbeurt").innerHTML = speler1 + " mag beginnen";
document.getElementById("tekstspeler1").innerHTML = speler1 + " : " + puntenspeler1;
document.getElementById("tekstspeler2").innerHTML = speler2 + " : " + puntenspeler2;

function dooverlay() {
    overlay = document.getElementsByClassName("overlay")
}

//picture-holder lader
function pictureholderlader() {
    pictureHolder = document.createElement("div")
    pictureHolder.className = "picture-holder"
}

//fotos lader
function fotolader() {
    var container = document.getElementById("container");
    var images = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg"];
    for (aantal = 0; aantal < 2; aantal++) {
        for (var i = 0; i < 9; i++) {
            // tester + 1;
            // console.log(tester)
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