const heartIconVanGogh = document.getElementById("heart-icon-vangogh")
let vangoughLikesCounter = document.getElementById("vangogh-likes-counter")
const vangoghPhoto = document.getElementById("vangogh-photo")

const heartIconCourbet = document.getElementById("heart-icon-courbet")
const courbetLikesCounter = document.getElementById("courbet-likes-counter")
const courbetPhoto = document.getElementById("courbet-photo")

const heartIconDucreux = document.getElementById("heart-icon-ducreux")
const ducreuxLikesCounter = document.getElementById("ducreux-likes-counter")
const ducreuxPhoto = document.getElementById("ducreux-photo")

//Van Gogh
heartIconVanGogh.addEventListener("click", function () {
    changeHeartColor()
    changeLikes()
})

vangoghPhoto.addEventListener("click", function () {
    changeHeartColor()
    changeLikes()
})

heartIconVanGogh.addEventListener("dblclick", function () {
    removeHeart()
    removeLikes()
})

vangoghPhoto.addEventListener("dblclick", function () {
    removeHeart()
    removeLikes()
})


//Van Gogh

function changeHeartColor() {
    heartIconVanGogh.src = `images/icon-heart-red.png`
}

function changeLikes() {
    vangoughLikesCounter.textContent = "21,493 likes"
}

function removeHeart() {
    heartIconVanGogh.src = `images/icon-heart.png`
}

function removeLikes() {
    vangoughLikesCounter.textContent = "21,492 likes"
}



//Courbet
heartIconCourbet.addEventListener("click", function () {
    heartIconCourbet.src = `images/icon-heart-red.png`
    courbetLikesCounter.textContent = "5 likes"
})

courbetPhoto.addEventListener("click", function () {
    heartIconCourbet.src = `images/icon-heart-red.png`
    courbetLikesCounter.textContent = "5 likes"
})

heartIconCourbet.addEventListener("dblclick", function () {
    heartIconCourbet.src = `images/icon-heart.png`
    courbetLikesCounter.textContent = "4 likes"
})

courbetPhoto.addEventListener("dblclick", function () {
    heartIconCourbet.src = `images/icon-heart.png`
    courbetLikesCounter.textContent = "4 likes"
})


//Ducreux
heartIconDucreux.addEventListener("click", function () {
    heartIconDucreux.src = `images/icon-heart-red.png`
    ducreuxLikesCounter.textContent = "153 likes"
})

ducreuxPhoto.addEventListener("click", function () {
    heartIconDucreux.src = `images/icon-heart-red.png`
    ducreuxLikesCounter.textContent = "153 likes"
})

heartIconDucreux.addEventListener("dblclick", function () {
    heartIconDucreux.src = `images/icon-heart.png`
    ducreuxLikesCounter.textContent = "152 likes"
})

ducreuxPhoto.addEventListener("dblclick", function () {
    heartIconDucreux.src = `images/icon-heart.png`
    ducreuxLikesCounter.textContent = "152 likes"
})

