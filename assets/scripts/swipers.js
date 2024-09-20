export const initializeSwiper = () => {
    const swiperAbout = new Swiper(".about", {
        lazy: true,
        centeredSlides: true,
        // autoplay: {
        //     delay: 2000,
        //     disableOnInteraction: false,
        // },
        pagination: {
            el: ".about__pagination",
            clickable: true,
        },
    });
}