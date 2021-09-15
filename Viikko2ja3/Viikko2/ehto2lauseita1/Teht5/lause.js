function laske() {

  var muuttuja = document.getElementById("vastaus").value;

  muuttuja = parseInt(muuttuja);
  vastaus1 = muuttuja + "x1=" + muuttuja * 1;
  vastaus2 = muuttuja + "x2=" + muuttuja * 2;
  vastaus3 = muuttuja + "x3=" + muuttuja * 3;
  vastaus4 = muuttuja + "x4=" + muuttuja * 4;
  vastaus5 = muuttuja + "x5=" + muuttuja * 5;
  vastaus6 = muuttuja + "x6=" + muuttuja * 6;
  vastaus7 = muuttuja + "x7=" + muuttuja * 7;
  vastaus8 = muuttuja + "x8=" + muuttuja * 8;
  vastaus9 = muuttuja + "x9=" + muuttuja * 9;
  vastaus10 = muuttuja + "x10=" + muuttuja * 10;

  document.getElementById("vastaus1").innerHTML = vastaus1;
  document.getElementById("vastaus2").innerHTML = vastaus2;
  document.getElementById("vastaus3").innerHTML = vastaus3;
  document.getElementById("vastaus4").innerHTML = vastaus4;
  document.getElementById("vastaus5").innerHTML = vastaus5;
  document.getElementById("vastaus6").innerHTML = vastaus6;
  document.getElementById("vastaus7").innerHTML = vastaus7;
  document.getElementById("vastaus8").innerHTML = vastaus8;
  document.getElementById("vastaus9").innerHTML = vastaus9;
  document.getElementById("vastaus10").innerHTML = vastaus10;
}
