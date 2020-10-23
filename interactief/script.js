pics = document.getElementById("pics");
createPicsHolders();

function createPicsHolders() {
    for(var i = 0; i < 9; i++) {
        pictureHolder = document.createElement("div");
        pictureHolder.className = "gamepicture";
        pictureHolder.id = "picture-holder" + i;
        pics.appendChild(pictureHolder);
    }
}
//picsHolders maken
//picsHolder bevat een plaatje van een game en een favoriete symbool

//gameplaatjes toevoegen aan picsHolders
//favoriteSymbols toevoegen aan picsholders