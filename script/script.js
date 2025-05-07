// * script mobile menu
document.addEventListener('DOMContentLoaded', () => {

    const burger = document.getElementById('hamburgerMenu');
    const links = document.getElementById('navLinks');
    burger.addEventListener('click', function () {
        this.classList.toggle('active');
        links.classList.toggle('active');
    });
});

document.getElementById('hamburgerMenu').addEventListener('click', function () {
    this.classList.toggle('active');
    document.getElementById('navLinks').classList.toggle('active');
});

