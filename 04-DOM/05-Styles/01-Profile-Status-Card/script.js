const profileName = document.querySelector("#profileName");
const bio = document.querySelector("#bio");
const status = document.querySelector("#status");
const activateBtn = document.querySelector("#activateButton");
const deactivateBtn = document.querySelector("#deactivateButton");
const toggleBtn = document.querySelector("#toggleBioButton");
const resetBtn = document.querySelector("#resetButton");

resetBtn.addEventListener("click", function () {
  profileName.classList.remove("active");
  status.textContent = "Status: Offline";
  if (bio.classList.contains("hidden")) {
    bio.classList.remove("hidden");
  }
  if (status.classList.contains("success")) {
    status.classList.remove("success");
  }
  if (status.classList.contains("danger")) {
    status.classList.remove("danger");
  }
});  

activateBtn.addEventListener("click", function (dets) {
  profileName.classList.add("active");
  status.textContent = "Status: Online";
  status.classList.add("success");
});

deactivateBtn.addEventListener("click", function (dets) {
  profileName.classList.remove("active");
  status.textContent = "Status: Offline";
  status.classList.replace("success", "danger");
});

toggleBtn.addEventListener("click", function (dets) {
  bio.classList.toggle("hidden");
  console.log(bio.classList.contains("hidden"));
});

