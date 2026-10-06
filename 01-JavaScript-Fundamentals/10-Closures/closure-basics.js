function outerFunction() {
  const message = 'Hello'

  function innerFunction() {
    console.log(message)
  }

  return innerFunction
}

const savedFunction = outerFunction()

savedFunction()

function createCounter() {
  let count = 0

  return function () {
    count++
    console.log(count)
  }
}

const counter = createCounter()

counter()
counter()
counter()
console.log("+++++++++++++++++++++")

function createLoginTracker(){
    let loginAttempt = 0
    return function (){
        loginAttempt++
        console.log("Login Attempt : ", loginAttempt)
    }
    
    }
    const login = createLoginTracker()
    login()
    login()
    login()
 
