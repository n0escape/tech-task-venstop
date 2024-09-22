import { initializeSwiper } from './swipers.js';

// func of including html which depends on selector of id
const loadContent = (selectorOrId, url) => {
  fetch(url)
    .then(response => response.text())
    .then(data => {
      // choosing method of including
      const targetElement = selectorOrId.startsWith('#') 
        ? document.getElementById(selectorOrId.slice(1))
        : document.querySelector(selectorOrId);

      targetElement.innerHTML = data;
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
const loadAllContent = async () => {
  for (const [selectorOrId, url] of Object.entries(contentToLoad)) {
      await loadContent(selectorOrId, url);
  }
  setTimeout(() => initializeSwiper(), 500);
}

window.addEventListener('DOMContentLoaded', loadAllContent);
  