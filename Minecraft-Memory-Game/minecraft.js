document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
        {
            name: 'creeper',
            img: 'images/creeper.jpg',
        },
        {
            name: 'skeleton',
            img: 'images/skeleton.jpg',
        },
        {
            name: 'steve',
            img: 'images/steve.jpg',
        },
        {
            name: 'sword',
            img: 'images/sword.jpg',
        },
        {
            name: 'witch',
            img: 'images/witch.png',
        },
        {
            name: 'zombie',
            img: 'images/zombie.jpg',
        },
        {
            name: 'creeper',
            img: 'images/creeper.jpg',
        },
        {
            name: 'skeleton',
            img: 'images/skeleton.jpg',
        },
        {
            name: 'steve',
            img: 'images/steve.jpg',
        },
        {
            name: 'sword',
            img: 'images/sword.jpg',
        },
        {
            name: 'witch',
            img: 'images/witch.png',
        },
        {
            name: 'zombie',
            img: 'images/zombie.jpg',
        },
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const gridDisplay = document.querySelector('#grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenIds = []
    const cardsWon = []


    //create your board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'images/tnt.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            gridDisplay.appendChild(card)
        }
    }


    //check for matches
    function checkMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenIds[0]
        const optionTwoId = cardsChosenIds[1]

        if (optionOneId == optionTwoId) {
            // alert('You clicked the same image')
            cards[optionOneId].setAttribute('src', 'images/tnt.png')
            cards[optionTwoId].setAttribute('src', 'images/tnt.png')
        }
        else if (cardsChosen[0] === cardsChosen[1]) {
            // alert('you found a match')
            cards[optionOneId].setAttribute('src', 'images/transparent.gif')
            cards[optionTwoId].setAttribute('src', 'images/transparent.gif')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        }
        else {
            cards[optionOneId].setAttribute('src', 'images/tnt.png')
            cards[optionTwoId].setAttribute('src', 'images/tnt.png')
            // alert('sorry try again')
        }

        resultDisplay.textContent = cardsWon.length
        cardsChosen = []
        cardsChosenIds = []

        if (cardsWon.length == cardArray.length / 2) {
            resultDisplay.textContent = 'Congratulations you are the CHAMPION!!!'
        }
    }

    //flip your card
    function flipCard() {
        const cardId = this.getAttribute('data-id')
        cardArray[cardId.name]
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenIds.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkMatch, 500)
        }
    }

    createBoard()


})