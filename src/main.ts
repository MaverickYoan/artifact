import '../css/style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <nav class="navbar">
        <!-- <button class="btntest">bouton</button> -->
        <div class="hamburger-menu" id="hamburgerMenu">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
        <ul class="nav-links" id="navLinks">
            <li><a href="/index.html">À propos</a></li>
            <li><a href="/destination.html">Destination</a></li>
            <!--  // - à voir comment tu veux que l'on fasse pour les réservation Florian. -->
            <!-- <li><a href="#reservation">Réservation</a></li> -->
            <li><a href="/contact.html">Contact</a></li>
        </ul>
    </nav>

    <!-- * home section -->

    <section class="home"><!-- home / h1 / id home / img -->
        <h1 id="home">Agence2Voyages</h1>
        <img class="logo" src="/images/logo.png" width="50px" alt="voilier bleu">
    </section>

    <!-- * animation plane -->

    <style type="text/css">
        .home {
            background: url(/images/sky.jpg);
            background-repeat: no-repeat;
            background-size: cover;
            overflow: hidden;
        }

        .sky {
            position: absolute;
            top: 10%;
            right: 2px;
            animation: sky 7s linear 0s infinite reverse;
            z-index: 99;
        }

        .sky img {
            width: 50px;
        }

        /* trajectoire de l'avion */
        @keyframes sky {
            from {
                top: 10px;
                right: -50px;
            }

            to {
                top: 300px;
                right: 100%;
            }
        }
    </style>

    <!-- * fond d'écran -->

    <div class="sky">
        <img src="images/plane.png">
    </div>

    <!-- * Menu dropdown pour sélectionner Seychelles ou Tibet comme destination -->

    <details class="dropdown">
        <summary class="btn m-1">Destinations</summary>
        <ul class="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li><a href="destination.html">Seychelles</a></li>
            <li><a href="destination.html">Tibet</a></li>
            <a></a>
        </ul>
    </details>


    <!-- * FOOTER -->

    <footer><!-- * droits / h6 -->
        <div class="droits">
            <h6>&copy; 2025 Projet_3. Tous droits réservés. @onlineformapro
                <br>Mentions légales | Politique de confidentialité | Conditions générales de vente<br>
            </h6>
        </div>

    </footer>


    <script src="../script/script.js"></script><!-- * - 2 - Script Section : activer le menu mobile -->
`

document.addEventListener('DOMContentLoaded', () => {

    const burger = document.getElementById('hamburgerMenu') as HTMLDivElement;
    const links = document.getElementById('navLinks') as HTMLUListElement
    burger.addEventListener('click', function () {
        this.classList.toggle('active');
        links.classList.toggle('active');
    });

    const top = document.querySelector('.back-to-top') as HTMLButtonElement;

    top.addEventListener("click", function () {
        window.scrollTo(0, 0);
    });
});