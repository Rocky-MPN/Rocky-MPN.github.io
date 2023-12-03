const children = document.getElementById('children')
const candies = document.getElementById('candies')
const submitBtn = document.getElementById('submit-btn')
let totalCandies = document.getElementById('total-candies')

function calcTotalCandies(children, candy) {

    let totalCandiesEaten = Math.floor(candy / children) * children
    if (children.value === "" || candies.value === "") {
        totalCandies.innerText = 0
    }
    else {
        totalCandies.innerText = totalCandiesEaten
    }
}

submitBtn.addEventListener('click', function () {
    calcTotalCandies(children.value, candies.value)
})
