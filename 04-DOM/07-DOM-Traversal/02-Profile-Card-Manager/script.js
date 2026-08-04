const profileList = document.querySelectorAll(".profile-list")
const profileCard = document.querySelectorAll(".profile-card")



const followBtns = document.querySelectorAll(".follow-btn")
const messageBtn = document.querySelectorAll(".message-btn")
const deleteBtn = document.querySelectorAll(".delete-btn")

const followerCount = document.querySelector(".followers-count")
let storeCount = 0
followBtns.forEach(followBtn =>{
    followBtn.addEventListener("click", function(e){
        followBtn.textContent = "Following"
        storeCount++
        followerCount.textContent = storeCount
    })
    console.log("check ")
})




