// toFixed - controls decimal places

const productPrice = 99.567

console.log(productPrice.toFixed(2))


// toString - converts a number to a string

const userScore = 95

const scoreText = userScore.toString()

console.log(scoreText)
console.log(typeof scoreText)


// toPrecision - controls significant digits

const measurement = 123.456

console.log(measurement.toPrecision(5))


// Checking integers

console.log(Number.isInteger(25))
console.log(Number.isInteger(25.5))


// Checking NaN

const result = Number('Hello')

console.log(Number.isNaN(result))


// Checking finite numbers

console.log(Number.isFinite(100))
console.log(Number.isFinite(Infinity))


// Checking safe integers

console.log(Number.isSafeInteger(100))
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER))