$(document).ready(function () {
    $('#header').load("templates/nav.html", () => {
        let menuTrigger = document.querySelector('.menu-trigger');
        let menuIconTrigger = document.querySelector('.menu-icon-trigger');
        const navLinks = document.querySelector('.nav-links');
        const menu = document.querySelector('.menu');
        const closeMenuButton = document.getElementById('menu-trigger-close');
        let menuClosed = true;

        function noScroll() {
            window.scrollTo(0, 0);
        }

        function toggleMenu() {
            if (menuClosed) {
                menu.classList.add('open');
                navLinks.classList.add('hidden');
                window.addEventListener('scroll', noScroll);
                menuIconTrigger.classList.add('hidden');
                setTimeout(()=>{
                    $('html').css({overflow: 'hidden'});
                },500)
                menuClosed = false;
            } else {
                menu.classList.remove('open');
                navLinks.classList.remove('hidden');
                window.removeEventListener('scroll', noScroll);
                $('html').css({overflow: 'scroll'});
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
            $('html').css({overflow: 'scroll'});
            window.removeEventListener('scroll', noScroll);
            menuClosed = true;
        });
    });
});
