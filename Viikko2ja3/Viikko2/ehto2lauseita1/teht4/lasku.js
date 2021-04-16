function tarkistus() {

var luku1 = parseInt(document.getElementById('teksti1').value);
var luku2 = parseInt(document.getElementById('teksti2').value);
var luku3 = parseInt(document.getElementById('teksti3').value);
var luku4 = parseInt(document.getElementById('teksti4').value);
var luku5 = parseInt(document.getElementById('teksti5').value);

var tulos = luku1 + luku2 + luku3 + luku4 + luku5
var tulos1 = (luku1 + luku2 + luku3 + luku4 + luku5) / 5

document.getElementById('tulos').innerHTML = "Lukujen summa on: " + tulos + " ja keskiarvo on: " + tulos1 + ".";
}
