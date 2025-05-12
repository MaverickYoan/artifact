import '../css/style-contact.css';
import './style.css';

document.getElementById('app')!.innerHTML = `
    

    <!-- * background -->

    <style>
        .home {
            background: url("/images/globeTrotters_AllInOne0.png");
            background-repeat: no-repeat;
            background-size: cover;
            overflow: hidden;
        }
    </style>

    <section class="home">
        <nav class="navbar">
            <div class="container mx-auto flex items-center justify-between">
                <h1 id="home">GlobeTrotters</h1>
                <div class="flex items-center gap-5">
                    <div class="hamburger-menu" id="hamburgerMenu">
                        <div class="bar"></div>
                        <div class="bar"></div>
                        <div class="bar"></div>
                    </div>
                    <ul class="nav-links" id="navLinks">
                        <li><a href="../index.html">À propos</a></li>
                        <li><a href="../destination.html">Destination</a></li>
                        <li><a href="../contact.html">Contact</a></li>
                        <li><a href="../new.html">New</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    
        <img alt="Logo" id="logo" class="w-12.5 mx-auto rounded-full" src="/images/logo.png">

    </section>
    <br>
        <a id="href" href="https://www.ou-et-quand.net/" target="_blank">Pour plus d'informations</a>
<br>
<br>
    <!-- * FOOTER -->

    
<!-- * NAVBAR -->
    <nav class='navbar'>
        <div class='hamburger-menu' id='hamburgerMenu'>
            <div class='bar'></div>
            <div class='bar'></div>
            <div class='bar'></div>
        </div>
        <ul class='nav-links' id='navLinks'>
            <li><a href='index.html'>Index</a></li>
            <li><a href='post.html'>Post</a></li>
            <li><a href='admin\index.php'>AdminIndex</a></li>
            <li><a href='admin\main.html'>AdminMain</a></li>
            <li><a href='admin\edit.html'>AdminEdit</a></li>
            <li><a href='#contact'>Contact</a></li>
        </ul>
    </nav>

    <!-- * Menu dropdown -->
    <details class='dropdown'>
        <summary class='btn m-1'>Menu</summary>
        <ul class='li-summary'>
            <li><a class='li-summary' href='#jour1'>Jour 1</a></li>
            <li><a class='li-summary' href='#jour2'>Jour 2</a></li>
            <li><a class='li-summary' href='#jour3'>Jour 3</a></li>
            <a></a>
        </ul>
    </details>
    <hr>

    <hr>

    <div><a class='href-billet' href='index.html'>Billets précédents</a><a class='href-billet' href='index.html'>Billets
            suivants</a></div>
    <hr>

    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

    <!-- * FOOTER -->
    <footer><!-- * droits / h6 -->
        <div class="droits">
            <h6>&copy; 2025 Projet_3. Tous droits réservés. Les images furent générées grâce à l'IA ChatGPT. @onlineformapro -
                <br>Mentions légales | Politique de confidentialité | Conditions générales de vente<br>
            </h6>
            <a class="agrees" href="https://www.ou-et-quand.net/" target="_blank">- Pour plus d'informations</a>
        </div>
    </footer>

`

// * script mobile menu
document.addEventListener('DOMContentLoaded', () => {

    const burger = document.getElementById('hamburgerMenu') as HTMLDivElement;
    const links = document.getElementById('navLinks') as HTMLUListElement;
    burger.addEventListener('click', function () {
        this.classList.toggle('active');
        links.classList.toggle('active');
    });
});