// ======================================================
// DOM TRAVERSAL MENTAL MODEL
// ======================================================

// Step 1: Ask yourself:
// "Where am I now?"

// Step 2: Ask yourself:
// "Where do I need to go?"

// Step 3: Choose the shortest path.


// ======================================================
// TRAVERSAL RULES
// ======================================================

// ⬆️ Need to go UP?
// Use:
// - parentElement
// - parentNode
// - closest()

// ⬇️ Need to go DOWN?
// First reach the correct parent/container.
// Then use:
// - children
// - firstElementChild
// - lastElementChild
// - querySelector() (common in real projects)

// ↔️ Need to go SIDEWAYS?
// Use:
// - nextElementSibling
// - previousElementSibling


// ======================================================
// SEARCH vs TRAVERSAL
// ======================================================

// querySelector()
// → Searches the DOM.

// Traversal
// → Navigates from an element you already have.


// ======================================================
// PROFESSIONAL THINKING
// ======================================================

// ❌ Don't think:
// "Which method should I use?"

// ✅ Think:
// "Where am I in the DOM tree?"
// "Where do I need to go?"
// "What's the shortest path?"


// ======================================================
// REMEMBER
// ======================================================

// closest()              ↑ Up
// parentElement          ↑ Up
// children               ↓ Down
// firstElementChild      ↓ Down
// lastElementChild       ↓ Down
// nextElementSibling     → Right
// previousElementSibling ← Left


// ======================================================
// GENERAL STRATEGY
// ======================================================

// If the element you need is ABOVE you:
// → Use closest() or parentElement.

// If the element you need is BELOW you:
// → First go to the correct parent.
// → Then go down using children, firstElementChild,
//    lastElementChild, or querySelector().

// If the element is NEXT to you:
// → Use nextElementSibling or previousElementSibling.


// ======================================================
// DOM Traversal Playground
// Goal: Understand how to move around the DOM tree.
// ======================================================


// ===============================
// Starting Elements
// ===============================

const card = document.querySelector(".card")
const followBtn = document.querySelector(".follow-btn")
const profile = document.querySelector(".profile")
const messageBtn = document.querySelector(".message-btn")



// ======================================================
// PARENT TRAVERSAL
// ======================================================

// Current Element
console.log(followBtn)

// Parent (.actions)
console.log(followBtn.parentElement)

// Parent of Parent (.left)
console.log(followBtn.parentElement.parentElement)

// Parent of Parent of Parent (.content)
console.log(followBtn.parentElement.parentElement.parentElement)

// Parent of Parent of Parent of Parent (.card)
console.log(followBtn.parentElement.parentElement.parentElement.parentElement)

// Parent of Parent of Parent of Parent of Parent (.container)
console.log(followBtn.parentElement.parentElement.parentElement.parentElement.parentElement)

// HTML Element
console.log(document.documentElement)

// Parent of HTML
console.log(document.documentElement.parentNode) // Document

// Parent Element of HTML
console.log(document.documentElement.parentElement) // null



// ======================================================
// CHILD TRAVERSAL
// ======================================================

// All element children
console.log(card.children)

// Total element children
console.log(card.children.length)

// First child element
console.log(card.firstElementChild)

// Last child element
console.log(card.lastElementChild)

// Second child
console.log(card.children[1])

// Third child
console.log(card.children[2])



// ======================================================
// CHILD NODES
// ======================================================

// All nodes (text, comments, elements)
console.log(card.childNodes)

// Total nodes
console.log(card.childNodes.length)

// First node
console.log(card.firstChild)

// Last node
console.log(card.lastChild)



// ======================================================
// SIBLING TRAVERSAL
// ======================================================

// Next sibling element (.actions)
console.log(profile.nextElementSibling)

// Previous sibling element
console.log(profile.previousElementSibling)

// Next sibling node
console.log(profile.nextSibling)

// Previous sibling node
console.log(profile.previousSibling)



// ======================================================
// FIRST / LAST CHILD
// ======================================================

const actions = document.querySelector(".actions")

// First button
console.log(actions.firstElementChild)

// Last button
console.log(actions.lastElementChild)

// First node
console.log(actions.firstChild)

// Last node
console.log(actions.lastChild)



// ======================================================
// closest()
// Move UP until selector is found
// ======================================================

// Finds .left
console.log(messageBtn.closest(".left"))

// Finds .content
console.log(messageBtn.closest(".content"))

// Finds .card
console.log(messageBtn.closest(".card"))

// Finds body
console.log(messageBtn.closest("body"))

// Doesn't exist
console.log(messageBtn.closest(".xyz")) // null



// ======================================================
// matches()
// Checks current element only
// ======================================================

console.log(messageBtn.matches(".message-btn")) // true

console.log(messageBtn.matches("button")) // true

console.log(messageBtn.matches(".actions")) // false

console.log(messageBtn.matches(".card")) // false



// ======================================================
// contains()
// Checks parent-child relationship
// ======================================================

console.log(card.contains(messageBtn)) // true

console.log(messageBtn.contains(card)) // false

console.log(card.contains(profile)) // true

console.log(profile.contains(messageBtn)) // false

console.log(card.contains(card)) // true



// ======================================================
// NODE INFORMATION
// ======================================================

console.log(card.nodeName)

console.log(card.nodeType)

console.log(card.firstChild.nodeName)

console.log(card.firstChild.nodeType)

console.log(card.firstElementChild.nodeName)

console.log(card.firstElementChild.nodeType)



// ======================================================
// DEEP TRAVERSAL EXAMPLES
// ======================================================

// card
// ├── header
// ├── main
// │   ├── left
// │   │   ├── profile
// │   │   └── actions
// │   └── right
// │       └── ul
// │           ├── HTML
// │           ├── CSS
// │           └── JavaScript
// └── footer


// Reach .content
console.log(card.children[1])

// Reach .right
console.log(card.children[1].lastElementChild)

// Reach ul
console.log(card.children[1].lastElementChild.lastElementChild)

// Reach first li
console.log(card.children[1].lastElementChild.lastElementChild.firstElementChild)

// Reach last li (JavaScript)
console.log(
    card.children[1]
        .lastElementChild
        .lastElementChild
        .lastElementChild
)


// ======================================================
// MIXING TRAVERSAL
// ======================================================

// Button
console.log(messageBtn)

// Up to card
console.log(messageBtn.closest(".card"))

// Down to footer
console.log(
    messageBtn
        .closest(".card")
        .lastElementChild
)

// Down to copyright
console.log(
    messageBtn
        .closest(".card")
        .lastElementChild
        .firstElementChild
)