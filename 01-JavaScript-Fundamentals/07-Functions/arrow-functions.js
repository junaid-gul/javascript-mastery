// Basic arrow function
const greetUser = () => {
  console.log('Hello, Junaid')
}

greetUser()


// Arrow function with one parameter
const greetPerson = personName => {
  console.log(`Hello, ${personName}`)
}

greetPerson('Ali')


// Arrow function with multiple parameters
const addNumbers = (firstNumber, secondNumber) => {
  return firstNumber + secondNumber
}

console.log(addNumbers(10, 20))


// Arrow function with implicit return
const multiplyNumbers = (firstNumber, secondNumber) => firstNumber * secondNumber

console.log(multiplyNumbers(5, 4))


// Arrow function returning a boolean
const isAdult = personAge => personAge >= 18

console.log(isAdult(22))