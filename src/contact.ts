import '../css/style-contact.css';
import './style.css';

document.getElementById('app')!.innerHTML = `
    

    <!-- * background -->

    <style>
        .home {
            background: url("/images/globeTrotters_AllInOne2.png");
            background-repeat: no-repeat;
            background-size: cover;
            overflow: hidden;
        }
    </style>

    <section class="home"><!-- home / h1 / id home / img -->
        <nav class="navbar">
            <h1 id="home" class="w-1/2">GlobeTrotters</h1>
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
        <img  id="home-logo" class="logo" src="/images/logo.png" width="50px" alt="voilier bleu">
        <form method="post" class="text-black bg-white absolute top-1/2 -translate-y-1/2 left-0 md:left-20 right-0 md:right-20 p-20">
            <label for="name">Name: </label>
            <input type="text" name="name" class="border"><br>
            <div class="py-5">
                <label for="email">E-mail: </label>
                <input type="text" name="email" class="border"><br>
            </div>
            <input type="submit" class="btn">

             <h2 class="text-3xl font-bold flex items-start mb-12 text-gray-800">Contactez-nous</h2>
        <div class="container mx-auto">
            <div class="flex flex-col md:flex-row">
                    <h3 class="text-xxl font-semibold mb-4 text-gray-800">Informations de contact</h3>
                        <div class="flex items-start">
                            <div class="bg-green-100 p-2 rounded-full mr-4">
                                <i class="fas fa-phone text-green-600"></i>
                            </div>
                            <div>
                                <h4 class="font-larger text-black-900">Téléphone : 06 58 45 67 89</h4>
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
        </form>
    </section>


    <!-- * FOOTER -->

    <footer><!-- * droits / h6 -->
        <div class="droits">
            <h6>&copy; 2025 Projet_3. Tous droits réservés. Les images furent générées grâce à l'IA ChatGPT. @onlineformapro
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