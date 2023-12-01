const countdownDisplay = document.getElementById("countdown-display")

function renderCountdown() {
    let counter = document.getElementById('counter')
    const christmas = 25
    const todaysDate = new Date()
    counter.innerText = (christmas - todaysDate.getDate())

}

renderCountdown()
