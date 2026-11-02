const jsonData = `{
  "university": {
    "name": "Islamia College University",

    "location": {
      "city": "Peshawar",
      "country": "Pakistan"
    },

    "departments": [
      {
        "id": 1,
        "name": "Computer Science",

        "students": [
          {
            "id": 101,
            "name": "Muskan",
            "semester": 5,

            "courses": [
              {
                "courseName": "JavaScript",
                "marks": 85,

                "instructor": {
                  "name": "Ahmad",
                  "experience": 5
                }
              },
              {
                "courseName": "Database",
                "marks": 90,

                "instructor": {
                  "name": "Ali",
                  "experience": 3
                }
              }
            ]
          },
          {
            "id": 102,
            "name": "Junaid",
            "semester": 5,

            "courses": [
              {
                "courseName": "JavaScript",
                "marks": 92,

                "instructor": {
                  "name": "Ahmad",
                  "experience": 5
                }
              },
              {
                "courseName": "Networking",
                "marks": 78,

                "instructor": {
                  "name": "Usman",
                  "experience": 4
                }
              }
            ]
          }
        ]
      },

      {
        "id": 2,
        "name": "Software Engineering",

        "students": [
          {
            "id": 201,
            "name": "Sara",
            "semester": 4,

            "courses": [
              {
                "courseName": "HTML",
                "marks": 88,

                "instructor": {
                  "name": "Hassan",
                  "experience": 6
                }
              }
            ]
          }
        ]
      }
    ]
  }
}`;

const universityData = JSON.parse(jsonData);

const jsonObject = JSON.parse(jsonData)

console.log(jsonObject.university.name)

console.log(jsonObject.university.location.city)
console.log(jsonObject.departments.name)
console.log(jsonObject.departments.name)
