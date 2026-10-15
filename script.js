const translations = {
    es: {
        'nav-home': 'Inicio',
        'nav-projects': 'Proyectos',
        'nav-about': 'Sobre mi',
        'nav-contact': 'Contacto',
        'hero-kicker': 'Portafolio profesional',
        'hero-title': 'Hola! soy Gregori',
        'hero-desc': 'Explora mis proyectos, conoce mas sobre mi perfil y hablemos si buscas un desarrollador .NET comprometido con resultados.',
        'hero-projects-btn': 'Ver proyectos',
        'hero-contact-btn': 'Contactame',
        'about-kicker': 'Sobre mi',
        'about-title': 'Desarrollador .NET enfocado en arquitectura y calidad',
        'about-desc': 'Soy desarrollador de software junior especializado en .NET y C#, con experiencia en aplicaciones desktop y APIs. Me enfoco en Clean Architecture, principios SOLID y buenas practicas para entregar soluciones estables y escalables.',
        'about-link': 'Hablemos de tu proyecto',
        'projects-kicker': 'Proyectos',
        'projects-title': 'Proyectos destacados',
        'projects-all-kicker': 'Proyectos',
        'projects-all-title': 'Todos los proyectos',
        'collab-badge': 'Colaborativo',
        'project-1-desc': 'Plataforma para gestion de consultas clinicas con autenticacion JWT, notificaciones en tiempo real y persistencia en PostgreSQL.',
        'project-2-desc': 'Sistema de escritorio para facturacion, clientes y recibos. Integra SQL Server, reglas de negocio y estructura orientada a mantenimiento.',
        'project-3-desc': 'Aplicación web para visualizar y reportar robos recientes en República Dominicana con mapa interactivo, filtros y panel admin.',
        'project-4-desc': 'App web para calcular comisiones de vendedores por ventas mensuales y política regional. Clean Architecture + SOLID en vanilla JS.',
        'project-5-desc': 'Class Library modular en C# con Clean Architecture para predecir consumo eléctrico. Centraliza la lógica de negocio para integrarse en múltiples interfaces .NET (Web, Desktop, MAUI).',
        'project-6-desc': 'Plataforma de conexión profesional para networking y oportunidades laborales. En desarrollo con arquitectura moderna.',
        'project-7-desc': 'Plataforma de votación electrónica con autenticación segura, gestión de candidatos y resultados en tiempo real con PostgreSQL.',
        'project-8-desc': 'Sistema para cálculo y gestión de costos de importación, con control de aranceles, tasas y generación de reportes.',
        'project-voosk-desc': 'Plataforma de agentes IA que muestra en vivo plan, pasos, diffs y comandos, con API REST, WebSocket y CLI.',
        'project-artemis-desc': 'Sistema bancario con roles, transacciones y pagos Hermes Pay. Clean Architecture + CQRS con .NET 9 y PostgreSQL.',
        'code-link': 'Codigo',
        'tech-kicker': 'Perfil tecnico',
        'tech-title': 'Sobre mi trabajo',
        'faq-1-q': 'Que tecnologias uso?',
        'faq-1-a': 'Trabajo con C#, .NET, .NET MAUI, React, HTML, CSS, SQL Server, PostgreSQL, EF Core, Git y Docker.',
        'faq-2-q': 'Experiencia tecnica',
        'faq-2-a': 'Desarrollo aplicaciones desktop de alto rendimiento y servicios backend con APIs REST, aplicando buenas practicas de arquitectura y codigo mantenible.',
        'faq-3-q': 'Formacion continua',
        'faq-3-a': 'Mantengo aprendizaje continuo en patrones de diseno, arquitectura limpia y mejora de procesos para entregar software confiable en entornos reales.',
        'faq-4-q': 'Trabajo en equipo',
        'faq-4-a': 'Me adapto bien a equipos multidisciplinarios, flujo con Git/GitHub y colaboracion con enfoque en calidad, comunicacion clara y entrega iterativa.',
        'cta-title': 'Trabajamos juntos?',
        'cta-desc': 'Estoy disponible para nuevas oportunidades. Hablemos.',
        'cta-email-btn': 'Enviar email',
        'cta-linkedin-btn': 'LinkedIn',
        'greeting': 'Hola, bienvenido',
    },
    en: {
        'nav-home': 'Home',
        'nav-projects': 'Projects',
        'nav-about': 'About me',
        'nav-contact': 'Contact',
        'hero-kicker': 'Professional Portfolio',
        'hero-title': "Hi! I'm Gregori",
        'hero-desc': 'Explore my projects, learn more about my profile and let\'s talk if you\'re looking for a .NET developer committed to results.',
        'hero-projects-btn': 'View Projects',
        'hero-contact-btn': 'Contact Me',
        'about-kicker': 'About me',
        'about-title': '.NET Developer focused on architecture and quality',
        'about-desc': "I'm a junior software developer specialized in .NET and C#, with experience in desktop applications and APIs. I focus on Clean Architecture, SOLID principles and good practices to deliver stable and scalable solutions.",
        'about-link': "Let's talk about your project",
        'projects-kicker': 'Projects',
        'projects-title': 'Featured Projects',
        'projects-all-kicker': 'Projects',
        'projects-all-title': 'All Projects',
        'collab-badge': 'Collaborative',
        'project-1-desc': 'Platform for clinical appointment management with JWT authentication, real-time notifications and PostgreSQL persistence.',
        'project-2-desc': 'Desktop system for invoicing, clients and receipts. Integrates SQL Server, business rules and maintenance-oriented structure.',
        'project-3-desc': 'Web application to view and report recent thefts in Dominican Republic with interactive map, filters and admin panel.',
        'project-4-desc': 'Web app to calculate sales commissions by monthly sales and regional policy. Clean Architecture + SOLID in vanilla JS.',
        'project-5-desc': 'Modular C# Class Library with Clean Architecture to predict electrical consumption. Centralizes business logic to integrate into multiple .NET interfaces (Web, Desktop, MAUI).',
        'project-6-desc': 'Professional connection platform for networking and job opportunities. In development with modern architecture.',
        'project-7-desc': 'Electronic voting platform with secure authentication, candidate management and real-time results with PostgreSQL.',
        'project-8-desc': 'System for calculating and managing import costs, with tariff control, fees and report generation.',
        'project-voosk-desc': 'AI agent platform that streams plan, steps, diffs and commands live, with REST API, WebSocket and CLI.',
        'project-artemis-desc': 'Banking system with roles, transactions and Hermes Pay payments. Clean Architecture + CQRS with .NET 9 and PostgreSQL.',
        'code-link': 'Code',
        'tech-kicker': 'Technical Profile',
        'tech-title': 'About My Work',
        'faq-1-q': 'What technologies do I use?',
        'faq-1-a': 'I work with C#, .NET, .NET MAUI, React, HTML, CSS, SQL Server, PostgreSQL, EF Core, Git and Docker.',
        'faq-2-q': 'Technical Experience',
        'faq-2-a': 'I develop high-performance desktop applications and backend services with REST APIs, applying good architecture practices and maintainable code.',
        'faq-3-q': 'Continuous Learning',
        'faq-3-a': 'I maintain continuous learning in design patterns, clean architecture and process improvement to deliver reliable software in real environments.',
        'faq-4-q': 'Teamwork',
        'faq-4-a': 'I adapt well to multidisciplinary teams, Git/GitHub workflow and collaboration with focus on quality, clear communication and iterative delivery.',
        'cta-title': "Let's work together?",
        'cta-desc': "I'm available for new opportunities. Let's talk.",
        'cta-email-btn': 'Send email',
        'cta-linkedin-btn': 'LinkedIn',
        'greeting': 'Hi, welcome',
    },
};

