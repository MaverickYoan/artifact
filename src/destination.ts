import "./style.css"

document.getElementById("app")!.innerHTML = `
    <div class="min-h-screen bg-black text-white font-montserrat flex flex-col">
        <header class="container mx-auto relative md:grid grid-cols-3 justify-between items-center md:h-34">
            <h1 class="hidden md:block">Agence2Voyage</h1>
            <img alt="Logo" class="w-12.5 mx-auto rounded-full"
                 src="/images/logo.png">
        
            <!--Menu PC-->
            <nav class="hidden md:flex gap-10 text-xl">
                <a href="../index.html">Welcome</a>
                <a href="#destinations">Destinations</a>
                <a href="">Contact</a>
            </nav>
        
            <!--Menu burger-->
            <button class="md:hidden absolute top-1/2 right-10 -translate-y-1/2" id="burger">
                <svg class="fill-white w-15" id="fi_5358649"
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
                <button class="absolute right-10 top-15" id="close">
                    <img alt="Cross Icon" class="w-15" src="/images/cross.svg"/>
                </button>
            </nav>
        </header>
        <main class="container mx-auto grow">
            <section class="mt-20 md:mt-40" id="destinations">
                <div class="grid md:grid-cols-2 gap-10 justify-between pb-20">
                    <div class="order-2 md:order-1">
                        <div class="carousel w-full">
                            <div id="slide1" class="carousel-item relative w-full">
                                <figure class="relative w-full">
                                    <img src="/images/Tibet/Tibet%20(1).jpg" alt="Tibet" class="w-full">
                                    <figcaption class="absolute top-full -translate-y-full bg-black/75 left-0 right-0 p-2 md:p-5">
                                        Diapo 1
                                    </figcaption>
                                </figure>
                                <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a href="#" class="btn btn-circle carousel-nav" data-slide="slide8">❮</a>
                                    <a href="#" class="btn btn-circle carousel-nav" data-slide="slide2">❯</a>
                                </div>
                            </div>
                            <div id="slide2" class="carousel-item relative w-full">
                                <figure class="relative w-full">
                                    <img src="/images/Tibet/Tibet%20(2).jpg" class="w-full" alt="Tibet 2"/>
                                    <figcaption class="absolute top-full -translate-y-full bg-black/75 left-0 right-0 p-2 md:p-5">
                                        Diapo 2
                                    </figcaption>
                                </figure>
                                <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a href="#" class="btn btn-circle carousel-nav" data-slide="slide1">❮</a>
                                    <a href="#" class="btn btn-circle carousel-nav" data-slide="slide3">❯</a>
                                </div>
                            </div>
                            <div id="slide3" class="carousel-item relative w-full">
                                <figure class="relative w-full">
                                    <img src="/images/Tibet/Tibet%20(3).jpg" alt="Tibet 3" class="w-full">
                                    <figcaption class="absolute bg-black/75 p-2 md:p-5 bottom-0 left-0 right-0">
                                        Diapo 3
                                    </figcaption>
                                </figure>
                                <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a href="#" class="btn btn-circle carousel-nav" data-slide="slide2">❮</a>
                                    <a href="#" class="btn btn-circle carousel-nav" data-slide="slide4">❯</a>
                                </div>
                            </div>
                            <div id="slide4" class="carousel-item relative w-full">
                                <figure class="relative w-full">
                                    <img src="/images/Tibet/Tibet%20(4).jpg" alt="Tibet 4" class="w-full">
                                    <figcaption class="absolute bottom-0 left-0 right-0 p-2 md:p-5 bg-black/75">Diapo 4</figcaption>
                                </figure>
                                <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a href="#" class="btn btn-circle carousel-nav" data-slide="slide3">❮</a>
                                    <a href="#" class="btn btn-circle carousel-nav" data-slide="slide5">❯</a>
                                </div>
                            </div>
                            <div id="slide5" class="carousel-item relative w-full">
                                <figure class="relative w-full">
                                    <img src="/images/Tibet/Tibet%20(5).jpg" alt="Tibet 5" class="w-full">
                                    <figcaption class="absolute bottom-0 left-0 right-0 p-2 md:p-5 bg-black/75">
                                        Diapo 5
                                    </figcaption>
                                </figure>
                                <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a href="#" class="btn btn-circle carousel-nav" data-slide="slide4">❮</a>
                                    <a href="#" class="btn btn-circle carousel-nav" data-slide="slide6">❯</a>
                                </div>
                            </div>
                            <div id="slide6" class="carousel-item relative w-full">
                                <figure class="relative w-full">
                                    <img src="/images/Tibet/Tibet%20(6).jpg" alt="Tibet 6" class="w-full">
                                    <figcaption class="absolute bottom-0 left-0 right-0 bg-black/75 p-2 md:p-5">
                                        Diapo 6
                                    </figcaption>
                                </figure>
                                <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a href="#" class="btn btn-circle carousel-nav" data-slide="slide5">❮</a>
                                    <a href="#" class="btn btn-circle carousel-nav" data-slide="slide7">❯</a>
                                </div>
                            </div>
                            <div id="slide7" class="carousel-item relative w-full">
                                <figure class="relative w-full">
                                    <img src="/images/Tibet/Tibet%20(7).jpg" alt="Tibet 7" class="w-full">
                                    <figcaption class="absolute bottom-0 left-0 right-0 bg-black/75 p-2 md:p-5">
                                        Diapo 7
                                    </figcaption>
                                </figure>
                                <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a href="#" class="btn btn-circle carousel-nav" data-slide="slide6">❮</a>
                                    <a href="#" class="btn btn-circle carousel-nav" data-slide="slide8">❯</a>
                                </div>
                            </div>
                            <div id="slide8" class="carousel-item relative w-full">
                                <figure class="relative w-full">
                                    <img src="/images/Tibet/Tibet%20(8).jpg" alt="Tibet 8" class="w-full">
                                    <figcaption class="absolute bottom-0 left-0 right-0 bg-black/75 p-2 md:p-5">
                                        Diapo 8
                                    </figcaption>
                                </figure>
                                <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a href="#" class="btn btn-circle carousel-nav" data-slide="slide7">❮</a>
                                    <a href="#" class="btn btn-circle carousel-nav" data-slide="slide1">❯</a>
                                </div>
                            </div>
                        </div>
                        <div class="flex w-full justify-center gap-2 py-2 carousel-menu">
                            <a href="#" class="btn btn-xs carousel-nav" data-slide="slide1">1</a>
                            <a href="#" class="btn btn-xs carousel-nav" data-slide="slide2">2</a>
                            <a href="#" class="btn btn-xs carousel-nav" data-slide="slide3">3</a>
                            <a href="#" class="btn btn-xs carousel-nav" data-slide="slide4">4</a>
                            <a href="#" class="btn btn-xs carousel-nav" data-slide="slide5">5</a>
                            <a href="#" class="btn btn-xs carousel-nav" data-slide="slide6">6</a>
                            <a href="#" class="btn btn-xs carousel-nav" data-slide="slide7">7</a>
                            <a href="#" class="btn btn-xs carousel-nav" data-slide="slide8">8</a>
                        </div>
                    </div>
                    <div class="flex flex-col text-center pt-5 md:pt-0 order-1 md:order-2">
                        <p>Destination 1</p>
                        <p class="text-2xl flex items-center justify-center grow">Nous pouvons par exemple proposer une destination au Tibet</p>
                    </div>
                </div>
                
                <!--Section Seychelles-->
                <div class="mb-20 grid md:grid-cols-2 gap-10">
                    <div class="flex flex-col text-center order-1 md:order-2">
                        <p>Destination 2</p>
                        <p class="text-2xl flex items-center justify-center grow">Nous pouvons par exemple proposer une autre destination aux Seychelles</p>
                    </div>
                    <div class="carousel w-full">
                        <div id="seychelles1" class="carousel-item relative w-full">
                            <img src="/images/Seychelles/Seychelles%20(1).jpg" alt="Seychelles 1" class="w-full">
                            <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#" class="btn btn-circle carousel-nav" data-slide="seychelles8">❮</a>
                                <a href="#" class="btn btn-circle carousel-nav" data-slide="seychelles2">❯</a>
                            </div>
                        </div>
                        <div id="seychelles2" class="carousel-item relative w-full">
                            <img src="/images/Seychelles/Seychelles%20(2).jpg" alt="Seychelles 1" class="w-full">
                            <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#" class="btn btn-circle carousel-nav" data-slide="seychelles1">❮</a>
                                <a href="#" class="btn btn-circle carousel-nav" data-slide="seychelles3">❯</a>
                            </div>
                        </div>
                        <div id="seychelles3" class="carousel-item relative w-full">
                            <img src="/images/Seychelles/Seychelles%20(3).jpg" alt="Seychelles 1" class="w-full">
                            <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#" class="btn btn-circle carousel-nav" data-slide="seychelles2">❮</a>
                                <a href="#" class="btn btn-circle carousel-nav" data-slide="seychelles4">❯</a>
                            </div>
                        </div>
                        <div id="seychelles4" class="carousel-item relative w-full">
                            <img src="/images/Seychelles/Seychelles%20(4).jpg" alt="Seychelles 1" class="w-full">
                            <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#" class="btn btn-circle carousel-nav" data-slide="seychelles3">❮</a>
                                <a href="#" class="btn btn-circle carousel-nav" data-slide="seychelles5">❯</a>
                            </div>
                        </div>
                        <div id="seychelles5" class="carousel-item relative w-full">
                            <img src="/images/Seychelles/Seychelles%20(5).jpg" alt="Seychelles 1" class="w-full">
                            <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#" class="btn btn-circle carousel-nav" data-slide="seychelles4">❮</a>
                                <a href="#" class="btn btn-circle carousel-nav" data-slide="seychelles6">❯</a>
                            </div>
                        </div>
                        <div id="seychelles6" class="carousel-item relative w-full">
                            <img src="/images/Seychelles/Seychelles%20(6).jpg" alt="Seychelles 6" class="w-full">
                            <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#" class="btn btn-circle carousel-nav" data-slide="seychelles5">❮</a>
                                <a href="#" class="btn btn-circle carousel-nav" data-slide="seychelles7">❯</a>
                            </div>
                        </div>
                        <div id="seychelles7" class="carousel-item relative w-full">
                            <img src="/images/Seychelles/Seychelles%20(7).jpg" alt="Seychelles 7" class="w-full">
                            <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#" class="btn btn-circle carousel-nav" data-slide="seychelles6">❮</a>
                                <a href="#" class="btn btn-circle carousel-nav" data-slide="seychelles8">❯</a>
                            </div>
                        </div>
                        <div id="seychelles8" class="carousel-item relative w-full">
                            <img src="/images/Seychelles/Seychelles%20(8).jpg" alt="Seychelles 8" class="w-full">
                            <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#" class="btn btn-circle carousel-nav" data-slide="seychelles7">❮</a>
                                <a href="#" class="btn btn-circle carousel-nav" data-slide="seychelles1">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <footer><!-- * droits / h6 -->
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
    const burger = document.getElementById("burger") as HTMLButtonElement;

    const phoneMenu = document.getElementById("phone-menu") as HTMLDivElement;

    const cross = document.getElementById("close") as HTMLButtonElement;

    // Bouton pour ouvrir le menu
    burger.addEventListener("click", () => {
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