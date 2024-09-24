export const menuHandler = () => {
    const navElements = document.querySelectorAll(".header__nav");
    const menuButtons = document.querySelectorAll(".header__menu-button");

    menuButtons.forEach(menu => {
        menu.addEventListener('click', () => {
            navElements.forEach(nav => nav.classList.toggle('showList'))
        })
    })

    navElements.forEach(navElem => {
        navElem.addEventListener("click", (event) => {
            if (event.target.tagName === "A") {
                navElements.forEach(nav => nav.classList.remove('showList'))
            }
        });
    })
}
    