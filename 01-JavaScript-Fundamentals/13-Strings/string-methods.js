
const courseName = 'JavaScript'

console.log(courseName.toUpperCase())
console.log(courseName.toLowerCase())


// Removing spaces

const userInput = '   Junaid   '

console.log(userInput.trim())


// Checking text

const message = 'I am learning JavaScript'

console.log(message.includes('JavaScript'))
console.log(message.startsWith('I'))
console.log(message.endsWith('JavaScript'))


// Finding position

console.log(message.indexOf('learning'))


// Extracting text

const languageName = 'JavaScript'

console.log(languageName.slice(0, 4))
console.log(languageName.substring(4, 10))


// Replacing text

const welcomeMessage = 'Hello Ali'

console.log(welcomeMessage.replace('Ali', 'Junaid'))

const repeatedMessage = 'JavaScript is fun. JavaScript is powerful.'

console.log(repeatedMessage.replaceAll('JavaScript', 'JS'))


// Splitting a string into an array

const skills = 'HTML,CSS,JavaScript'

console.log(skills.split(','))

// Joining array values back into a string
const skillList = ['HTML', 'CSS', 'JavaScript']

console.log(skillList.join(', '))