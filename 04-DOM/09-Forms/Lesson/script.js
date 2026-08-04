const registrationForm = document.querySelector("#registrationForm")

// Inputs
const fullName = document.querySelector("#name")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const age = document.querySelector("#age")
const dob = document.querySelector("#dob")
const country = document.querySelector("#country")
const bio = document.querySelector("#bio")
const terms = document.querySelector("#terms")

const genderRadios = document.querySelectorAll('input[name="gender"]')
const skillCheckboxes = document.querySelectorAll('input[name="skills"]')
const output = document.querySelector("#output")
const resetBtn = document.querySelector("#resetbutton")

registrationForm.addEventListener("submit", function (e) {
  e.preventDefault()

  const isValid = registrationForm.checkValidity()
  console.log(isValid)

  if (registrationForm.reportValidity()) {
    console.log("true")
  }
  // FormData
  const formData = new FormData(registrationForm)
  console.log(formData.get("name"))
  console.log(formData.get("email"))
  console.log(formData)

  for (const [key, value] of formData.entries()) {
    console.log(key, value)
  }

  // console.log("Name:", fullName.value)
  // console.log("Email:", email.value)
  // console.log("Password:", password.value)
  // console.log("Age:", age.value)
  // console.log("Date of Birth:", dob.value)
  // console.log("Country:", country.value)
  // console.log("Bio:", bio.value)
  // console.log("Terms Accepted:", terms.checked)

  // Selected gender
  genderRadios.forEach(gender => {
    if (gender.checked) {
      console.log(gender.value)
    }
  })

  skillCheckboxes.forEach(checkbox => {
    if (checkbox.checked) {
      console.log("Skill is:", checkbox.value)
    }
  })
 output.textContent = `
Registration Summary

Name: ${fullName.value}
Email: ${email.value}
Password: ${password.value}
Age: ${age.value}
Date of Birth: ${dob.value}
Country: ${country.value}
Bio: ${bio.value}
Terms Accepted: ${terms.checked ? "Yes" : "No"}
`

  console.log("Form Submitted")
})

// Reset form
resetBtn.addEventListener("click", function (e) {
  console.log("Reseting fom...")
  registrationForm.reset()
})