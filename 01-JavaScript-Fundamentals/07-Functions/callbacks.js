// A function passed as an argument is a callback
function greetUser() {
  console.log('Hello, Junaid')
}

function runFunction(callback) {
  callback()
}

runFunction(greetUser)


// Callback with an arrow function
function showMessage(callback) {
  callback()
}

showMessage(() => {
  console.log('Welcome to JavaScript')
})


// Callback receiving a value
function processUser(userName, callback) {
  callback(userName)
}

processUser('Junaid', name => {
  console.log(`Hello, ${name}`)
})