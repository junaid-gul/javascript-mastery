const shoppingList = document.querySelector("#shopping-list")
const breadItem = document.querySelector("#bread")

const oldItem = document.createElement("li")
const newItem = document.createElement("li")
const item1 = document.createElement("li")
const item2 = document.createElement("li")
const item3 = document.createElement("li")
const item4 = document.createElement("li")
const firstItem = document.createElement("li")
const replaceItem = document.createElement("li")
const breadCopy = breadItem.cloneNode(true)

oldItem.textContent = "Chicken"
newItem.textContent = "Chocolate"
item1.textContent = "Butter"
item2.textContent = "Cheese"
item3.textContent = "Juice"
item4.textContent = "Rice"
firstItem.textContent = "Water"
replaceItem.textContent = "Replace bread"

// appendChild()
shoppingList.appendChild(newItem)
shoppingList.appendChild(item1)
shoppingList.appendChild(item2)

// append()
shoppingList.append(item3, item4)

// prepend()
shoppingList.prepend(firstItem)
shoppingList.prepend(oldItem)

// before()
breadItem.before(newItem)

// after()
breadItem.after(newItem)

// remove()
item2.remove()
console.log(item2.isConnected)

// removeChild()
shoppingList.removeChild(item1)

// replaceWith()
// breadItem.replaceWith(replaceItem)

// replaceChild()
shoppingList.replaceChild(newItem, oldItem)

// cloneNode()
shoppingList.append(breadCopy)

// insertBefore()
shoppingList.insertBefore(newItem, breadCopy)