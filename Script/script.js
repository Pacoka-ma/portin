document.addEventListener("DOMContentLoaded", function () {
    const cabecalho = document.querySelector(".cabecalho");
    const espacoCabecalho = document.querySelector(".espaco-cabecalho");

    // Função para o cabeçalho fixo ao rolar a página
    window.addEventListener("scroll", function () {
        if (window.scrollY > 720) {
            cabecalho.classList.add("fixo");
            espacoCabecalho.style.display = "block"; 
        } else {
            cabecalho.classList.remove("fixo");
            espacoCabecalho.style.display = "none"; 
        }
    });

    // Seleciona os contêineres que devem ser animados
    const containers = document.querySelectorAll('.conteinerabout, .conteinerserv, .conteinerhors');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visivel");
                } else {
                    entry.target.classList.remove("visivel");
                }
            });
        },
        { threshold: 0.1 } // Ajustado para 10% do elemento na tela
    );
    

    // Agora o observer observa TODOS os containers
    containers.forEach((container) => observer.observe(container));

    // Rolagem suave ao clicar nos links do menu
    const links = document.querySelectorAll(".links a");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                const offset = window.innerHeight / 2 - targetElement.offsetHeight / 2;

                window.scrollTo({
                    top: elementPosition - offset,
                    behavior: "smooth"
                });
            }
        });
    });
});
