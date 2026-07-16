// const shoppingList =document.querySelector("#shopping-list")
// const breadItem = document.querySelector("#bread")
// const milkItem = document.querySelector("#milk")
// const eggsItem = document.querySelector("#eggs")

// const appleItem = document.createElement("li")
// const bananaItem = document.createElement("li")
// const orangeItem = document.createElement("li")
// const butterItem = document.createElement("li")
// const breadCopy = breadItem.cloneNode(true)
// const replacementItem = document.createElement("li")

// appleItem.textContent = "Apple"
// bananaItem.textContent = "Banana"
// orangeItem.textContent = "Orange"
// butterItem.textContent = "Butter"
// breadCopy.textContent = "Whole Wheat Bread"
// replacementItem.textContent = "Almond Milk"

// appleItem.classList.add("shopping-item")
// bananaItem.classList.add("shopping-item")
// orangeItem.classList.add("shopping-item")
// butterItem.classList.add("shopping-item")
// breadCopy.classList.add("shopping-item")
// replacementItem.classList.add("shopping-item")

// const item = [
//     appleItem,
//     bananaItem,
//     orangeItem,
//     butterItem,
//     breadCopy,
//     replacementItem
// ]

// item.forEach(item=>{
//     item.classList.add("shopping-item")
// })


// shoppingList.append(appleItem)
// shoppingList.prepend(bananaItem)
// breadItem.before(orangeItem)
// breadItem.after(butterItem)
// shoppingList.append(breadCopy)
// milkItem.replaceWith(replacementItem)
// eggsItem.remove()
// console.log(shoppingList)

const shoppingList =document.querySelector("#shopping-list")
const addBtn = document.querySelector("#add-btn")
const deleteBtn = document.querySelectorAll(".delete-btn")
const duplicateBtn = document.querySelector("#duplicate-btn")
const replaceBtn = document.querySelector("#replace-btn")
const clearBtn = document.querySelector("#clear-btn")
const itemInput = document.querySelector("#item-input")
const shoppingItem = document.querySelector("#shopping-item")
const eggsItem = document.querySelector("#eggs")
const milkItem = document.querySelector("#milk")
const breadItem = document.querySelector("#bread")




addBtn.addEventListener("click", function(dets){
    const newItem = document.createElement("li")
    const spanForText = document.createElement("span")
    const deleteBtn = document.createElement("button")

    newItem.classList.add("shopping-item")
    spanForText.classList.add("item-text")
    deleteBtn.classList.add("delete-btn")

    spanForText.textContent = itemInput.value
    deleteBtn.textContent = "Delete"
    shoppingList.append(newItem)
    newItem.append(spanForText)
    newItem.append(deleteBtn)
    deleteBtn.addEventListener("click", function(dets){
        const newdeleteBtn = dets.target.parentElement
        newdeleteBtn.remove()
    })

    itemInput.value = " "
})

deleteBtn.forEach(button =>{
    button.addEventListener("click", function(dets){
        const delet = dets.target.parentElement
        delet.remove()
    })
})

duplicateBtn.addEventListener("click", function(dets){
    const breadCopy = breadItem.cloneNode(true)
    shoppingList.append(breadCopy)
    // console.log(breadCopy.querySelector(".delete-btn"))
    // console.log(dets.target.parentElement)
    const copyDeleteBtn = breadCopy.querySelector(".delete-btn")
    copyDeleteBtn.addEventListener("click", function(dets){
        breadCopy.remove()
    })
})

replaceBtn.addEventListener("click", function(dets){
     const almondItem = document.createElement("li")
    const spanForText = document.createElement("span")
    const deleteBtn = document.createElement("button")

    almondItem.classList.add("shopping-item")
    spanForText.classList.add("item-text")
    deleteBtn.classList.add("delete-btn")

    spanForText.textContent = "Almond milk"
    deleteBtn.textContent = "Delete"
    almondItem.append(spanForText)
    almondItem.append(deleteBtn)   
    milkItem.replaceWith(almondItem)
    deleteBtn.addEventListener("click", function(dets){
        const newdeleteBtn = dets.target.parentElement
        newdeleteBtn.remove()
    })                
})    

clearBtn.addEventListener("click", function(dets){
    const allListItem = document.querySelectorAll(".shopping-item")
     allListItem.forEach(allListItem =>{
        allListItem.remove()
    })
    // console.log(allListItem)
})