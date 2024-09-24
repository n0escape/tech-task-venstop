export const langButtonSwitcher = () => {
    const languageSwitcher = document.querySelector('.header__buttons__lang');
    const languageButton = document.querySelector('.header__buttons__lang__current');
    const options = document.querySelectorAll('.header__buttons__lang__dropdown__option');
    
    languageButton.addEventListener('click', () => languageSwitcher.classList.toggle('active'));

    options.forEach(option => {
        option.removeEventListener('click', handleLanguageChange);
        option.addEventListener('click', handleLanguageChange);
    });

    document.addEventListener('click', (event) => {
        if (!languageSwitcher.contains(event.target)) {
            languageSwitcher.classList.remove('active');
        }
    });
}

const handleLanguageChange = (event) => {
    // show selected lang
    const selectedLanguage = event.target.textContent;
    const languageButton = document.querySelector('.header__buttons__lang__current');
    languageButton.innerHTML = `${selectedLanguage} <span>&#9660;</span>`;
    languageButton.closest('.header__buttons__lang').classList.remove('active');
    // handle lang
    console.log(selectedLanguage);
};