pics = document.getElementById("pics");
createPicsHolders();
createGameImages()

function createPicsHolders() {
    for(var i = 0; i < 9; i++) {
        pictureHolder = document.createElement("div");
        pictureHolder.className = "picture-holder";
        pictureHolder.id = "picture-holder" + i;
        pics.appendChild(pictureHolder);
    }
}

function createGameImages() {
    pictureHolder = document.getElementsByClassName("picture-holder");
    for(var i = 0; i < pictureHolder.length; i++) {
        favoriet = document.createElement("div");
        favoriet.className = "favoriet";
        gamePlaatje = document.createElement("img");
        gamePlaatje.src = "img/game" + (i+1) + ".jpg";
        pictureHolder[i].appendChild(favoriet);
        pictureHolder[i].appendChild(gamePlaatje);
    }
}
//picsHolders maken
//picsHolder bevat een plaatje van een game en een favoriete symbool

//gameplaatjes toevoegen aan picsHolders
//favoriteSymbols toevoegen aan picsholders