document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const navLinks = document.getElementById('navLinks');
    const navAnchors = Array.from(document.querySelectorAll('.nav-links a'));
    const sections = Array.from(document.querySelectorAll('main section[id]'));
    const revealNodes = Array.from(document.querySelectorAll('.reveal'));
    const typedText = document.getElementById('typedText');
    const faqItems = Array.from(document.querySelectorAll('.faq-item'));
    const yearNode = document.getElementById('year');

    if (yearNode) {
        yearNode.textContent = String(new Date().getFullYear());
    }

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('open');
            menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        navAnchors.forEach((anchor) => {
            anchor.addEventListener('click', () => {
                navLinks.classList.remove('open');
                menuBtn.setAttribute('aria-expanded', 'false');
            });
        });
    }

    const markActiveLink = () => {
        const offset = window.scrollY + 160;

        sections.forEach((section) => {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;
            const id = section.getAttribute('id');
            if (!id) return;

            const link = document.querySelector(`.nav-links a[href="#${id}"]`);
            if (!link) return;

            const isActive = offset >= top && offset < bottom;
            link.classList.toggle('active', isActive);
        });
    };

    window.addEventListener('scroll', markActiveLink, { passive: true });
    markActiveLink();

    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        revealObserver.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.18 }
        );

        revealNodes.forEach((node) => revealObserver.observe(node));
    } else {
        revealNodes.forEach((node) => node.classList.add('is-visible'));
    }

    const phrases = [
        '.NET Full-Stack Developer',
        'C# · SQL Server · PostgreSQL',
        'Clean Architecture & APIs'
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const typeLoop = () => {
        if (!typedText) return;

        const current = phrases[phraseIndex];
        typedText.textContent = deleting
            ? current.slice(0, charIndex--)
            : current.slice(0, charIndex++);

        let delay = deleting ? 42 : 82;

        if (!deleting && charIndex > current.length) {
            deleting = true;
            delay = 1100;
        }

        if (deleting && charIndex < 0) {
            deleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            delay = 240;
        }

        window.setTimeout(typeLoop, delay);
    };

    typeLoop();

    faqItems.forEach((item) => {
        const trigger = item.querySelector('.faq-question');
        if (!trigger) return;

        trigger.addEventListener('click', () => {
            const willOpen = !item.classList.contains('is-open');

            faqItems.forEach((entry) => {
                entry.classList.remove('is-open');
                const entryBtn = entry.querySelector('.faq-question');
                if (entryBtn) entryBtn.setAttribute('aria-expanded', 'false');
            });

            if (willOpen) {
                item.classList.add('is-open');
                trigger.setAttribute('aria-expanded', 'true');
            }
        });
    });
});
