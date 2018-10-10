//Alli's utton
// Variables
var memInfo = document.querySelector('#memModal');
var btn = document.querySelector("#allisonB");
var close = document.querySelectorAll(".closes")[0];


//functions
btn.onclick = function() {
    memInfo.style.display = "block";
}

close.onclick = function() {
    memInfo.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == memInfo) {
        memInfo.style.display = "none";
    }
}

//Soraya's Button
//Variables
var memInfos = document.querySelector('#memModals');
var btns = document.querySelector("#sorayaB");
var closed = document.querySelectorAll(".closed")[0];


//functions
btns.onclick = function() {
    memInfos.style.display = "block";
}

closed.onclick = function() {
    memInfos.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == memInfos) {
        memInfos.style.display = "none";
    }
}