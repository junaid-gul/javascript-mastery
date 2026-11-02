let university = {
    name: "Islamia College",
    location: "Peshawar",
    departments: ["CS", "IT", "SE"],
    students: [
        {
            name: "Ali",
            marks: [75, 80, 90]
        },
        {
            name: "Junaid",
            marks: [85, 88, 92]
        }
    ]
}

console.log(university.name)
console.log(university.location)
console.log(university.departments[1])
console.log(university.students[1].name)
console.log(university.students[1].marks[1])
// console.log(university)

// const jsonUni = JSON.stringify(university)
// console.log(jsonUni)
// console.log(typeof (jsonUni))


for (let i = 0; i < university.departments.length; i++)
{
    console.log(university.departments[i])
}
for (let i = 0; i <university.students.length; i++)
{
    console.log(university.students[i].name)

}
for(let i = 0; i < university.students.length; i++)
{
    console.log(university.students[1].marks[i] , " ")
}

for(let dep of university.departments)
{
    console.log(dep)
}

for (let nam of university.students)
{
    console.log(nam)
}

for (let marks of university.students)
{
    console.log(marks)
}



university.departments.forEach(function(dep){
    console.log(dep)
})

university.students.forEach(function(studentNames){
    console.log(studentNames.name)
})

university.students.forEach(function(std){
    std.marks.forEach(function(mark){
        console.log(mark)
    })
})