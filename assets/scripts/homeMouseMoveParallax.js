export const mouseMoveParallax = () => {
    const parallax = document.querySelector('.banner__content');
    const parallaxLayers = document.querySelectorAll('.parallax-layer');

    if (parallax){
        parallax.addEventListener('mousemove', (e) => {
            parallaxLayers.forEach((layer, index) => {
                
                const layerWidth = parallaxLayers[index].width;
                const speed = layer.getAttribute('data-speed');
                const xOffset = (e.clientX - window.innerWidth / 2) / speed;
                const yOffset = (e.clientY - window.innerHeight / 2) / speed;
                
                layer.style.transform = `translate(${xOffset}px, ${yOffset}px)`
            });
        })
    }
}