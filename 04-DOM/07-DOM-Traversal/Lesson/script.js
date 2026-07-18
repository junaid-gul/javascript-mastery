const buyButton = document.querySelector(".buy-btn")
const html = document.documentElement
const card = document.querySelector(".card")
const firstH3 = document.querySelector("h3")
const firstP = document.querySelector("p")
const products = document.querySelector(".products")

// Parent

console.log(buyButton)
console.log(buyButton.parentElement)
console.log(buyButton.parentNode)

console.log(html.parentElement)
console.log(html.parentNode)

// Children

console.log(card)
console.log(card.children)
console.log(card.childNodes)
console.log(card.children.length)
console.log(card.childNodes.length)

// First & Last

console.log(card.firstChild)
console.log(card.firstElementChild)
console.log(card.lastChild)
console.log(card.lastElementChild)

// Siblings

console.log(firstH3.nextSibling)
console.log(firstH3.nextElementSibling)
console.log(firstP.previousSibling)
console.log(firstP.previousElementSibling)

// Node Info

console.log(card.nodeName)
console.log(card.firstChild.nodeType)
console.log(card.firstChild.nodeName)

// Closest

console.log(buyButton.closest(".card"))
console.log(buyButton.closest(".products"))
console.log(buyButton.closest("main"))
console.log(buyButton.closest(".buy-btn"))
console.log(buyButton.closest(".does-not-exist"))

// Matches

console.log(buyButton.matches(".buy-btn"))
console.log(buyButton.matches("button"))
console.log(buyButton.matches(".card"))

// Contains

console.log(products.contains(buyButton))
console.log(buyButton.contains(products))
console.log(buyButton.contains(buyButton))