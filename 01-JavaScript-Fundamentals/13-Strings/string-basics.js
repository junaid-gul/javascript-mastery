
const singleQuoteText = 'Hello'
const doubleQuoteText = "JavaScript"
const templateText = `Welcome`

console.log(singleQuoteText)
console.log(doubleQuoteText)
console.log(templateText)


// String length

const userName = 'Junaid'

console.log(userName.length)


// Accessing characters

console.log(userName[0])
console.log(userName[3])


// Strings are immutable

const message = 'Hello'

message[0] = 'Y'

console.log(message)


// Template literal

const userAge = 22

const introduction = `My name is ${userName} and I am ${userAge} years old`

console.log(introduction)