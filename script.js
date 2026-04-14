document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.getElementById('navLinks');
    const links = Array.from(document.querySelectorAll('.nav-links a'));
    const sections = Array.from(document.querySelectorAll('main section[id]'));
    const revealItems = Array.from(document.querySelectorAll('.reveal'));
    const year = document.getElementById('year');

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('open');
            menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        links.forEach((link) => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    const setActiveLink = () => {
        const scrollTarget = window.scrollY + 140;

        sections.forEach((section) => {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;
            const id = section.getAttribute('id');

            if (!id) return;

            const matched = scrollTarget >= top && scrollTarget < bottom;
            const relatedLink = document.querySelector(`.nav-links a[href="#${id}"]`);

            if (relatedLink) {
                relatedLink.classList.toggle('active', matched);
            }
        });
    };

    window.addEventListener('scroll', setActiveLink, { passive: true });
    setActiveLink();

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );

        revealItems.forEach((item) => observer.observe(item));
    } else {
        revealItems.forEach((item) => item.classList.add('is-visible'));
    }
});
