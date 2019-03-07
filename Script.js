var xhr = new XMLHttpRequest();
xhr.open("GET", "https://raw.githubusercontent.com/loaimohamed/Test/master/Data.json");
var listM = document.getElementById("listM");
xhr.onload = function () {
    jsonFile();
    colorSystem();
}
function jsonFile() {
    var informationZ = JSON.parse(xhr.responseText);
    var cvb = informationZ;
    for (l = 0; l < Object.keys(cvb).length - 1; l++) {
        var trE = document.createElement("tr");
        for (i = 0; i < 8; i++) {
            var tdE = document.createElement("td");
            tdE.innerHTML = cvb[l].List[i];
            trE.appendChild(tdE);
        }
        listM.appendChild(trE);
    }
}
xhr.send();
var ageRatings = ["+18", "+17", "+16", "+15"];
function colorSystem() {
    var range = document.createRange();
    range.selectNodeContents(document.getElementsByTagName("tr")[0]);
    var getS = window.getSelection().addRange(range);
    var colorSys = document.getElementsByTagName("tr");
    for (let i = 0; i < colorSys.length; i++) {
        var mark = document.createElement("span"),
            listName = colorSys[i].children[0];
        mark.classList.add("boxmarks");
        search = colorSys[i].children[6].innerHTML;
        mark.onclick = function () {}
        if (search.includes("+12")) { mark.classList.add("T-rating12"); mark.setAttribute("data-color", "+12"); };
        if (search.includes("+14")) { mark.classList.add("T-rating15"); mark.setAttribute("data-color", "+14"); };
        if (search.includes("+15")) { mark.classList.add("T-rating15"); mark.setAttribute("data-color", "+15"); };
        if (search.includes("+16")) { mark.classList.add("T-rating16"); mark.setAttribute("data-color", "+16"); };
        if (search.includes("+17")) { mark.classList.add("T-rating17"); mark.setAttribute("data-color", "+17"); };
        if (search.includes("+18")) { mark.classList.add("T-rating18"); mark.setAttribute("data-color", "+18"); };
        listName.insertAdjacentElement("beforeend", mark);
    }
}
/*
    var ageRatings = ["+18", "+17", "+16", "+14"];
function colorSystem() {
    var colorSys = document.getElementsByTagName("tr");
    for (let i = 0; i < colorSys.length; i++) {
        var mark = document.createElement("span"),
            listName = colorSys[i].children[0];
        mark.classList.add("boxmarks");
        search = colorSys[i].children[6].innerHTML;
        if (search.includes("+15")) { mark.classList.add("T-rating15"); mark.setAttribute("data-color", "+15"); };
        if (search.includes("+16")) { mark.classList.add("T-rating16"); mark.setAttribute("data-color", "+16"); };
        if (search.includes("+17")) { mark.classList.add("T-rating17"); mark.setAttribute("data-color", "+17"); };
        if (search.includes("+18")) { mark.classList.add("T-rating18"); mark.setAttribute("data-color", "+18"); };
        listName.insertAdjacentElement("afterbegin", mark);
    }
}
*/