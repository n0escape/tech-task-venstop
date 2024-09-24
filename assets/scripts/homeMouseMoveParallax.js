export const mouseMoveParallax = () => {
    const parallax = document.querySelector('.banner__content');
    const parallaxLayers = document.querySelectorAll('.parallax-layer');

    if (parallax){
        const moveLayers = (e) => {
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const clientY = e.touches ? e.touches[0].clientY : e.clientY;

            parallaxLayers.forEach((layer, index) => {
                const speed = layer.getAttribute('data-speed');
                const xOffset = (clientX - window.innerWidth / 2) / speed;
                const yOffset = (clientY - window.innerHeight / 2) / speed;

                layer.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
            });
        };

        parallax.addEventListener('mousemove', moveLayers);
        parallax.addEventListener('touchmove', moveLayers);
    }
}