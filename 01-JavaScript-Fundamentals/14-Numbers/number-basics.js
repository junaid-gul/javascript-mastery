
const studentAge = 22
const coursePrice = 99.99
const temperature = -5

console.log(studentAge, typeof studentAge)
console.log(coursePrice, typeof coursePrice)
console.log(temperature, typeof temperature)


// Special numeric values

const invalidNumber = Number('Hello')
const positiveInfinity = 10 / 0

console.log(invalidNumber)
console.log(typeof invalidNumber)

console.log(positiveInfinity)
console.log(typeof positiveInfinity)


// Checking numeric values

console.log(Number.isNaN(invalidNumber))
console.log(Number.isFinite(studentAge))
console.log(Number.isInteger(studentAge))
console.log(Number.isInteger(coursePrice))


// BigInt

const hugeNumber = 12345678901234567890n

console.log(hugeNumber)
console.log(typeof hugeNumber)