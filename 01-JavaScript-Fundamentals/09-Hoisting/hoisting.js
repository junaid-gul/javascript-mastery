
// var hoisting
console.log(productPrice)
var productPrice = 1500

// let and const
// console.log(userName)
let userName = 'Alex'
const userRole = 'student'

// Function declaration
showNotice()

function showNotice() {
  console.log('Welcome')
}

// Function expression
// startProcess()
const startProcess = function () {
  console.log('Started')
}

// var function expression
// launchApp()
var launchApp = function () {
  console.log('Running')
}