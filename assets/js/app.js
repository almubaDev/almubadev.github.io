const sections = document.querySelectorAll('.section');
let index = 0;
let isScrolling = false;

document.addEventListener('wheel', (event) => {
    if (!isScrolling) {
        isScrolling = true;

        // Calcula la dirección del desplazamiento (arriba o abajo)
        const delta = event.deltaY;

        // Calcula la nueva posición de la sección
        if (delta > 0 && index < sections.length - 1) {
            index++; // Desplázate hacia abajo si hay más secciones
        } else if (delta < 0 && index > 0) {
            index--; // Desplázate hacia arriba si no estás en la primera sección
        }

        // Calcula la posición de desplazamiento para la nueva sección
        const translateY = -index * 100;

        // Aplica la transformación CSS para desplazar las secciones
        sections.forEach((section, i) => {
            section.style.transform = `translateY(${translateY}vh)`;
        });

        // Establece un tiempo de espera antes de permitir otro desplazamiento
        setTimeout(() => {
            isScrolling = false;
        }, 800); // Ajusta el valor para controlar la velocidad del desplazamiento
    }
});