let currentLang = 'es';

const projects = [
    { slug: 'medagenda', title: 'MedAgenda', descKey: 'project-1-desc', image: 'medagenda-portada.png', tags: ['C#', '.NET 8', '.NET MAUI', 'EF Core', 'PostgreSQL', 'SignalR'], repo: 'https://github.com/Johanvasquezdev/MedAgenda', featured: true, collaborative: false },
    { slug: 'predictor', title: 'Predictor Consumo Eléctrico', descKey: 'project-5-desc', image: 'ConsumoElectrico.png', tags: ['C#', 'ASP.NET MVC', 'Clean Architecture', 'HTML/CSS', 'Class Library'], repo: 'https://github.com/GregoriEJimenezDev/PredicadorConsumoElectrico', featured: true, collaborative: false },
    { slug: 'evote360pro', title: 'Evote360Pro', descKey: 'project-7-desc', image: null, tags: ['C#', '.NET', 'Clean Architecture', 'PostgreSQL', 'Entity Framework'], repo: 'https://github.com/GregoriEJimenezDev/Evote360Pro', featured: true, collaborative: false },
    { slug: 'linkup-pro', title: 'LinkUp-Pro', descKey: 'project-6-desc', image: 'linkPro.png', tags: ['C#', 'ASP.NET MVC', 'Clean Architecture', 'SQL Server'], repo: 'https://github.com/GregoriEJimenezDev/LinkUp-Pro', featured: true, collaborative: false },
    { slug: 'voosk', title: 'VOOsk', descKey: 'project-voosk-desc', image: null, tags: ['Python', 'FastAPI', 'PostgreSQL', 'React', 'WebSocket', 'Docker'], repo: 'https://github.com/GregoriEJimenezDev/VOOsk.git', featured: true, collaborative: false },
    { slug: 'artemis', title: 'ArtemisBankingPro', descKey: 'project-artemis-desc', image: null, tags: ['C#', '.NET 9', 'EF Core', 'PostgreSQL', 'MediatR', 'JWT'], repo: 'https://github.com/Johanvasquezdev/ArtemisBankingPro.git', featured: true, collaborative: true },
    { slug: 'safemap', title: 'SafeMap RD', descKey: 'project-3-desc', image: 'safemap-portada.png', tags: ['JavaScript', 'Node.js', 'Leaflet', 'HTML/CSS', 'Seguridad'], repo: 'https://github.com/GregoriEJimenezDev/Safety', featured: false, collaborative: false },
    { slug: 'comisiones', title: 'Calculadora de Comisiones', descKey: 'project-4-desc', image: 'CalculadorComision.png', tags: ['JavaScript', 'HTML/CSS', 'Clean Architecture', 'SOLID', 'UX Heuristics'], repo: 'https://github.com/GregoriEJimenezDev/CalculadoraComisionVentas', featured: false, collaborative: false },
    { slug: 'importcost', title: 'ImportCost-Pro', descKey: 'project-8-desc', image: null, tags: ['C#', '.NET', 'Clean Architecture', 'SQL Server'], repo: 'https://github.com/Johanvasquezdev/ImportCost-Pro', featured: false, collaborative: true },
];

