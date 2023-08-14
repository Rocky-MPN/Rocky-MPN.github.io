/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


let convertBtn = document.getElementById("convert-btn")
let initialValue = document.getElementsByClassName("initial-value")
let convertedValue = document.getElementsByClassName("converted-value")
let length = document.getElementById("length")
let volume = document.getElementById("volume")
let mass = document.getElementById("mass")
const meter = 3.281
const liter = 0.264
const kilogram = 2.204



function convert() {
    let userInput = document.getElementById("user-input").value
    length.innerHTML = `${userInput} meters = ${(userInput * meter).toFixed(2)} feet | ${userInput} feet = ${parseFloat(userInput / meter).toFixed(2)} meters`
    volume.innerHTML = `${userInput} liters = ${(userInput * liter).toFixed(2)} gallons | ${userInput} gallons = ${parseFloat(userInput / liter).toFixed(2)} liters`
    mass.innerHTML = `${userInput} kilograms = ${(userInput * kilogram).toFixed(2)} pounds | ${userInput} pounds = ${parseFloat(userInput / kilogram).toFixed(2)} kilograms`
}



convertBtn.addEventListener("click", function () {
    convert()
})



//function to resize input box if user enters long number
const input = document.querySelector('#user-input'); // get the input element
input.addEventListener('input', resizeInput); // bind the "resizeInput" callback on "input" event
resizeInput.call(input); // immediately call the function

function resizeInput() {
    this.style.width = this.value.length + "ch";
}

function darkMode() {
    let main = document.querySelector("main")
    let h2DarkMode = document.querySelectorAll("h2")
    let sectiondarkMode = document.querySelectorAll("section")
    let pDarkMode = document.querySelectorAll("p")
    let asideDarkMode = document.querySelector("aside")

    main.classList.toggle("dark-mode")
    asideDarkMode.classList.toggle('aside-dark-mode')

    for (let i = 0; i < h2DarkMode.length; i++) {
        h2DarkMode[i].classList.toggle("h2-dark-mode")
        sectiondarkMode[i].classList.toggle("section-dark-mode")
        pDarkMode[i].classList.toggle('p-dark-mode')
    }
}


