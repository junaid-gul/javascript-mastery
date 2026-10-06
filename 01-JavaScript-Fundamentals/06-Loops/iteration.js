const courseNames = ['JavaScript', 'CSS', 'HTML', 'React']
for(let courseName of courseNames)
{
    console.log("Course Name is : " , courseName)
}

const studentProfile = {
  name: 'Junaid',
  age: 22,
  city: 'Peshawar'
}

for(let key in studentProfile){
    console.log(key, studentProfile[key])
}