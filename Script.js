var xhr = new XMLHttpRequest();
xhr.open("GET", "https://raw.githubusercontent.com/loaimohamed/Test/master/Data.json");
var listM = document.getElementById("listM");
xhr.onload = function () {
    var informationZ = JSON.parse(xhr.responseText);
    for (l = 0; l < Object.keys(informationZ).length - 1; l++) {
        var trE = document.createElement("tr");
        for (i = 0; i < 8; i++) {
            var tdE = document.createElement("td");
            tdE.innerHTML = informationZ[l].List[i];
            trE.appendChild(tdE);
        }
        listM.appendChild(trE);
    }
}
xhr.send();
