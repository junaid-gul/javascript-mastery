const dayNumber = 2

switch (dayNumber) {
  case 1:
    console.log('Monday')
    break
  case 2:
    console.log('Tuesday')
    break
  case 3:
    console.log('Wednesday')
    break
  default:
    console.log('Invalid day')
}

const userAge = 22
const accessStatus = userAge >= 18 ? 'Allowed' : 'Denied'

console.log(accessStatus)