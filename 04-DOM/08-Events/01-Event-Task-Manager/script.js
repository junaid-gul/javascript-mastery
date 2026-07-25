const form = document.querySelector("#taskForm")
const inp = document.querySelector("#taskInput")
const addBtn = document.querySelector("#addBtn")

const totalCount = document.querySelector("#totalCount")
const completeCount = document.querySelector("#completedCount")

const taskList = document.querySelector("#taskList")
const showMessage = document.querySelector("#message")

let storetask = 0
let completedTask = 0

form.addEventListener("submit", function(e) {

    e.preventDefault()

    console.log(inp.value)

    // Create Task
    const li = document.createElement("li")
    li.textContent = inp.value
    li.classList.add("task")

    taskList.append(li)

    inp.value = ""
    storetask++
    totalCount.textContent = storetas

    // Complete Button
    const btn = document.createElement("button")

    btn.textContent = "Complete"
    btn.classList.add("complete")

    li.append(btn)
    btn.addEventListener("click", function(e) {

        btn.textContent = "Completed"

        completedTask++

        completeCount.textContent = completedTask

        btn.closest(".task").classList.add("completed")

    })
    // Delete Button
    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Delete"
    deleteBtn.classList.add("delete")

    li.append(deleteBtn)
    deleteBtn.addEventListener("click", function(e) {

        deleteBtn.closest(".task").remove()
        completedTask--
        completeCount.textContent = completedTask

    })

})




