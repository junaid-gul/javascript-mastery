const student = {
  name: "Junaid",
  age: 21,
  semester: 5,
  skills: ["HTML", "CSS", "JavaScript"],
  isLearning: true,
};

console.log(student.name);
console.log(student.age);
console.log(student.semester);
console.log(student.skills[2]);
console.log(student.isLearning);

const sem = "semester";
console.log(student[sem]);

student.university = "ICP";
student.age = 22;

for (const key in student) {
  console.log(key, student[key]);
}

for (const key of Object.keys(student)) {
  console.log(key);
}

for (const value of Object.values(student)) {
  console.log(value);
}

for (const [key, value] of Object.entries(student)) {
  console.log(`${key}: ${Array.isArray(value) ? value.join(", ") : value}`);
}

delete student.isLearning;

console.log(student);
