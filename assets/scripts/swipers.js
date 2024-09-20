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
    const swiperNews = new Swiper(".news__content__feed", {
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: true,
        spaceBetween: 65,
        scrollbar: {
          el: ".swiper-scrollbar",
        },
        mousewheel: true,
      });
}