const paths = document.querySelector("#roadmap_paths");
if (paths) {
    const cards = paths.querySelectorAll(".path-card");
    cards.forEach(card => {
        card.addEventListener("click", () => {
            cards.forEach(c => c.setAttribute("aria-pressed", false))
            card.setAttribute("aria-pressed", true)
        })
    })
}