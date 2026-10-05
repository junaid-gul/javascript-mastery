// Function scope
const websiteTitle = "DevHub";

function showProfile() {
  const profileName = "Alex";

  console.log(websiteTitle);
  console.log(profileName);
}

showProfile();

console.log(websiteTitle);

// Block scope: let and const vs var
const pageMode = "dark";

if (true) {
  let notificationCount = 3;
  const sidebarState = "open";
  var menuStatus = "visible";

  console.log(notificationCount);
  console.log(sidebarState);
  console.log(menuStatus);
}

console.log(menuStatus);

// Shadowing in function scope
const message = "Outside";

function display() {
  const message = "Inside";

  console.log(message);
}

display();

// Function variable shadows outer variable
const accessLevel = "viewer";

function openPanel() {
  const accessLevel = "editor";

  console.log(accessLevel);
}

openPanel();

console.log(accessLevel);

// Block shadowing
const displayMode = "light";

if (true) {
  const displayMode = "dark";

  console.log(displayMode);
}

console.log(displayMode);

// var is not block scoped
var notificationState = "unread";

{
  var notificationState = "read";

  console.log(notificationState);
}

console.log(notificationState);

// Shadowing across nested scopes
let orderStatus = "pending";

function processOrder() {
  let orderStatus = "processing";

  if (true) {
    let orderStatus = "completed";

    console.log(orderStatus);
  }

  console.log(orderStatus);
}

processOrder();

console.log(orderStatus);
