let inputElem = document.querySelector("#input-field")

let bgColors = document.querySelectorAll(".color-box")

let btnSave = document.querySelector("#btn-save")

let btnDelete = document.querySelector("#btn-delete")

let cardList = document.querySelector("#listed")

let difCard = document.querySelectorAll(".card.shadow-sm.rounded")

let bgColor;

///////////////// optional 

// difCard.forEach(function (card) {
//     card.addEventListener("dblclick" , function (event) {
//         event.target.parentElement.remove()
//     })
// })

inputElem.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && inputElem.value != "") {
        let pNewElem = document.createElement("p")
        pNewElem.setAttribute("class", "card-text p-3")
        let divNewElem = document.createElement("div")
        divNewElem.setAttribute("class", "card shadow-sm rounded")
        pNewElem.innerHTML = inputElem.value
        divNewElem.style.backgroundColor = inputElem.style.backgroundColor
        divNewElem.addEventListener("dblclick", function (event) {
            event.target.parentElement.remove()
        })
        divNewElem.append(pNewElem)
        cardList.append(divNewElem)
        inputElem.value = ""
        inputElem.focus()
    }
})

btnSave.addEventListener("click", function () {
    if (inputElem.value != "") {
        let pNewElem = document.createElement("p")
        pNewElem.setAttribute("class", "card-text p-3")
        let divNewElem = document.createElement("div")
        divNewElem.setAttribute("class", "card shadow-sm rounded")
        pNewElem.innerHTML = inputElem.value
        divNewElem.style.backgroundColor = inputElem.style.backgroundColor
        divNewElem.addEventListener("click", function (event) {
            event.target.parentElement.remove()
        })
        divNewElem.append(pNewElem)
        cardList.append(divNewElem)
        inputElem.value = ""
        inputElem.focus()
    }
})

btnDelete.addEventListener("click", function () {
    inputElem.value = ""
})

bgColors.forEach(function (color) {
    color.addEventListener("click", function (event) {
        bgColor = event.target.style.backgroundColor
        inputElem.style.backgroundColor = bgColor
    })
})