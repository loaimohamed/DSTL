console.log("The Website is Runing");
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://raw.githubusercontent.com/loaimohamed/Test/master/Data.json");
var listM = document.getElementById("listM");
xhr.onload = async function () {
    var informationZ = JSON.parse(xhr.responseText);
    var cvb = informationZ;
    for (l = 0; l < Object.keys(cvb).length-1; l++) {
        var trE = document.createElement("tr");
        for (i = 0; i < 8; i++) {
            var tdE = document.createElement("td");
            tdE.innerHTML = cvb[l].List[i];
            trE.appendChild(tdE);
            //console.log(l);
        }
        listM.appendChild(trE);
        
    }
    var colorRed = document.getElementsByTagName("tr");
    for (var i = 0; i < colorRed.length; i++) {
        //console.log(i);
        var ratingMA = colorRed[i].innerHTML.indexOf("+16/");
        if (ratingMA != -1) { colorRed[i].children[6].style.backgroundColor = "#00F"; }
        var rating18 = colorRed[i].innerHTML.indexOf("+18/");
        if (rating18 != -1) { colorRed[i].children[6].style.backgroundColor = "#F00"; }
        var ratingR = colorRed[i].innerHTML.indexOf("+17/");
        if (ratingR != -1) { colorRed[i].children[6].style.backgroundImage = "-webkit-linear-gradient(0deg,Blue,red)"; }
        var ratingPG = colorRed[i].innerHTML.indexOf("+12/");
        if (ratingPG != -1) { colorRed[i].children[6].style.backgroundColor = "#FF0"; }
    }
}
xhr.send();
// {"List" : ["","","","","","","",""]},
