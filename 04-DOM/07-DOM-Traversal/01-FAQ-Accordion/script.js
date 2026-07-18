const toggleButtons = document.querySelectorAll(".toggle-btn")
const allAnswer = document.querySelectorAll(".answer")

toggleButtons.forEach(toggleButton => {

    toggleButton.addEventListener("click", function (event) {

        // Get current FAQ
        const faq = toggleButton.closest(".faq")

        // Get current answer
        const answer = faq.lastElementChild

        // Close other answers
        allAnswer.forEach(ans => {

            if (ans !== answer) {
                ans.classList.remove("show")
            }

            // Reset other button icons
            const question = ans.parentElement.firstElementChild
            const button = question.lastElementChild

            button.textContent = "+"
        })

        // Toggle current answer
        answer.classList.toggle("show")

        // Update current button icon
        if (answer.classList.contains("show")) {
            toggleButton.textContent = "-"
        } else {
            toggleButton.textContent = "+"
        }

    })

})