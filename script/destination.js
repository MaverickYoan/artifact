// const burgerCross = document.getElementById("burger");

const phoneMenu = document.getElementById("phone-menu");

// const cross = document.getElementById("close");

const burgerCross = function () {
    burgerCross.addEventListener("click", () => {
        phoneMenu.classList.remove("hidden");
    })

}
const cross = function () {
    cross.addEventListener("click", () => {
        phoneMenu.classList.remove("hidden");
    })

}

// Bouton pour ouvrir le menu
// burgerCross.addEventListener("click", () => {
//     phoneMenu.classList.remove("hidden");
// })

// Bouton pour fermer le menu
// cross.addEventListener("click", () => {
//     phoneMenu.classList.add("hidden")
// })