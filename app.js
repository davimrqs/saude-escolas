const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");

openMenu.addEventListener("click", (event) => {
    menu.style.display = 'flex';
    setTimeout(() => {
        menu.style.opacity = 1;
    }, 10)
    })

closeMenu.addEventListener("click", (event) => {
    menu.style.opacity = 0;
    setTimeout(() => {
        menu.removeAttribute('style');
    }, 200)
    })