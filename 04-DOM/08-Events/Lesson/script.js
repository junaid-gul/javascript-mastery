// ===== DOM Elements =====
const clickBtn = document.querySelector("#clickBtn")
const doubleBtn = document.querySelector("#doubleBtn")
const clickOutput = document.querySelector("#clickOutput")
const count = document.querySelector("#count")

const mouseBox = document.querySelector("#mouseBox")

const keyboardInput = document.querySelector("#keyboardInput")
const keyboardOutput = document.querySelector("#keyboardOutput")

const form = document.querySelector("#form")

const parent = document.querySelector("#parent")
const child = document.querySelector("#child")

// ===== Click Events =====
let storeCount = 0

clickBtn.addEventListener("click", function (event) {
    clickOutput.textContent = event.target.id
})

clickBtn.addEventListener("click", increaseCount)

function increaseCount() {
    storeCount++
    count.textContent = storeCount
}

doubleBtn.addEventListener("dblclick", resetCounter)

function resetCounter() {
    storeCount = 0
    count.textContent = `Counter ${storeCount} reset`
}

// ===== Mouse Events =====
mouseBox.addEventListener("mousedown", function () {
    mouseBox.textContent = "Mouse Down"
    mouseBox.style.backgroundColor = "lightblue"
})

mouseBox.addEventListener("mouseup", function () {
    mouseBox.textContent = "Mouse Up"
    mouseBox.style.backgroundColor = "green"
})

mouseBox.addEventListener("mouseenter", function () {
    mouseBox.textContent = "Mouse Enter"
    mouseBox.style.backgroundColor = "orange"
})

mouseBox.addEventListener("mouseleave", function () {
    mouseBox.textContent = "Mouse Leave"
    mouseBox.style.backgroundColor = "green"
})

mouseBox.addEventListener("mousemove", function () {
    mouseBox.textContent = "Mouse Move"
})

// ===== Keyboard Events =====
keyboardInput.addEventListener("keydown", function (event) {
    keyboardOutput.textContent = event.type
})

keyboardInput.addEventListener("keyup", function () {
    keyboardOutput.textContent = "Key Released"
})

// ===== Form Event =====
form.addEventListener("submit", function (event) {
    event.preventDefault()
})

// ===== Propagation =====
parent.addEventListener("click", function () {
    console.log("Parent")
})

child.addEventListener(
    "click",
    function () {
        console.log("Child")
        // event.stopPropagation()
    },
    true
)

// ===== Input Events =====
keyboardInput.addEventListener("input", function (event) {
    keyboardOutput.textContent = event.target.value
})

keyboardInput.addEventListener("change", function (event) {
    keyboardOutput.textContent = event.target.value
})

keyboardInput.addEventListener("focus", function () {
    keyboardOutput.textContent = "Input Focused"
})

keyboardInput.addEventListener("blur", function () {
    keyboardOutput.textContent = "Input Blurred"
})