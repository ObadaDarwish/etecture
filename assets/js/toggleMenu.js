$(document).ready(function () {
    $('#header').load("templates/header.html", () => {
        let menuTrigger = document.querySelector('.menu-trigger');
        let menuIconTrigger = document.querySelector('.menu-icon-trigger');
        const navLinks = document.querySelector('.nav-links');
        const menu = document.querySelector('.menu');
        const closeMenuButton = document.getElementById('menu-trigger-close');
        let menuClosed = true;

        function toggleMenu() {
            if (menuClosed) {
                menu.classList.add('open');
                navLinks.classList.add('hidden');
                menuIconTrigger.classList.add('hidden');
                menuClosed = false;
            } else {
                menu.classList.remove('open');
                navLinks.classList.remove('hidden');
                menuClosed = true;
            }
        }

        menuTrigger.addEventListener('click', (e) => {
            toggleMenu();
        });
        menuIconTrigger.addEventListener('click', (e) => {
            toggleMenu();
        });
        closeMenuButton.addEventListener('click', () => {
            menu.classList.remove('open');
            navLinks.classList.remove('hidden');
            menuIconTrigger.classList.remove('hidden');
            menuClosed = true;
        });
    });
});
