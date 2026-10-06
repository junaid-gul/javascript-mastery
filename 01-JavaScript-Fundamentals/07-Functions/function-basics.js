// Function without parameters
function greetUser() {
  console.log('Hello, Junaid')
}

greetUser()


// Function with a parameter
function greetPerson(personName) {
  console.log(`Hello, ${personName}`)
}

greetPerson('Ali')


// Function with multiple parameters and return
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber
}

const sumResult = addNumbers(10, 20)

console.log(sumResult)


// Returning a string
function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`
}

const fullName = getFullName('Junaid', 'Gul')

console.log(fullName)


// Storing a returned value
function showMessage() {
  return 'Welcome to JavaScript'
}

const message = showMessage()

console.log(message)


// Returning a boolean
function checkAdult(personAge) {
  return personAge >= 18
}

console.log(checkAdult(22))


// Default parameter
function displayUser(userName = 'Guest') {
  console.log("Welcome", userName)
}

displayUser()
displayUser('Junaid')