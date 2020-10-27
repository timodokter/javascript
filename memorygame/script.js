//de variabelen
var speler1 = "Timo";
var speler2 = "Dylan";
var beurt = " heeft de beurt";
var puntenspeler1 = 0;
var puntenspeler2 = 0;

//de tekst boven in de top-bar
document.getElementById("tekstbeurt").innerHTML = beurt;
document.getElementById("tekstspeler1").innerHTML = speler1 + " : " + puntenspeler1;
document.getElementById("tekstspeler2").innerHTML = speler2 + " : " + puntenspeler2;