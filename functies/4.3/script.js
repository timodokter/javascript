var arrayogen = [1,2,3,4,5];
var arrayneus = [1,2,3,4,5];
var arraymond = [1,2,3,4,5];
var tellerogen = 1;
var tellerneus = 1;
var tellermond = 1;
var slideholderogen = document.getElementById("ogen")
var slideholderneus = document.getElementById("neus")
var slideholdermond = document.getElementById("mond")

slideholderogen.style.backgroundImage = "url('img/ogen/crookOgen1.jpg')";
slideholderneus.style.backgroundImage = "url('img/neuzen/crookNeus1.jpg')";
slideholdermond.style.backgroundImage = "url('img/monden/crookMond1.jpg')";

slideholderogen.addEventListener("click", function () {
    slideholderogen.style.backgroundImage = "url('img/ogen/crookOgen" + getogen() + ".jpg')";
});
slideholderneus.addEventListener("click", function () {
    slideholderneus.style.backgroundImage = "url('img/neuzen/crookNeus" + getneuzen() + ".jpg')";
});
slideholdermond.addEventListener("click", function () {
    slideholdermond.style.backgroundImage = "url('img/monden/crookMond" + getmonden() + ".jpg')";
});

function getogen() {
    if (tellerogen >= arrayogen.length) {
        tellerogen = 1;
    } else {
        tellerogen++;
    }
    console.log(tellerogen)
    return tellerogen;
}

function getneuzen() {
    if (tellerneus>= arrayneus.length) {
        tellerneus = 1;
    } else {
        tellerneus++;
    }
    console.log(tellerneus)
    return tellerneus;
}


function getmonden() {
    if (tellermond >= arraymond.length) {
        tellermond = 1;
    } else {
        tellermond++;
    }
    console.log(tellermond)
    return tellermond;
}


