
const courseNames = ['JavaScript', 'HTML', 'CSS']

const [firstCourse, secondCourse, thirdCourse] = courseNames

console.log(firstCourse)
console.log(secondCourse)
console.log(thirdCourse)


// Skipping an element

const numbers = [10, 20, 30]

const [firstNumber, , thirdNumber] = numbers

console.log(firstNumber)
console.log(thirdNumber)


// Default value

const studentNames = ['Junaid']

const [studentOne, studentTwo = 'Guest'] = studentNames

console.log(studentOne)
console.log(studentTwo)


// Rest operator with destructuring

const skills = ['HTML', 'CSS', 'JavaScript', 'React']

const [mainSkill, ...otherSkills] = skills

console.log(mainSkill)
console.log(otherSkills)


