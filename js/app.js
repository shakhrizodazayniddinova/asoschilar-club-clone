(function responsiveMenuJs() {
    const menuOpenBtn = document.querySelector('.header-hamburger');
    const menuCloseBtn = document.querySelector('.responsive-menu-btn');
    const menu = document.querySelector('.responsive-menu');
    const navLinks = document.querySelectorAll('.nav-list .nav-link');
    const body = document.body;

    // Universal function to toggle menu visibility
    const toggleMenu = (show) => {
        menu?.classList.toggle('active', show);
        body?.classList.toggle('active', show);
    };

    menuOpenBtn?.addEventListener('click', () => toggleMenu(true));
    menuCloseBtn?.addEventListener('click', () => toggleMenu(false));
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => toggleMenu(false));
    });
})();

// dynamic lazy loading added images
document.querySelectorAll('img').forEach(img => {
    if (!img.hasAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }
});