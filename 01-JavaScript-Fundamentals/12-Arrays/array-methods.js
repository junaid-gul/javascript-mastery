// Add and remove elements

const courseNames = ['JavaScript', 'HTML', 'CSS']

courseNames.push('React')
console.log(courseNames)

courseNames.pop()
console.log(courseNames)

courseNames.unshift('Bootstrap')
console.log(courseNames)

courseNames.shift()
console.log(courseNames)


// Search methods

console.log(courseNames.includes('CSS'))
console.log(courseNames.indexOf('CSS'))


// slice - returns a portion without changing the original

const selectedCourses = courseNames.slice(0, 2)

console.log(selectedCourses)
console.log(courseNames)


// splice - adds, removes, or replaces elements

courseNames.splice(1, 1, 'Tailwind')

console.log(courseNames)


// forEach - runs a function for each element

courseNames.forEach(course => {
  console.log(course)
})


// map - creates a new array by transforming elements

const courseLabels = courseNames.map(course => {
  return `Course: ${course}`
})

console.log(courseLabels)


// filter - creates a new array with matching elements

const longCourseNames = courseNames.filter(course => {
  return course.length > 5
})

console.log(longCourseNames)


// find - returns the first matching element

const firstLongCourse = courseNames.find(course => {
  return course.length > 5
})

console.log(firstLongCourse)


// reduce - combines elements into one value

const scores = [10, 20, 30, 40]

const totalScore = scores.reduce((total, score) => {
  return total + score
}, 0)

console.log(totalScore)