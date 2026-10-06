
const meetingDate = new Date('2026-12-15T14:30:45')

console.log(meetingDate.getFullYear())
console.log(meetingDate.getMonth())
console.log(meetingDate.getDate())
console.log(meetingDate.getHours())
console.log(meetingDate.getMinutes())



const eventDate = new Date('2026-10-06')

eventDate.setFullYear(2027)
eventDate.setMonth(5)
eventDate.setDate(20)

console.log(eventDate)


// Setting time

eventDate.setHours(10)
eventDate.setMinutes(30)

console.log(eventDate)


// Timestamp

const currentTime = new Date()

console.log(currentTime.getTime())


// Creating a date from a timestamp

const timestampDate = new Date(0)

console.log(timestampDate)


// Formatting a date

const formattedDate = new Date()

console.log(formattedDate.toDateString())
console.log(formattedDate.toTimeString())
console.log(formattedDate.toISOString())