function uusitehtava()
{

    var getContent =  document.getElementById("uusitehtava").value;

    if (getContent !== "") {

        var uusirivi = document.createElement("tr");
        var content = document.createTextNode(getContent);

        uusirivi.appendChild(content);
        uusirivi.setAttribute("class", "rivi");
        uusirivi.innerHTML += "<button onclick='this.parentNode.remove()'>X</button>";

        document.getElementById("tulos").appendChild(uusirivi);


        uusirivi.addEventListener ("click", function() {
        this.classList.toggle("tehty");
    });
    document.getElementById("uusitehtava").value = "";
    } else {
        alert("Lisää tehtävä");
    }
}
