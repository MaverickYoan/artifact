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
        <h1 id="home">GlobeTrotters</h1>
        <img  id="home-logo" class="logo" src="/images/logo.png" width="50px" alt="voilier bleu">
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
        <img src="images/plane.png" alt="Image d'un avion de ligne">
    </div>

    <!-- * Menu dropdown pour sélectionner Seychelles ou Tibet comme destination -->

    <details class="dropdown"><h1 id="slogan">Un voyage inoubliable au sein de notre agence GlobeTrotters.
            <br>
            <br>
            Avec les Seychelles, ce petit bout de paradis, le charme majestueux du Tibet ou London City, the place to be.
            <br>
            <br>
            Au choix
        </h1>
        <summary class="btn m-1">Destinations</summary>
        <ul class="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li><a class="li-destination" href="destination.html">Seychelles</a></li>
            <li><a class="li-destination" href="destination.html">Tibet</a></li>
            <li><a class="li-destination" href="destination.html">Londres</a></li>
            <a></a>
        </ul>
    </details>

    <!-- * Témoignages Section -->

        <section class="une" id="avis">
            <div class="container-une">

                <!-- Témoignage 1 -->
                <h2 class="text-une">Témoignages</h2>
                <div class="grid">
                    <div class="tem1">
                        <div class="tem1">
                            <div class="entete"> P.E</div>
                            <div>
                                <h4 class="une-font">Paul Eluard</h4>
                            </div>
                        </div>
                        <p class="une-comm-font">"Notre voyage au Tibet fut magique. Ce moment passé au près du Dalaï Lama. Nous vous remercions." </p>
                        <div class="stars">
                        </div>

                    </div>
                </div>

                <!-- Témoignage 2 -->
                <div class="grid">
                    <div class="tem1">
                        <div class="tem1">
                            <div class="entete"> L.B</div>
                            <div>
                                <h4 class="une-font">Léon Blum</h4>
                            </div>
                        </div>
                        <p class="une-comm-font">"Malgrès un départ retardé par ces intempéries. L'arrivée sur cette
                            magnifique plage des Seychelles nous a tout fait oublié. Nous y retournerons."
                        </p>
                        <div class="stars">
                        </div>
                    </div>
                </div>

                <!-- Témoignage 3 -->
                <div class="grid">
                    <div class="tem1">
                        <div class="tem1">
                            <div class="entete"> J.D</div>
                            <div>
                                <h4 class="une-font">Jean Delafontaine</h4>
                            </div>
                        </div>
                        <p class="une-comm-font">"Merci, Londres fut une expérience assez particulière, avec la rencontre de la reine
                            d'Angletrerre puis dans la foulée des bandes de jeunes et partout des taxis. Super voyage,
                            un peu court."</p>
                        <div class="stars">
                        </div>
                    </div>
                </div>
            </div>

    <!-- Ta section ou image -->
    <section>
    <div class="fade-in">

<img class="fade-in" src="images/globeTrotters_AllInOne1.png" alt="">

    </div>
    </section>

    <!-- * FOOTER -->

    <footer><!-- * droits / h6 -->
        <div class="droits">
            <h6>&copy; 2025 Projet_3. Tous droits réservés. @onlineformapro
                <br>Mentions légales | Politique de confidentialité | Conditions générales de vente<br>
            </h6>
        </div>

    </footer>
`
// * script mobile menu
document.addEventListener('DOMContentLoaded', () => {

    const burger = document.getElementById('hamburgerMenu') as HTMLDivElement;
    const links = document.getElementById('navLinks') as HTMLUListElement
    burger.addEventListener('click', function () {
        this.classList.toggle('active');
        links.classList.toggle('active');
    });
});
