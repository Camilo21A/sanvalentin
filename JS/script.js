document.addEventListener("DOMContentLoaded", function () {
    const heartsContainer = document.querySelector(".hearts-container");
    const botonNo = document.getElementById("botonNo");
    const botonSi = document.getElementById("botonSi");
    const descargar = document.getElementById("descargar");

    // Ocultar el botón de descarga al principio
     descargar.style.display = "none";

    // Función para crear corazones
    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
        heart.style.fontSize = (Math.random() * 20 + 10) + "px";
        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
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
