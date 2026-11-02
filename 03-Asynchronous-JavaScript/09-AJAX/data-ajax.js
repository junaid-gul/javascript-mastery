// const xhr = new XMLHttpRequest();
// xhr.open("GET", "data.json", true)
// xhr.onload = function(){
//     if (xhr.status === 200){
//         let dataObj = JSON.parse(xhr.responseText)
//         console.log(dataObj)
//     }
// }

// xhr.send()

// console.log("JavaScript file connected")

const stdBtn = document.querySelector("#std-btn")
const stdData = document.querySelector("#std-data")

stdBtn.addEventListener("click", function() {

    const xhr = new XMLHttpRequest()

    xhr.open("GET", "data.json", true)

    xhr.onload = function() {

        if (xhr.status === 200) {

            let dataObj = JSON.parse(xhr.responseText)

            let name = document.createElement("h2")
            name.textContent = dataObj.name

            let age = document.createElement("h2")
            age.textContent = dataObj.age

            let city = document.createElement("p")
            city.textContent = dataObj.city

            let department = document.createElement("h2")
            department.textContent = dataObj.department

            let sem = document.createElement("p")
            sem.textContent = dataObj.semester

            let skills = document.createElement("div")

            for (let i = 0; i < dataObj.skills.length; i++) {
                let p = document.createElement("p")
                p.textContent = dataObj.skills[i]
                skills.append(p)
            }

            stdData.append(name, age, city, department, sem, skills)
        }
    }

    xhr.send()
})