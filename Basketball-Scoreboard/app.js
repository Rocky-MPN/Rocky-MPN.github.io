let homeScore = 0;
let guestsScore = 0;
let homeBtn1 = document.getElementById("home-score-display");
let homeBtn2 = document.getElementById("home-score-display");
let homeBtn3 = document.getElementById("home-score-display");

let guestsBtn1 = document.getElementById("guests-score-display");
let guestsBtn2 = document.getElementById("guests-score-display");
let guestsBtn3 = document.getElementById("guests-score-display");

let resetHomeBtn = document.getElementById("home-score-display")
let resetGuestsBtn = document.getElementById("guests-score-display")

function homeAdd1() {
    homeScore += 1;
    homeBtn1.textContent = homeScore;
}

function homeAdd2() {
    homeScore += 2;
    homeBtn2.textContent = homeScore;
}

function homeAdd3() {
    homeScore += 3;
    homeBtn3.textContent = homeScore;
}

function guestsAdd1() {
    guestsScore += 1;
    guestsBtn1.textContent = guestsScore;
}

function guestsAdd2() {
    guestsScore += 2;
    guestsBtn2.textContent = guestsScore;
}

function guestsAdd3() {
    guestsScore += 3;
    guestsBtn3.textContent = guestsScore;
}


function resetHomeScore() {
    resetHomeBtn.textContent = 0
    homeScore = 0
}

function resetGuestsScore() {
    resetGuestsBtn.textContent = 0
    homeScore = 0
}