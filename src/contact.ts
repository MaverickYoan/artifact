import '../css/style-contact.css'

document.getElementById('app')!.innerHTML = `
    <nav class="navbar bg-[url('images/Tibet/Tibet (8).jpg')]">
        <!-- <button class="btntest">bouton</button> -->

        <div class="hamburger-menu" id="hamburgerMenu">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
        <ul class="nav-links" id="navLinks">
            <li><a href="../index.html">À propos</a></li>
            <li><a href="../destination.html">Destination</a></li>
            <li><a href="../contact.html">Contact</a></li>
        </ul>
    </nav>

    <!-- * background -->

    <style>
        .home {
            background: url("/images/Tibet/Tibet (7).jpg");
            background-repeat: no-repeat;
            background-size: cover;
            overflow: hidden;
        }
    </style>


    <!-- * Contact section -->

    <section class="home"><!-- home / h1 / id home / img -->
        <h1 id="home">GlobeTrotters</h1>
        <img  id="home-logo" class="logo" src="/images/logo.png" width="50px" alt="voilier bleu">
    <section id="contact" class="py-16 bg-white">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold flex items-start mb-12 text-gray-800">Contactez-nous</h2>
            <div class="flex flex-col md:flex-row">
                <div class="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                    <h3 class="text-xl font-semibold mb-4 text-gray-800">Informations de contact</h3>
                    <div class="space-y-4">
                        <div class="flex items-start">
                            <div class="bg-green-100 p-2 rounded-full mr-4">
                                <i class="fas fa-map-marker-alt text-blue-600"></i>
                            </div>
                            
                        </div>
                        <div class="flex items-start">
                            <div class="bg-green-100 p-2 rounded-full mr-4">
                                <i class="fas fa-phone text-green-600"></i>
                            </div>
                            <div>
                                <h4 class="font-larger text-black-900">Téléphone</h4>
                                <p class="text-black-900">01 23 45 67 89</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <div class="bg-purple-100 p-2 rounded-full mr-4">
                                <i class="fas fa-envelope text-purple-600"></i>
                            </div>
                            <div>
                                <h4 class="font-medium text-gray-800">Email</h4>
                                <p class="text-gray-600"><a class="email-contact"
                                        href="mailto:contact@globetrottersbeTrotters.fr">contact@globetrotters.fr</a>
                                </p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <div class="bg-yellow-100 p-2 rounded-full mr-4">
                                <i class="fas fa-clock text-yellow-600"></i>
                            </div>
                            <div>
                                <h4 class="font-medium text-gray-800">Horaires</h4>
                                <p class="text-gray-600">Lundi-Vendredi: 8h-19h<br>Samedi: 9h-13h</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </section>
<!-- Contact Section -->
    

    <!-- * FOOTER -->

    <footer><!-- * droits / h6 -->
        <div class="droits">
            <h6>&copy; 2025 Projet_3. Tous droits réservés. @onlineformapro
                <br>Mentions légales | Politique de confidentialité | Conditions générales de vente<br>
            </h6>
            <a class="agrees" href="" target="_blank">
            </a>
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