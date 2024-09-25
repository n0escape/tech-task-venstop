export const posAboutText = () => {
    const containers = document.querySelectorAll('.about__wrapper__slide__content');
    containers.forEach(container => {
        const line = container.querySelector('.about__wrapper__slide__content__line');
        const h3 = container.querySelector('h3');
        const p = container.querySelector('p');

        const lineRect = line.getBoundingClientRect();
        const parentRect = line.parentElement.getBoundingClientRect();
        const lineCenterY = lineRect.top - parentRect.top + lineRect.height / 2;

        const h3Height = h3.offsetHeight;
        const pHeight = p.offsetHeight;

        h3.style.top = `${lineCenterY - h3Height - 20}px`;

        p.style.top = `${lineCenterY + 20}px`;
    })
}

window.addEventListener('resize', posAboutText);