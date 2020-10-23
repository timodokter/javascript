pics = document.getElementById("pics");
createPicsHolders();
createGameImages()

function createPicsHolders() {
    for(var i = 0; i < 9; i++) {
        pictureHolder = document.createElement("div");
        pictureHolder.className = "gamepicture";
        pictureHolder.id = "picture-holder" + i;
        pics.appendChild(pictureHolder);
    }
}

function createGameImages() {
    pictureHolder = document.getElementsByClassName("gamepicture");
    for(var i = 0; i < pictureHolder.length; i++) {
        gamePlaatje = document.createElement("img");
        gamePlaatje.src = "img/game" + (i+1) + ".jpg";
        pictureHolder[i].appendChild(gamePlaatje);
    }
}
//picsHolders maken
//picsHolder bevat een plaatje van een game en een favoriete symbool

//gameplaatjes toevoegen aan picsHolders
//favoriteSymbols toevoegen aan picsholders