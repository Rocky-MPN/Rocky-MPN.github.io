const jokeSetup = document.getElementById('joke-setup')
const jokeDelivery = document.getElementById('joke-delivery')
const windowContainer = document.getElementById('window-container')

windowContainer.addEventListener('click', function () {
    fetch('https://v2.jokeapi.dev/joke/Christmas')
        .then(response => response.json())
        .then(data => {
            jokeSetup.innerText = `${data.setup}`
            jokeDelivery.innerText = `${data.delivery}`
        })

    document.querySelector('.left-door').style = "animation: left-open 0.3s forwards"
    document.querySelector('.right-door').style = "animation: right-open 0.3s forwards"
    document.querySelector('.joke-display').style = "animation: display-joke 0.3s forwards"
})