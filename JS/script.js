document.addEventListener("DOMContentLoaded", function () {
    const corazonesContainer = document.querySelector(".corazones-container");
    const botonNo = document.getElementById("botonNo");
    const botonSi = document.getElementById("botonSi");
    const descargar = document.getElementById("descargar");

    // Ocultar el botón de descarga al principio
    descargar.style.display = "none";

    // Función para crear corazones
    function createHeart() {
        const corazon = document.createElement("div");
        corazon.classList.add("corazon");
        corazon.innerHTML = "❤️";
        corazon.style.left = Math.random() * 100 + "vw"; // Estilo de posición horizontal aleatoria
        corazon.style.animationDuration = (Math.random() * 2 + 3) + "s"; // Duración de la animación
        corazon.style.fontSize = (Math.random() * 20 + 10) + "px"; // Tamaño de la fuente aleatorio
        corazonesContainer.appendChild(corazon);

        // Eliminar el corazón después de 5 segundos
        setTimeout(() => {
            corazon.remove();
        }, 5000);
    }

    // Crear corazones cada 100ms
    setInterval(createHeart, 100);

    // Evento cuando el ratón pasa por encima del botón "No"
    botonNo.addEventListener("mouseover", function () {
        const maxX = window.innerWidth - botonNo.offsetWidth - 20;
        const maxY = window.innerHeight - botonNo.offsetHeight - 20;

        let x, y;

        do {
            x = Math.random() * maxX;
            y = Math.random() * maxY;
        } while (
            Math.abs(x - botonSi.offsetLeft) < 100 &&
            Math.abs(y - botonSi.offsetTop) < 50
        );

        botonNo.style.position = "absolute";
        botonNo.style.left = `${x}px`;
        botonNo.style.top = `${y}px`;
    });

    // Evento cuando se hace clic en el botón "Sí"
    botonSi.addEventListener("click", function () {
        descargar.style.display = "block";
        descargar.style.animation = "fadeIn 1s ease-in-out";
    });
});
