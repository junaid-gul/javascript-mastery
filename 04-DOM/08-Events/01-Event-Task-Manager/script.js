const form = document.querySelector("#taskForm");
const inp = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");

const totalCount = document.querySelector("#totalCount");
const completeCount = document.querySelector("#completedCount");

const taskList = document.querySelector("#taskList");
const showMessage = document.querySelector("#message");

let storetask = 0;
let completedTask = 0;

form.addEventListener("submit", function (e) {
  e.preventDefault(); 
  console.log(inp.value);
  if(inp.value.trim() == ""){
    showMessage.textContent = "Please enter a task."
    return
  }
  // Create Task
  const li = document.createElement("li");
  li.textContent = inp.value;
  li.classList.add("task");

  taskList.append(li);
  showMessage.textContent = "Task added successfully."

  inp.value = "";
  
  storetask++;
  totalCount.textContent = storetask;

  // Complete Button
  const btn = document.createElement("button");

  btn.textContent = "Complete";
  btn.classList.add("complete");

  li.append(btn);

  btn.addEventListener("click", function (e) {
    btn.textContent = "Completed";
    btn.disabled = true
    completedTask++
    completeCount.textContent = completedTask;
    showMessage.textContent = "Task completed"
    // if (!btn.parentElement.classList.contains("completed")) {
    //   completedTask++;
    //   completeCount.textContent = completedTask;
    // }
    btn.closest(".task").classList.add("completed");

  });
  // Delete Button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete");

  li.append(deleteBtn);
  deleteBtn.addEventListener("click", function (e) {
    deleteBtn.closest(".task").remove();
    if(btn.parentElement.classList.contains("completed")){
      completedTask--
      showMessage.textContent = "Task removed"
     
    }
    storetask--
    completeCount.textContent = completedTask;
    totalCount.textContent = storetask;

  });
  console.log(taskList);
});
