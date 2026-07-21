const clickBtn = document.querySelector("#clickBtn")
const clickOutput = document.querySelector("#clickOutput")
const doubleBtn = document.querySelector("#doubleBtn")
let count = document.querySelector("#count")
const mouseBox = document.querySelector("#mouseBox")
const mouseOutput = document.querySelector("#mouseOutput")
const keyboardInput = document.querySelector("#keyboardInput")
const keyboardOutput = document.querySelector("#keyboardOutput")


// clickBtn.addEventListener("click",handleclick)
// doubleBtn.addEventListener("click", removeListerfromClickBtn)

// function removeListerfromClickBtn(event){
//     clickBtn.removeEventListener("click", handleclick)
//     clickOutput.textContent = " "
// }
// function handleclick(event){
//     clickOutput.textContent = "Button Cliked"
// }
let storeCount = 0
clickBtn.addEventListener("click", function(event){
    clickOutput.textContent = event.target.id
    event.currentTarget.id
    console.dir(clickOutput)
})
clickBtn.addEventListener("click", inceaseCount)
function inceaseCount(){
    storeCount++
    count.textContent = storeCount
    // console.log(storeCount)
    // clickOutput.style.display = `block`
}
doubleBtn.addEventListener("dblclick", resetCounter)
function resetCounter(){
    // storeCount = 0
    // count.textContent = storeCount
    // console.log("I am in dbclick")
    // console.log(storeCount)
 storeCount = 0
    count.textContent = `Counter ${storeCount} reset`
    console.log("Db click")
    
}

mouseBox.addEventListener("mousedown", handleMouseDown)
function handleMouseDown(){
    mouseBox.textContent = "Mouse Down"
    mouseBox.style.backgroundColor = "lightblue" }

mouseBox.addEventListener("mouseup", mouseUp)
function mouseUp(){
    mouseBox.textContent = "Mouse Up"
    mouseBox.style.backgroundColor = "green"
}

mouseBox.addEventListener("mouseenter", mouseEnter)
function mouseEnter(){
    mouseBox.textContent = "Mouse Enter"
    mouseBox.style.backgroundColor = "orange"
}

mouseBox.addEventListener("mouseleave", mouseLeave)
function mouseLeave(){
    mouseBox.textContent = "Mouse Leave"
    mouseBox.style.backgroundColor = "green"
} 
mouseBox.addEventListener("mousemove", mouseMove)
function mouseMove(){
    mouseBox.textContent = "Mouse Move"
}

keyboardInput.addEventListener("keydown", keyDown)
function keyDown(event){
    keyboardOutput.textContent =event.type
}
keyboardInput.addEventListener("keyup", keyUp)
function keyUp(){
    keyboardOutput.textContent = "Key Released"
}