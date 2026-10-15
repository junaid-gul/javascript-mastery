
const student = {
  name: "Junaid",
  age: 21,
  semester: 5,

  introduce() {
    console.log(`My name is ${this.name}`)
  },

  getAge() {
    return this.age
  },

  study(subject) {
    console.log(`${this.name} is studying ${subject}`)
  }
}

student.introduce()

console.log(student.getAge())

student.study("JavaScript")

student.showSemester = function () {
  console.log(`I am in semester ${this.semester}`)
}

student.showSemester()

student.updateAge = function (newAge) {
  this.age = newAge
}

student.updateAge(22)
console.log(student.age)

student.getInfo = function () {
  return `${this.name} is ${this.age} years old`
}

console.log(student.getInfo())