const heading = document.querySelector("#heading")
heading.textContent = "Learning JavaScript DOM"

const para = document.querySelector("#para")
para.textContent = "I am becoming a Frontend Developer."
para.textContent = "JavaScript is Awesome!"
para.textContent = "Practice makes perfect."
console.log(para)
const btn = document.querySelector("#btn")
btn.textContent = "Start learning"

console.log(heading.textContent)
console.log(heading.innerText)
console.log(para.textContent)
console.log(para.innerText)

para.innerText = "practise time man"
console.log(para.textContent)
console.log(para.innerText)

const box = document.querySelector("#box")
box.innerHTML += `<ul>
<li>C++</li>
<li>C</li>
<li>Java</li> </ul>
`
console.dir(box)