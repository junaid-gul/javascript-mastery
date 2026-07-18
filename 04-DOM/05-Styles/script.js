// Select elements
const dashboardTitle = document.querySelector("#dashboardTitle")
const welcomeMessage = document.querySelector("#welcomeMessage")
const saveButton = document.querySelector("#saveButton")
const toggleButton = document.querySelector("#toggleButton")

// Styles practice
// console.log(dashboardTitle.style)
// console.log(typeof dashboardTitle.style)
// console.log(dashboardTitle.style.constructor.name)
// console.dir(dashboardTitle.style)
// console.log(dashboardTitle.style.color)
// const computedStyles = getComputedStyle(dashboardTitle)
// console.log(computedStyles.color)
// dashboardTitle.style.color = "crimson"
// saveButton.style.backgroundColor = "seagreen"
// saveButton.style.color = "white"
// saveButton.style.borderRadius = "8px"
// console.log(saveButton.style.backgroundColor)
// console.log(getComputedStyle(dashboardTitle).color)
// console.log(getComputedStyle(dashboardTitle).fontSize)
// console.log(getComputedStyle(saveButton).backgroundColor)

// ClassList practice
dashboardTitle.classList.add("completed")
dashboardTitle.classList.add("large-text")
saveButton.classList.add("rounded")
saveButton.classList.add("active")
welcomeMessage.classList.add("success")
welcomeMessage.classList.add("hidden")
console.log(dashboardTitle.className)
console.log(welcomeMessage.className)
console.log(saveButton.className)
dashboardTitle.classList.remove("large-text")
// saveButton.classList.remove("active")
console.log(dashboardTitle.className)
console.log(welcomeMessage.className)

// Toggle and check class
toggleButton.addEventListener("click", () => {
    welcomeMessage.classList.toggle("hidden")

    console.log(
        welcomeMessage.classList.contains("hidden")
    )
})
saveButton.classList.replace("active", "danger")