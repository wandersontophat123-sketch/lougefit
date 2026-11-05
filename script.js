console.log("LOUGFIT carregada com sucesso!");


// Quando o usuário clicar nos links do menu,
// a página irá rolar suavemente até a seção.

const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {

    link.addEventListener("click", function(event) {

        const destino = document.querySelector(this.getAttribute("href"));

        if (destino) {

            event.preventDefault();

            destino.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});
// =====================================
// ANIMAÇÕES AO ROLAR A PÁGINA
// =====================================

const elementosAnimados = document.querySelectorAll(
    ".animar, .animar-esquerda, .animar-direita, .animar-zoom"
);

const observer = new IntersectionObserver(
    (elementos) => {

        elementos.forEach((elemento) => {

            if (elemento.isIntersecting) {

                elemento.target.classList.add("mostrar");

            }

        });

    },
    {
        threshold: 0.20
    }
);


elementosAnimados.forEach((elemento) => {

    observer.observe(elemento);

});
/* =====================================
   RASTRO DO MOUSE
===================================== */

const cursorGlow = document.querySelector(".cursor-glow");

let mouseX = 0;
let mouseY = 0;

let glowX = 0;
let glowY = 0;


document.addEventListener("mousemove", (e) => {

    mouseX = e.clientX;
    mouseY = e.clientY;

    cursorGlow.style.opacity = "100";

});


function seguirMouse() {

    glowX += (mouseX - glowX) * 0.15;
    glowY += (mouseY - glowY) * 0.15;

    cursorGlow.style.left = `${glowX}px`;
    cursorGlow.style.top = `${glowY}px`;

    requestAnimationFrame(seguirMouse);
}


seguirMouse();


document.addEventListener("mouseleave", () => {

    cursorGlow.style.opacity = "0";

});