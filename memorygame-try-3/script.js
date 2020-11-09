var winner = null;
var zetten = 0;
var laatsGeklikt = null;
var volgendeZet = true;

var speler1 = "Timo: ";
var speler2 = "Dylan: ";
var puntenSpeler1 = 0;
var puntenSpeler2 = 0;
var spelers = ["Timo", "Dylan"];
var winnerspeler1 = "Timo";
var winnerspeler2 = "Dylan";

var openKaarten = [null, null];
var spelerAanZet = Math.floor(Math.random() * 2)

//aangeroepte methodes
toonPlayer();
toonScore();

//gekozen kaart
function opdrachtGeklikteKaart() {
    if (this.id !== laatsGeklikt && volgendeZet) {
        zetten++;
        laatsGeklikt = this.id;
        draaiKaart(this.id);
        if (zetten === 2) {
            zoekVoorOvereenkomst();
            resetSpelEnVariabelen();
        }
    }
}

// Methode voor overlay weghalen
var reageerOpKlik = function () {
    var alleOverlays = document.getElementsByClassName("overlay");
    for (var i = 0; i < alleOverlays.length ; i++) {
        if (plaatjesArray[i] != null) {
            alleOverlays[i].style.background = 'url(\"img/ps-logo.jpg"\")';
        }
    }
    button.style.display = 'none';
    zetten = 0;
    laatstGekilkt = null;
    volgendeZet = true;
    veranderSpeler();
    toonPlayer();
};

//plaatjes tonen
    var plaatjesArray = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9];
    randomize(plaatjesArray)
    for (var i = 1; i <= 18; i++) {
        var blok = document.createElement("div");
        blok.className = "overlay"
        blok.id = i;
        blok.addEventListener('click', opdrachtGeklikteKaart);
        blok.style.background = 'url("img/ps-logo.jpg")';
        document.getElementById("container").appendChild(blok);
    }

//overlay weghalen en plaatje laten zien
function draaiKaart(id) {
    var blok = document.getElementById(id);
    blok.style.background = 'url("img/game' + plaatjesArray[id - 1] + '.jpg")';
    if (zetten === 1) {
        openKaarten[0] = plaatjesArray[id - 1];
    } else {
        openKaarten[1] = plaatjesArray[id - 1];
    }
}

// Randomize de kaartjes
function randomize(plaatjesArray) {
    for (var i = 0; i < plaatjesArray.length ; i++) {
        var random = Math.floor(Math.random() * plaatjesArray.length);
        var template = plaatjesArray[i];
        plaatjesArray[i] = plaatjesArray[random];
        plaatjesArray[random] = template;
    }
}

// Reset het spel en variabelen
function resetSpelEnVariabelen() {
    volgendeZet = false;
    var button = document.getElementById("button");
    if (puntenSpeler1 + puntenSpeler2 < 9) {
        button.style.display = "block";
    } else {
        wieWint();
    }
    button.addEventListener('click', reageerOpKlik);
    openKaarten = [null, null];
}

//speler aan zet
function toonPlayer() {
    document.getElementById("beurt").innerHTML = spelers[spelerAanZet];
}

//score van speler
function toonScore() {
    document.getElementById("speler1").innerHTML = speler1;
    document.getElementById("puntenSpeler1").innerHTML = puntenSpeler1;
    document.getElementById("speler2").innerHTML = speler2;
    document.getElementById("puntenSpeler2").innerHTML = puntenSpeler2;
}

// Controleer of het overeenkomt
function zoekVoorOvereenkomst() {
    if (openKaarten[0] === openKaarten[1]) {
        var winnendeGame = openKaarten[0];
        console.log("Match ID" + winnendeGame);
        if (spelerAanZet === 0) {
            puntenSpeler1++;
        } else {
            puntenSpeler2++;
        }
        veranderSpeler();
        toonScore();

        var alleOverlays = document.getElementsByClassName("overlay");
        for (var i = 0; i < plaatjesArray.length ; i++) {
            if (plaatjesArray[i] === winnendeGame) {
                alleOverlays[i].removeEventListener("click",opdrachtGeklikteKaart);
                console.log("Verwijderde eventlistener" + i);
                plaatjesArray[i] = null;
            }
        }
    }
}

//verander speler
function veranderSpeler() {
    if (spelerAanZet = 0) {
        spelerAanZet = 1
    } else {
        spelerAanZet = 0
    }
}

// winner
function wieWint() {
    if (puntenSpeler1 > puntenSpeler2) {
        winner = winnerspeler1;
    } else {
        winner = winnerspeler2;
    }
    var button = document.getElementById("button");
    button.innerHTML = winner + " wint!";
    button.style.display = 'block';
}
