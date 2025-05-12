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
                    </ul>
                </div>
            </div>
        </nav>
    
        <img alt="Logo" id="logo" class="w-12.5 mx-auto rounded-full" src="/images/logo.png">

        <form method="post" class="text-black bg-white absolute top-1/2 -translate-y-1/2 left-0 md:left-20 right-0 md:right-20 p-20 grid xl:grid-cols-2 gap-10">
            <div>
                <label for="name">Name: </label>
                <input type="text" name="name" class="border border-gray-300 w-full"><br>
                <div class="py-5">
                    <label for="email">E-mail: </label>
                    <input type="text" name="email" class="border border-gray-300 w-full"><br>
                </div>
                <input type="submit" class="btn">
            </div>
            <div class="text-center grow">
                <h2 class="text-3xl font-bold flex items-start justify-center mb-12 text-gray-800">Contactez-nous</h2>
                <div>
                    <div class="flex flex-col md:flex-row gap-5 justify-between flex-wrap">
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
            </div>
        </form>
    </section>
        <a id="href" href="https://www.ou-et-quand.net/" target="_blank">Pour plus d'informations</a>

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