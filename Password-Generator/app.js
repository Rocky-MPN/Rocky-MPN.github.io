let characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

let btn = document.querySelector("#generate-button")
let passDisplay1 = document.querySelector("#password-1")
let passDisplay2 = document.querySelector("#password-2")
let copy1 = document.querySelector("#copy-1")
let copy2 = document.querySelector("#copy-2")

let selectedPassLen

let includeNumbers = document.getElementById("include-numbers")
let includeSymbols = document.getElementById("include-symbols")



//check if user wants to include numbers and symbols
function AreNumbersIncluded() {
    if (includeNumbers.checked == true) {
        characters = characters.concat(numbers)
    } else {
        characters = characters.filter(function (x) {
            return numbers.indexOf(x) < 0;
        })
    }
}
function AreSymbolsIncluded() {
    if (includeSymbols.checked == true) {
        characters = characters.concat(symbols)
    } else {
        characters = characters.filter(function (x) {
            return symbols.indexOf(x) < 0;
        })
    }
}



//set password length

let value = document.querySelector("#value");
let input = document.querySelector("#pass-max-len");
value.textContent = input.value;
input.addEventListener("input", (event) => {
    value.textContent = event.target.value;
});


//generate two random passwords
function generatePassword() {
    let password1 = ""
    let selectedPassLen = parseInt(value.innerHTML)
    console.log(selectedPassLen)
    for (let i = 0; i < selectedPassLen; i++) {
        password1 += characters[Math.floor(Math.random() * characters.length)]
    }
    let password2 = ""
    for (let i = 0; i < selectedPassLen; i++) {
        password2 += characters[Math.floor(Math.random() * characters.length)]
    }
    passDisplay1.textContent = password1
    passDisplay2.textContent = password2
}



//copy password 1 to clipboard
const copyContent = async () => {
    try {
        await navigator.clipboard.writeText(passDisplay1.innerHTML);
        console.log('Content copied to clipboard');
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}


//copy password 2 to clipboard
const copyContent2 = async () => {
    try {
        await navigator.clipboard.writeText(passDisplay2.innerHTML);
        console.log('Content copied to clipboard');
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}



copy1.addEventListener("click", copyContent)
copy2.addEventListener("click", copyContent2)
includeNumbers.addEventListener("change", AreNumbersIncluded)
includeSymbols.addEventListener("change", AreSymbolsIncluded)
btn.addEventListener("click", generatePassword)