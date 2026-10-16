const cards = document.querySelectorAll(".path-card");
cards.forEach(card => {
    card.addEventListener("click", () => {
        cards.forEach(c => c.setAttribute("aria-pressed", false))
        card.setAttribute("aria-pressed", true)
    })
})