const Student = {
  name: "Muskan",
  age: 22,
  departmet: "CS",
  semester: 5,
};

const jsonStudent = JSON.stringify(Student);
console.log(jsonStudent);
console.log(typeof jsonStudent);
const objectStudent = JSON.parse(jsonStudent);
console.log(objectStudent);
console.log(typeof objectStudent);

const jsonData = `{
  "student": {
    "name": "Muskan",
    "age": 22,
    "department": "CS",
    "semester": 5
  },
  "university": {
    "name": "Islamia College University",
    "city": "Peshawar"
  }
}`;

const jsonObject = JSON.parse(jsonData);
console.log(jsonObject.student.name);
console.log(jsonObject.student.age);
console.log(jsonObject.student.department);
console.log(jsonObject.student.semester);

console.log(jsonObject.university.name)
