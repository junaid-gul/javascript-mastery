const form = document.querySelector("#todoForm")
const input = document.querySelector("#todoInput")
const todoList = document.querySelector("#todoList")


form.addEventListener("submit", function(e){
    e.preventDefault()

    let inpValue = input.value

    const li = document.createElement("li")
    const div = document.createElement("div")
    const span = document.createElement("span")
    const deleteBtn = document.createElement("button")
    const completeBtn = document.createElement("button")

    li.classList.add("todo-item")
    span.classList.add("task-text")
    div.classList.add("actions")
    completeBtn.classList.add("complete-btn")
    deleteBtn.classList.add("delete-btn")

    span.textContent = inpValue
    completeBtn.textContent = "Complete"
    deleteBtn.textContent = "Delete"

    li.append(span)
    li.append(div)

    div.append(completeBtn)
    div.append(deleteBtn)

    todoList.append(li)

    input.value = ""
})


todoList.addEventListener("click", function(e){

    if(e.target.classList.contains("delete-btn")){
        e.target.parentElement.parentElement.remove()
    }

    if(e.target.classList.contains("complete-btn")){
        const li = e.target.parentElement.parentElement
        const span = li.querySelector(".task-text")

        span.classList.toggle("completed")
    }

})