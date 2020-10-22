var mijnauto = {
    merk: "Ford",
    type: "mondeo",
    aantalwielen: 4,
    kleur: "blauw",
    snelheid: 0,

    gasgeven: function () {
        this.snelheid += 5
        console.log(this.snelheid);
    },

    toeteren: function () {
        console.log("TOET!")
    },
}

mijnauto.gasgeven();
mijnauto.toeteren();