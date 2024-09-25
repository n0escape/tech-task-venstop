import { initializeSwipers } from './swipers.js';
import { inputDarkLogos } from './hoverDarkLink.js'
import { langButtonSwitcher } from './langButton.js'
import { mouseMoveParallax } from './homeMouseMoveParallax.js'
import { formValidation } from './formValidation.js'
import { menuHandler } from './menuHandler.js'
import { posAboutText } from './posAboutText.js'

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

			// checking if there any div with needed class
			const swiperElements = targetElement.querySelectorAll('.swiper');
			const headerElements = targetElement.querySelectorAll('.header');
			const homeElements = targetElement.querySelectorAll('.banner');
			const aboutElemets = targetElement.querySelectorAll('.about');
			const newsletterElements = targetElement.querySelectorAll('.newsletter');

			// init Swiper if found div with swiper class
			if (swiperElements.length > 0) initializeSwipers();

			// init lang button switcher handler when loaded header
			if (headerElements.length > 0) langButtonSwitcher();

			// init lang button switcher handler when loaded header
			if (headerElements.length > 0) menuHandler();

			// init paralax props when loaded home section
			if (homeElements.length > 0) mouseMoveParallax();

			// init pos of text elements relatively to the line when loaded about section
			if (aboutElemets.length > 0) posAboutText()

			// add validation to inputs in form when loaded newsletter section
			if (newsletterElements.length > 0) formValidation();

			// input dark logos src when loaded newsletter section
			if (newsletterElements.length > 0) inputDarkLogos();
			
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
}

window.addEventListener('DOMContentLoaded', loadAllContent);