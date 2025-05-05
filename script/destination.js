const burger = document.getElementById("burger");

const phoneMenu = document.getElementById("phone-menu");

const cross = document.getElementById("close");

// Bouton pour ouvrir le menu
burger.addEventListener("click", () => {
    phoneMenu.classList.remove("hidden");
})

// Bouton pour fermer le menu
cross.addEventListener("click", () => {
    phoneMenu.classList.add("hidden")
})