function projectCardHTML(p) {
    const visual = p.image
        ? `<img src="${p.image}" alt="${p.title}" class="project-image" loading="lazy">`
        : `<div class="project-image project-image-fallback"><span>${p.title}</span></div>`;
    const tags = p.tags.map((t) => `<li>${t}</li>`).join('');
    const badge = p.collaborative ? `<span class="collab-badge" data-i18n="collab-badge">Colaborativo</span>` : '';
    return `<article class="project-card">${visual}<div class="project-content"><h3>${p.title} ${badge}</h3><p data-i18n="${p.descKey}"></p><ul class="tag-list">${tags}</ul><div class="project-actions"><a href="${p.repo}" target="_blank" rel="noreferrer" data-i18n="code-link">Codigo</a></div></div></article>`;
}

function renderProjects() {
    const featuredGrid = document.getElementById('featuredGrid');
    const allGrid = document.getElementById('projectsGrid');
    if (featuredGrid) featuredGrid.innerHTML = projects.filter((p) => p.featured).map(projectCardHTML).join('');
    if (allGrid) allGrid.innerHTML = projects.filter((p) => !p.featured).map(projectCardHTML).join('');
}

function detectLanguage() {
    const saved = localStorage.getItem('lang');
    if (saved && translations[saved]) {
        return saved;
    }
    const browserLang = navigator.language || navigator.userLanguage || '';
    if (browserLang.startsWith('es')) {
        return 'es';
    }
    return 'en';
}

function applyLanguage(lang) {
    currentLang = lang;
    const nodes = document.querySelectorAll('[data-i18n]');
    nodes.forEach((node) => {
        const key = node.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            node.textContent = translations[lang][key];
        }
    });
    document.documentElement.lang = lang === 'es' ? 'es' : 'en';
    const btn = document.getElementById('langBtn');
    if (btn) {
        btn.textContent = lang.toUpperCase();
        btn.title = lang === 'es' ? 'Change language' : 'Cambiar idioma';
    }
    localStorage.setItem('lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    const detected = detectLanguage();
    applyLanguage(detected);

    const langBtn = document.getElementById('langBtn');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            const next = currentLang === 'es' ? 'en' : 'es';
            applyLanguage(next);
        });
    }

    const menuBtn = document.getElementById('menuBtn');
    const navLinks = document.getElementById('navLinks');
    const navAnchors = Array.from(document.querySelectorAll('.nav-links a'));
    const sections = Array.from(document.querySelectorAll('main section[id]'));
    const revealNodes = Array.from(document.querySelectorAll('.reveal'));
    const typedText = document.getElementById('typedText');
    const faqItems = Array.from(document.querySelectorAll('.faq-item'));
    const yearNode = document.getElementById('year');
    const aboutPhotoCard = document.getElementById('aboutPhotoCard');

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
        'C# \u00b7 SQL Server \u00b7 PostgreSQL',
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

    const triggerGreeting = () => {
        if (!aboutPhotoCard) return;
        aboutPhotoCard.classList.remove('is-greeting');
        const video = document.querySelector('.about-video');
        if (video) {
            video.currentTime = 0;
            video.play().catch(() => {});
        }
        window.requestAnimationFrame(() => aboutPhotoCard.classList.add('is-greeting'));
        window.setTimeout(() => {
            aboutPhotoCard.classList.remove('is-greeting');
        }, 1200);
    };

    if (aboutPhotoCard) {
        const handleMove = (event) => {
            const rect = aboutPhotoCard.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            const offsetX = (x / rect.width - 0.5) * 2;
            const offsetY = (y / rect.height - 0.5) * 2;

            aboutPhotoCard.style.setProperty('--tilt-x', `${(offsetY * -7).toFixed(2)}deg`);
            aboutPhotoCard.style.setProperty('--tilt-y', `${(offsetX * 9).toFixed(2)}deg`);
        };

        const resetTilt = () => {
            aboutPhotoCard.style.setProperty('--tilt-x', '0deg');
            aboutPhotoCard.style.setProperty('--tilt-y', '0deg');
        };

        aboutPhotoCard.addEventListener('mousemove', handleMove);
        aboutPhotoCard.addEventListener('mouseleave', resetTilt);
        aboutPhotoCard.addEventListener('mouseenter', triggerGreeting);
        aboutPhotoCard.addEventListener('click', triggerGreeting);
        aboutPhotoCard.addEventListener('focus', triggerGreeting);
        aboutPhotoCard.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                triggerGreeting();
            }
        });
    }
});
