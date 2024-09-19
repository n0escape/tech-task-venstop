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
    '#contact': 'includes/contact.html',
    '#newsletter': 'includes/newsletter.html'
  };
  
  // loop for including components
  for (const [selectorOrId, url] of Object.entries(contentToLoad)) {
    loadContent(selectorOrId, url);
  }
  