import { initializeSwiper } from './swipers.js';
import { inputDarkLogos } from './hoverDarkLink.js'
import { langButtonSwitcher } from './langButton.js'
import { mouseMoveParallax } from './homeMouseMoveParallax.js'

// func of including html which depends on selector of id
const loadContent = (selectorOrId, url) => {
	fetch(url)
		.then(response => response.text())
		.then(data => {
			// choosing method of including
			const targetElement = selectorOrId.startsWith('#') ?
				document.getElementById(selectorOrId.slice(1)) :
				document.querySelector(selectorOrId);

			targetElement.innerHTML = data;

			// checking if there any div with swiper class
			const swiperElements = targetElement.querySelectorAll('.swiper');
			const parallaxElements = targetElement.querySelectorAll('.banner__content');

			// init Swiper if found div with swiper class
			if (swiperElements.length > 0) {
				initializeSwiper();
			}

			// input dark logos src
			inputDarkLogos();

			// lang button switcher handler
			langButtonSwitcher();

			if (parallaxElements) mouseMoveParallax()
			// init paralax props
		})
		.catch(error => console.error(`Error loading ${selectorOrId}:`, error));
}

// obj with components
const contentToLoad = {
	'header': 'includes/header.html',
	'footer': 'includes/footer.html',
	'#home': 'includes/home.html',
	'#about': 'includes/about.html',
	'#news': 'includes/news.html',
	'#gallery': 'includes/gallery.html',
	'#availability': 'includes/availability.html',
	'#newsletter': 'includes/newsletter.html'
};


// loop for including components and init swipers
const loadAllContent = () => {
	const loadPromises = Object.entries(contentToLoad).map(([selectorOrId, url]) =>
		loadContent(selectorOrId, url)
	);

	// init swiper after load resources
	Promise.all(loadPromises).then(() => {
		initializeSwiper();
	});
}

window.addEventListener('DOMContentLoaded', loadAllContent);