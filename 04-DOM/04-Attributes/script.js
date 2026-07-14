const profilePhoto = document.querySelector("#profilePhoto")
const protfoliloLink = document.querySelector("#portfolioLink")
const emailInput = document.querySelector("#emailInput")
const loginBtn = document.querySelector("#loginBtn")


//Lets read the attribute of img whoes id is profilePhoto
console.log(profilePhoto.getAttribute("src"))
console.log(profilePhoto.getAttribute("alt"))
console.log(profilePhoto.getAttribute("width"))
//Change the attribute of img
profilePhoto.setAttribute("src","javascript.png")
profilePhoto.setAttribute("alt","js pic")
profilePhoto.setAttribute("width","100")
//Add new attributre 
profilePhoto.setAttribute("title","Junaid GUl")

// Now read the attribute of anchor tag whoes id is protfolioLink
console.log(protfoliloLink.getAttribute("href"))
console.log(protfoliloLink.getAttribute("target"))
//Change the attribut of portfoliolink also
protfoliloLink.setAttribute("href", "https://github.com/junaid-gul")
protfoliloLink.setAttribute("target", "_self")
//Remove targer attribute 
protfoliloLink.removeAttribute("target")

//Read attribute of email input
console.log(emailInput.getAttribute("type"))
console.log(emailInput.getAttribute("placeholder"))
//chnage placeholder of email input
emailInput.setAttribute("placeholder","Man enter your university email")


//Add ttile attribut in loginBtn
loginBtn.setAttribute("title", "Clink to login")
//remove attribute from login btn
loginBtn.removeAttribute("disabled")


//hasAttribute 
console.log(profilePhoto.hasAttribute("alt"))
console.log(profilePhoto.hasAttribute("height"))
console.log(loginBtn.hasAttribute("disabled"))
console.log(protfoliloLink.hasAttribute("target"))


//DOM Properties vs Attributes Practice
const displayName = document.querySelector("#displayName")
const acceptRule = document.querySelector("#acceptRules")
const savechangesBtn = document.querySelector("#saveChangesBtn")



console.log(displayName.getAttribute("value"))
console.log(displayName.value)

displayName.value = "Junaid GUl Fronted Devloper"
console.log(displayName.getAttribute("value"))
console.log(displayName.value)

displayName.setAttribute("value", "Junaid")
console.log(displayName.getAttribute("value"))
console.log(displayName.value)

console.log(acceptRule.getAttribute("checked"))
console.log(acceptRule.checked)

acceptRule.checked = false
console.log(acceptRule.getAttribute("checked"))
console.log(acceptRule.checked)

console.log(savechangesBtn.getAttribute("disabled"))
console.log(savechangesBtn.disabled)

savechangesBtn.disabled = false
console.log(savechangesBtn.getAttribute("disabled"))
console.log(savechangesBtn.disabled)

//Custom Attributes (data-*)
const courseCard = document.querySelector("#courseCard")

console.log(courseCard.getAttribute("data-course-id"))
console.log(courseCard.getAttribute("data-instructor"))
console.log(courseCard.getAttribute("data-price"))
console.log(courseCard.getAttribute("data-level"))

courseCard.setAttribute("data-price", "499")
courseCard.setAttribute("data-level", "intermedite")

console.log(courseCard.getAttribute("data-price"))
console.log(courseCard.getAttribute("data-level"))

courseCard.setAttribute("data-duration", "08-week")
console.log(courseCard.getAttribute("data-duration"))
courseCard.removeAttribute("data-instructor")


console.log(courseCard.hasAttribute("data-instructor"))
console.log(courseCard.hasAttribute("data-price"))
console.log(courseCard.hasAttribute("data-level"))
console.log(courseCard.hasAttribute("data-course-id"))

////Custom Attributes Data Set practise
// const courseCard = document.querySelector("#courseCard")
const enrollBtn = document.querySelector("#enrollBtn")

console.log(courseCard.dataset)

console.log(courseCard.dataset.courseId)
console.log(courseCard.dataset.courseName)
console.log(courseCard.dataset.instructor)
console.log(courseCard.dataset.price)
console.log(courseCard.dataset.level)
console.log(courseCard.dataset.duration)

courseCard.dataset.price = "6999"
courseCard.dataset.level = "Advanced"
courseCard.dataset.duration = "10 Weeks"
courseCard.dataset.language = "English"

console.log(courseCard.dataset)
console.log(courseCard.dataset.language)

delete courseCard.dataset.instructor

console.log(courseCard.dataset)