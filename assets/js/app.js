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

// const icons = document.querySelectorAll('.language_icon img');

// function getRandomPosition(usedPositions) {
//     const containerWidth = document.querySelector('.language_icon').clientWidth;
//     const containerHeight = document.querySelector('.language_icon').clientHeight;
//     const iconWidth = icons[0].clientWidth;
//     const iconHeight = icons[0].clientHeight;

//     let randomX, randomY;
//     do {
//         randomX = Math.floor(Math.random() * (containerWidth - iconWidth));
//         randomY = Math.floor(Math.random() * (containerHeight - iconHeight));
//     } while (hasCollision(usedPositions, randomX, randomY, iconWidth, iconHeight));

//     return { x: randomX, y: randomY };
// }

// function hasCollision(usedPositions, x, y, width, height) {
//     for (const position of usedPositions) {
//         if (
//             x < position.x + position.width &&
//             x + width > position.x &&
//             y < position.y + position.height &&
//             y + height > position.y
//         ) {
//             return true; // Hay colisión
//         }
//     }
//     return false; // No hay colisión
// }

// function moveIcons() {
//     const usedPositions = [];

//     icons.forEach((icon) => {
//         const randomPosition = getRandomPosition(usedPositions);
//         usedPositions.push({
//             x: randomPosition.x,
//             y: randomPosition.y,
//             width: icon.clientWidth,
//             height: icon.clientHeight,
//         });

//         icon.style.transition = 'transform 2s ease-in-out'; // Animación de 2 segundos
//         icon.style.transform = `translate(${randomPosition.x}px, ${randomPosition.y}px)`;
//     });

//     // Llama a la función nuevamente después de un retraso de 2 segundos
//     setTimeout(() => {
//         icons.forEach((icon) => {
//             icon.style.transition = 'none'; // Elimina la transición para cambiar la posición instantáneamente
//         });
//         requestAnimationFrame(moveIcons);
//     }, 2000);
// }

// // Iniciar la animación
// moveIcons();


