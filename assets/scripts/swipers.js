export const initializeSwipers = () => {
	// About
	const swiperAbout = new Swiper(".about", {
		speed: 3000,
		lazy: true,
		centeredSlides: true,
		autoplay: {
		    delay: 2000,
		    disableOnInteraction: false,
		},
		pagination: {
			el: ".about__pagination",
			clickable: true,
		},
	});

	// News
	const swiperNews = new Swiper(".news__content__feed", {
		direction: "vertical",
		slidesPerView: "auto",
		freeMode: true,
		freeModeMomentum: true,
		spaceBetween: 65,
		scrollbar: {
			el: ".swiper-scrollbar",
			dragSize: 100,
			draggable: true,
		},
		mousewheel: {
			enabled: true,
		},
	});

	// Gallery
	const galleryType = ["PHOTOS_相片", "VIDEOS_影片"];

	// Gallery outer
	const swiperGalleryOuter = new Swiper(".gallery__switcher", {
		spaceBetween: 30,
		centeredSlides: true,
		freeModeMomentum: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
			renderBullet: function (index, className) {
				return (
					'<span class="' +
					className +
					'">' +
					galleryType[index] +
					"</span>"
				);
			},
		},
		scrollbar: {
			el: ".swiper-scrollbar",
			draggable: true,
		},
		breakpoints: {
			// >= 600px
			600: {
				scrollbar: {
					dragSize: 152,
				},
			},
		}
	});

	// Gallery inner
	const swiperGalleryInnerSetup = {
		rewind: true,
		lazy: true,
		spaceBetween: 40,
		freeModeMomentum: true,
		keyboard: {
			enabled: true,
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	}

	const swiperGalleryInnerPhotos = new Swiper(".photos", {
		...swiperGalleryInnerSetup,
		slidesPerView: 1,
		breakpoints: {
			// >= 600px
			600: {
				slidesPerView: 2,
			},
		}
	});
	const swiperGalleryInnerVideos = new Swiper(".videos", {
		...swiperGalleryInnerSetup,
		slidesPerView: 1,
	});
}