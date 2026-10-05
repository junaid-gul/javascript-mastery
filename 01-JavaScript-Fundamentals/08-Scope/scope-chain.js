// Scope chain: current scope → outer scope → global
const platformName = 'CodeLab'

function createCourse() {
  const courseName = 'JavaScript'

  function showCourse() {
    const lessonNumber = 5

    console.log(lessonNumber)
    console.log(courseName) // Found in outer function scope
    console.log(platformName) // Found in global scope
  }

  showCourse()
}

createCourse()

// Shadowing: inner variable takes priority
const themeName = 'light'

function buildPage() {
  const themeName = 'dark'

  function previewPage() {
    const previewText = 'Preview'
    console.log(previewText)
    console.log(themeName) // Uses the nearest themeName
  }

  previewPage()
}

buildPage()
console.log(themeName)

// Assignment changes the variable found in the outer scope
let accountStatus = 'offline'

function connectAccount() {
  function updateStatus() {
    accountStatus = 'online'
  }

  updateStatus()
  console.log(accountStatus)
}

connectAccount()
console.log(accountStatus)