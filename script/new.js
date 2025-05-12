document.addEventListener('DOMContentLoaded', () => {

    const burger = document.getElementById('hamburgerMenu');
    const links = document.getElementById('navLinks');
    burger.addEventListener('click', function () {
        this.classList.toggle('active');
        links.classList.toggle('active');
    });

    const top = document.querySelector('.back-to-top');

    top.addEventListener("click", function () {
        window.scrollTo(0, 0);
    });
});
