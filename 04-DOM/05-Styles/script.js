const dashboardTitle = document.querySelector("#dashboardTitle")
const welcomeMessage = document.querySelector("#welcomeMessage")
const saveButton = document.querySelector("#saveButton")
const toggleButton = document.querySelector("#toggleButton")


// console.log(dashboardTitle.style)
// console.log(typeof dashboardTitle.style)
// console.log(dashboardTitle.style.constructor.name)
// console.dir(dashboardTitle.style)

// const dashboardTitle = document.querySelector("#dashboardTitle")
// console.log(dashboardTitle.style.color)
// const computedStyles = getComputedStyle(dashboardTitle)
// console.log(computedStyles.color)


// console.log(dashboardTitle.style.color)
// console.log(welcomeMessage.style.fontSize)
// dashboardTitle.style.color = "crimson"

// saveButton.style.backgroundColor = "seagreen"
// saveButton.style.color = "white"
// saveButton.style.borderRadius = "8px"
// console.log(saveButton.style.backgroundColor)


// console.log(getComputedStyle(dashboardTitle).color)
// console.log(getComputedStyle(dashboardTitle).fontSize)
// console.log(getComputedStyle(saveButton).backgroundColor)

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
toggleButton.addEventListener("click", () => {
    welcomeMessage.classList.toggle("hidden")

    console.log(
        welcomeMessage.classList.contains("hidden")
    )

})

saveButton.classList.replace("active", "danger")