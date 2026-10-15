
const developer = {
  name: "Junaid",
  age: 21,
  role: "Frontend Developer",
  location: {
    city: "Peshawar",
    country: "Pakistan"
  }
}

const { name, age, role } = developer

console.log(name)
console.log(age)
console.log(role)

const { experience = 0 } = developer

console.log(experience)

const { name: developerName } = developer

console.log(developerName)

const {
  location: { city, country }
} = developer

console.log(city)
console.log(country)

function introduce({ name, role }) {
  console.log(`${name} is a ${role}`)
}

introduce(developer)

const { name: personName, ...otherDetails } = developer

console.log(personName)
console.log(otherDetails)