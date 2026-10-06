function createGreeter(userName) {
  return function () {
    console.log(`Hello, ${userName}`)
  }
}

const greetJunaid = createGreeter('Junaid')
const greetAli = createGreeter('Ali')

greetJunaid()
greetJunaid()

greetAli()

console.log("=======================================")

function createAccount(initialBalance) {
  let balance = initialBalance

  return function (amount) {
    balance += amount
    console.log(`Balance: ${balance}`)
  }
}

const myAccount = createAccount(1000)

myAccount(500)
myAccount(200)
myAccount(300)
console.log("=======================================")

function createMultiplier(number) {
  return function (value) {
    return value * number
  }
}

const double = createMultiplier(2)
const triple = createMultiplier(3)

console.log(double(5))
console.log(triple(5))