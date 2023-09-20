import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://realtime-database-3c30f-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const endorsementListInDB = ref(database, "endorsements")

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("publish-button")
const endorsementListEl = document.getElementById("endorsement-list")

addButtonEl.addEventListener("click", function () {
    let inputValue = inputFieldEl.value

    push(endorsementListInDB, inputValue)

    clearInputFieldEl()
})

onValue(endorsementListInDB, function (snapshot) {
    if (snapshot.exists()) {
        let itemsArray = Object.entries(snapshot.val())

        clearendorsementListEl()

        for (let i = 0; i < itemsArray.length; i++) {
            let currentItem = itemsArray[i]
            let currentItemID = currentItem[0]
            let currentItemValue = currentItem[1]

            appendItemToendorsementListEl(currentItem)
        }
    } else {
        endorsementListEl.innerHTML = "No items here... yet"
    }
})

function clearendorsementListEl() {
    endorsementListEl.innerHTML = ""
}

function clearInputFieldEl() {
    inputFieldEl.value = ""
}

function appendItemToendorsementListEl(item) {
    let itemID = item[0]
    let itemValue = item[1]

    let newEl = document.createElement("li")

    newEl.textContent = itemValue

    newEl.addEventListener("click", function () {
        let exactLocationOfItemInDB = ref(database, `endorsements/${itemID}`)

        remove(exactLocationOfItemInDB)
    })

    endorsementListEl.append(newEl)
}