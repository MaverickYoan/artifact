import "./style.css"

document.getElementById("app")!.innerHTML = `
    <div class="min-h-screen bg-black text-white font-montserrat flex flex-col">
        <header class="container mx-auto relative flex md:grid grid-cols-3 justify-between items-center pt-10 md:p-0">
            <h1 class="hidden md:block">GlobeTrotters</h1>
            <img alt="Logo" class="w-12.5 mx-auto rounded-full"
                 src="/images/logo.png">
        
            <!--Menu PC-->
            <nav class="hidden md:flex gap-10 text-xl">
                <a href="../index.html">Welcome</a>
                <a href="#destinations">Destinations</a>
                <a href="../contact.html">Contact</a>
            </nav>
        
            <!--Menu burger-->
            <button class="md:hidden absolute top-10 right-10" id="burger">
                <svg class="fill-white w-15 h-15" id="fi_5358649"
                     viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path d="m3.5 7.5h17c.8286133 0 1.5-.6713867 1.5-1.5s-.6713867-1.5-1.5-1.5h-17c-.8286133 0-1.5.6713867-1.5 1.5s.6713867 1.5 1.5 1.5z"></path>
                        <path d="m20.5 10.5h-17c-.8286133 0-1.5.6713867-1.5 1.5s.6713867 1.5 1.5 1.5h17c.8286133 0 1.5-.6713867 1.5-1.5s-.6713867-1.5-1.5-1.5z"></path>
                        <path d="m20.5 16.5h-17c-.8286133 0-1.5.6713867-1.5 1.5s.6713867 1.5 1.5 1.5h17c.8286133 0 1.5-.6713867 1.5-1.5s-.6713867-1.5-1.5-1.5z"></path>
                    </g>
                </svg>
            </button>
        
            <!--Menu mobile-->
            <nav class="md:hidden fixed top-0 left-0 right-0 bottom-0 bg-black hidden z-50" id="phone-menu">
                <button class="absolute right-10 top-10" id="close">
                    <img alt="Cross Icon" class="w-15" src="/images/cross.svg"/>
                </button>
                <summary>
                <a href="../index.html">Welcome</a>
                <a href="#destinations">Destinations</a>
                <a href="../contact.html">Contact</a>
                </summary>

            </nav>
        </header>
        <main class="container mx-auto grow">
            <section class="mt-10 md:mt-40" id="destinations">
                <div class="grid md:grid-cols-2 gap-10 justify-between pb-20">
                    <div class="order-2 md:order-1">
                        <div class="carousel w-full">
                            <div class="carousel-item relative w-full" id="slide1">
                                <figure class="relative w-full">
                                    <img alt="Tibet" class="w-full" src="/images/Tibet/Tibet%20(1).jpg">
                                    <figcaption class="absolute top-full -translate-y-full bg-black/75 left-0 right-0 p-2 md:p-5">
                                        Diapo 1
                                    </figcaption>
                                </figure>
                                <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a class="btn btn-circle carousel-nav" data-slide="slide8" href="#">❮</a>
                                    <a class="btn btn-circle carousel-nav" data-slide="slide2" href="#">❯</a>
                                </div>
                            </div>
                            <div class="carousel-item relative w-full" id="slide2">
                                <figure class="relative w-full">
                                    <img alt="Tibet 2" class="w-full" src="/images/Tibet/Tibet%20(2).jpg"/>
                                    <figcaption class="absolute top-full -translate-y-full bg-black/75 left-0 right-0 p-2 md:p-5">
                                        Diapo 2
                                    </figcaption>
                                </figure>
                                <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a class="btn btn-circle carousel-nav" data-slide="slide1" href="#">❮</a>
                                    <a class="btn btn-circle carousel-nav" data-slide="slide3" href="#">❯</a>
                                </div>
                            </div>
                            <div class="carousel-item relative w-full" id="slide3">
                                <figure class="relative w-full">
                                    <img alt="Tibet 3" class="w-full" src="/images/Tibet/Tibet%20(3).jpg">
                                    <figcaption class="absolute bg-black/75 p-2 md:p-5 bottom-0 left-0 right-0">
                                        Diapo 3
                                    </figcaption>
                                </figure>
                                <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a class="btn btn-circle carousel-nav" data-slide="slide2" href="#">❮</a>
                                    <a class="btn btn-circle carousel-nav" data-slide="slide4" href="#">❯</a>
                                </div>
                            </div>
                            <div class="carousel-item relative w-full" id="slide4">
                                <figure class="relative w-full">
                                    <img alt="Tibet 4" class="w-full" src="/images/Tibet/Tibet%20(4).jpg">
                                    <figcaption class="absolute bottom-0 left-0 right-0 p-2 md:p-5 bg-black/75">Diapo 4</figcaption>
                                </figure>
                                <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a class="btn btn-circle carousel-nav" data-slide="slide3" href="#">❮</a>
                                    <a class="btn btn-circle carousel-nav" data-slide="slide5" href="#">❯</a>
                                </div>
                            </div>
                            <div class="carousel-item relative w-full" id="slide5">
                                <figure class="relative w-full">
                                    <img alt="Tibet 5" class="w-full" src="/images/Tibet/Tibet%20(5).jpg">
                                    <figcaption class="absolute bottom-0 left-0 right-0 p-2 md:p-5 bg-black/75">
                                        Diapo 5
                                    </figcaption>
                                </figure>
                                <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a class="btn btn-circle carousel-nav" data-slide="slide4" href="#">❮</a>
                                    <a class="btn btn-circle carousel-nav" data-slide="slide6" href="#">❯</a>
                                </div>
                            </div>
                            <div class="carousel-item relative w-full" id="slide6">
                                <figure class="relative w-full">
                                    <img alt="Tibet 6" class="w-full" src="/images/Tibet/Tibet%20(6).jpg">
                                    <figcaption class="absolute bottom-0 left-0 right-0 bg-black/75 p-2 md:p-5">
                                        Diapo 6
                                    </figcaption>
                                </figure>
                                <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a class="btn btn-circle carousel-nav" data-slide="slide5" href="#">❮</a>
                                    <a class="btn btn-circle carousel-nav" data-slide="slide7" href="#">❯</a>
                                </div>
                            </div>
                            <div class="carousel-item relative w-full" id="slide7">
                                <figure class="relative w-full">
                                    <img alt="Tibet 7" class="w-full" src="/images/Tibet/Tibet%20(7).jpg">
                                    <figcaption class="absolute bottom-0 left-0 right-0 bg-black/75 p-2 md:p-5">
                                        Diapo 7
                                    </figcaption>
                                </figure>
                                <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a class="btn btn-circle carousel-nav" data-slide="slide6" href="#">❮</a>
                                    <a class="btn btn-circle carousel-nav" data-slide="slide8" href="#">❯</a>
                                </div>
                            </div>
                            <div class="carousel-item relative w-full" id="slide8">
                                <figure class="relative w-full">
                                    <img alt="Tibet 8" class="w-full" src="/images/Tibet/Tibet%20(8).jpg">
                                    <figcaption class="absolute bottom-0 left-0 right-0 bg-black/75 p-2 md:p-5">
                                        Diapo 8
                                    </figcaption>
                                </figure>
                                <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a class="btn btn-circle carousel-nav" data-slide="slide7" href="#">❮</a>
                                    <a class="btn btn-circle carousel-nav" data-slide="slide1" href="#">❯</a>
                                </div>
                            </div>
                        </div>
                        <div class="flex w-full justify-center gap-2 py-2 carousel-menu">
                            <a class="btn btn-xs carousel-nav" data-slide="slide1" href="#">1</a>
                            <a class="btn btn-xs carousel-nav" data-slide="slide2" href="#">2</a>
                            <a class="btn btn-xs carousel-nav" data-slide="slide3" href="#">3</a>
                            <a class="btn btn-xs carousel-nav" data-slide="slide4" href="#">4</a>
                            <a class="btn btn-xs carousel-nav" data-slide="slide5" href="#">5</a>
                            <a class="btn btn-xs carousel-nav" data-slide="slide6" href="#">6</a>
                            <a class="btn btn-xs carousel-nav" data-slide="slide7" href="#">7</a>
                            <a class="btn btn-xs carousel-nav" data-slide="slide8" href="#">8</a>
                        </div>
                    </div>
                    <div class="flex flex-col text-center pt-5 md:pt-0 order-1 md:order-2">
                        <p>Destination 1</p>
                        <p class="text-2xl flex items-center justify-center grow">Nous pouvons par exemple proposer une destination au Tibet
                        </p>
                    </div>
                </div>
                
                <!--Section Seychelles-->
                <div class="mb-20 grid md:grid-cols-2 gap-10">
                    <div class="flex flex-col text-center order-1 md:order-2">
                        <p>Destination 2</p>
                        <p class="text-2xl flex items-center justify-center grow">Nous pouvons par exemple proposer une autre destination aux Seychelles</p>
                    </div>
                    <div class="order-2 md:order-1">
                        <div class="carousel w-full">
                            <div class="carousel-item relative w-full" id="seychelles1">
                                <img alt="Seychelles 1" class="w-full" src="/images/Seychelles/Seychelles%20(1).jpg">
                                <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a class="btn btn-circle carousel-nav" data-slide="seychelles8" href="#">❮</a>
                                    <a class="btn btn-circle carousel-nav" data-slide="seychelles2" href="#">❯</a>
                                </div>
                            </div>
                            <div class="carousel-item relative w-full" id="seychelles2">
                                <img alt="Seychelles 1" class="w-full" src="/images/Seychelles/Seychelles%20(2).jpg">
                                <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a class="btn btn-circle carousel-nav" data-slide="seychelles1" href="#">❮</a>
                                    <a class="btn btn-circle carousel-nav" data-slide="seychelles3" href="#">❯</a>
                                </div>
                            </div>
                            <div class="carousel-item relative w-full" id="seychelles3">
                                <img alt="Seychelles 1" class="w-full" src="/images/Seychelles/Seychelles%20(3).jpg">
                                <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a class="btn btn-circle carousel-nav" data-slide="seychelles2" href="#">❮</a>
                                    <a class="btn btn-circle carousel-nav" data-slide="seychelles4" href="#">❯</a>
                                </div>
                            </div>
                            <div class="carousel-item relative w-full" id="seychelles4">
                                <img alt="Seychelles 1" class="w-full" src="/images/Seychelles/Seychelles%20(4).jpg">
                                <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a class="btn btn-circle carousel-nav" data-slide="seychelles3" href="#">❮</a>
                                    <a class="btn btn-circle carousel-nav" data-slide="seychelles5" href="#">❯</a>
                                </div>
                            </div>
                            <div class="carousel-item relative w-full" id="seychelles5">
                                <img alt="Seychelles 1" class="w-full" src="/images/Seychelles/Seychelles%20(5).jpg">
                                <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a class="btn btn-circle carousel-nav" data-slide="seychelles4" href="#">❮</a>
                                    <a class="btn btn-circle carousel-nav" data-slide="seychelles6" href="#">❯</a>
                                </div>
                            </div>
                            <div class="carousel-item relative w-full" id="seychelles6">
                                <img alt="Seychelles 6" class="w-full" src="/images/Seychelles/Seychelles%20(6).jpg">
                                <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a class="btn btn-circle carousel-nav" data-slide="seychelles5" href="#">❮</a>
                                    <a class="btn btn-circle carousel-nav" data-slide="seychelles7" href="#">❯</a>
                                </div>
                            </div>
                            <div class="carousel-item relative w-full" id="seychelles7">
                                <img alt="Seychelles 7" class="w-full" src="/images/Seychelles/Seychelles%20(7).jpg">
                                <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a class="btn btn-circle carousel-nav" data-slide="seychelles6" href="#">❮</a>
                                    <a class="btn btn-circle carousel-nav" data-slide="seychelles8" href="#">❯</a>
                                </div>
                            </div>
                            <div class="carousel-item relative w-full" id="seychelles8">
                                <img alt="Seychelles 8" class="w-full" src="/images/Seychelles/Seychelles%20(8).jpg">
                                <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a class="btn btn-circle carousel-nav" data-slide="seychelles7" href="#">❮</a>
                                    <a class="btn btn-circle carousel-nav" data-slide="seychelles1" href="#">❯</a>
                                </div>
                            </div>
                        </div>
                        <div class="flex w-full justify-center gap-2 py-2 carousel-menu">
                            <a class="btn btn-xs carousel-nav" data-slide="seychelles1" href="#">1</a>
                            <a class="btn btn-xs carousel-nav" data-slide="seychelles2" href="#">2</a>
                            <a class="btn btn-xs carousel-nav" data-slide="seychelles3" href="#">3</a>
                            <a class="btn btn-xs carousel-nav" data-slide="seychelles4" href="#">4</a>
                            <a class="btn btn-xs carousel-nav" data-slide="seychelles5" href="#">5</a>
                            <a class="btn btn-xs carousel-nav" data-slide="seychelles6" href="#">6</a>
                            <a class="btn btn-xs carousel-nav" data-slide="seychelles7" href="#">7</a>
                            <a class="btn btn-xs carousel-nav" data-slide="seychelles8" href="#">8</a>
                        </div>
                    </div>
                </div>
                
                <!--Voyage à Londres-->
                <div class="grid md:grid-cols-2 gap-10">
                    <div class="md:order-2 text-center flex flex-col">
                        <p>Destination 3</p>
                        <p class="text-2xl flex items-center justify-center grow">Vous préférez un voyage plus orienté 
                        culturel ? Alors, nous vous proposons aussi des séjours à Londres</p>
                    </div>
                    <div class="md:order-1">
                        <div class="carousel w-full h-96">
                            <div class="carousel-item relative w-full group" id="londres1">
                                <figure class="relative w-full">
                                    <img src="/images/Londres/Londres%201.jpg" class="w-full h-full object-cover"
                                 alt="Londres">
                                    <figcaption class="absolute bottom-5 left-5 right-5 bg-black/75 p-2 md:p-5 md:opacity-0 group-hover:opacity-100 duration-300">
                                        London city vue du ciel
                                    </figcaption>
                                </figure>
                                <div class="absolute top-1/2 left-5 right-5 -translate-y-1/2 flex transform justify-between">
                                    <a href="#" class="btn btn-circle carousel-nav" data-slide="londres5">❮</a>
                                    <a href="#" class="btn btn-circle carousel-nav" data-slide="londres2">❯</a>
                                </div>
                            </div>
                            <div class="carousel-item relative w-full group" id="londres2">
                                <figure class="relative w-full">
                                    <img src="/images/Londres/221b%20Baker%20Street.jpg" class="w-full h-full object-cover" alt="Baker Street">
                                    <figcaption class="absolute bottom-5 left-5 right-5 bg-black/75 p-2 md:p-5 md:opacity-0 group-hover:opacity-100 duration-300">
                                        Même Sherlock Holmes a droit à sa propre adresse
                                    </figcaption>
                                </figure>
                                <div class="absolute top-1/2 left-5 right-5 -translate-y-1/2 flex transform justify-between">
                                    <a href="#" class="btn btn-circle carousel-nav" data-slide="londres1">❮</a>
                                    <a href="#" class="btn btn-circle carousel-nav" data-slide="londres3">❯</a>
                                </div>
                            </div>
                            <div class="carousel-item relative w-full group" id="londres3">
                                <figure class="relative w-full">
                                    <img src="/images/Londres/Tower%20bridge.jpg" class="w-full h-full object-cover" alt="Tower bridge">
                                    <figcaption class="absolute bottom-5 left-5 right-5 bg-black/75 p-2 md:p-5 text-white md:opacity-0 group-hover:opacity-100 duration-300">
                                        Le Tower Bridge dans toute sa splendeur
                                    </figcaption>
                                </figure>
                                <div class="absolute top-1/2 left-5 right-5 -translate-y-1/2 flex transform justify-between">
                                    <a href="#" class="btn btn-circle carousel-nav" data-slide="londres2">❮</a>
                                    <a href="#" class="btn btn-circle carousel-nav" data-slide="londres4">❯</a>
                                </div>
                            </div>
                            <div class="carousel-item relative w-full group" id="londres4">
                                <figure class="relative w-full">
                                    <img src="/images/Londres/bus%20anglais.jpg" class="w-full h-full object-cover" alt="Bus anglais">
                                    <figcaption class="absolute bottom-5 left-5 right-5 bg-black/75 p-2 md:p-5 text-white md:opacity-0 group-hover:opacity-100 duration-300">
                                        N'avez-vous jamais rêvé de voyager dans un bus anglais ?
                                    </figcaption>
                                </figure>
                                <div class="absolute top-1/2 left-5 right-5 -translate-y-1/2 flex transform justify-between">
                                    <a href="#" class="btn btn-circle carousel-nav" data-slide="londres3">❮</a>
                                    <a href="#" class="btn btn-circle carousel-nav" data-slide="londres5">❯</a>
                                </div>
                            </div>
                            <div class="carousel-item relative w-full group" id="londres5">
                                <figure class="relative w-full">
                                    <img src="/images/Londres/London%20Eye.jpg" class="w-full h-full object-cover" alt="London eye">
                                    <figcaption class="absolute bottom-5 left-5 right-5 bg-black/75 p-2 md:p-5 text-white md:opacity-0 group-hover:opacity-100 duration-300">
                                        Vous voulez avoir une vue sur toute la ville de Londres ? Alors montez sur "London eye"
                                    </figcaption>
                                </figure>
                                <div class="absolute top-1/2 left-5 right-5 -translate-y-1/2 flex transform justify-between">
                                    <a href="#" class="btn btn-circle carousel-nav" data-slide="londres4">❮</a>
                                    <a href="#" class="btn btn-circle carousel-nav" data-slide="londres1">❯</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <footer class="my-20"><!-- * droits / h6 -->
            <div class="droits items-center text-xs text-white font-montserrat flex flex-col">
                <h6>&copy; 2025 Projet_3. Tous droits réservés. @onlineformapro
                    <br>Mentions légales | Politique de confidentialité | Conditions générales de vente<br>
                </h6>
                <a class="agrees" href="" target="_blank">
                </a>
            </div>
        </footer>
    </div>
`

document.addEventListener("DOMContentLoaded", function () {
    const burgerCross = document.getElementById("burger") as HTMLButtonElement;

    const phoneMenu = document.getElementById("phone-menu") as HTMLDivElement;

    const cross = document.getElementById("close") as HTMLButtonElement;

    // Bouton pour ouvrir le menu
    burgerCross.addEventListener("click", () => {
        phoneMenu.classList.remove("hidden");
    })

    // Bouton pour fermer le menu
    cross.addEventListener("click", () => {
        phoneMenu.classList.add("hidden")
    })

    document.querySelectorAll(".carousel-nav").forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();

            const anchor = link as HTMLAnchorElement;
            const targetId = anchor.dataset.slide;
            const target = document.getElementById(targetId!);

            target?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
        })
    })
})