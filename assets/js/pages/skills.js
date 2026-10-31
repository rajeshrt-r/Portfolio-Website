// Mobile navigation toggle
        const menuToggleBtn = document.getElementById('menu-toggle-btn') || document.querySelector('.menu-toggle');
        const mobilePanel = document.getElementById('mobile-nav');
        const menuIcon = menuToggleBtn ? menuToggleBtn.querySelector('i') : null;

        if (menuToggleBtn && mobilePanel) {
            menuToggleBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const isOpen = mobilePanel.classList.toggle('open');
                menuToggleBtn.setAttribute('aria-expanded', isOpen);
                if (menuIcon) {
                    if (isOpen) {
                        menuIcon.classList.remove('fa-bars');
                        menuIcon.classList.add('fa-xmark');
                    } else {
                        menuIcon.classList.remove('fa-xmark');
                        menuIcon.classList.add('fa-bars');
                    }
                }
            });

            document.addEventListener('click', (e) => {
                if (!mobilePanel.contains(e.target) && !menuToggleBtn.contains(e.target)) {
                    mobilePanel.classList.remove('open');
                    menuToggleBtn.setAttribute('aria-expanded', 'false');
                    if (menuIcon) {
                        menuIcon.classList.remove('fa-xmark');
                        menuIcon.classList.add('fa-bars');
                    }
                }
            });
        }

        // Theme toggle with localStorage persistence
        const themeToggleBtn = document.getElementById('theme-toggle-btn');
        const themeIcon = document.getElementById('theme-icon');
        const currentTheme = localStorage.getItem('portfolio-theme') || 'dark';
        if (currentTheme === 'light') {
            document.body.classList.add('light-theme');
            if (themeIcon) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            }
        }

        if (themeToggleBtn) {
            themeToggleBtn.addEventListener('click', () => {
                document.body.classList.toggle('light-theme');
                const isLight = document.body.classList.contains('light-theme');
                if (isLight) {
                    if (themeIcon) {
                        themeIcon.classList.remove('fa-moon');
                        themeIcon.classList.add('fa-sun');
                    }
                    localStorage.setItem('portfolio-theme', 'light');
                } else {
                    if (themeIcon) {
                        themeIcon.classList.remove('fa-sun');
                        themeIcon.classList.add('fa-moon');
                    }
                    localStorage.setItem('portfolio-theme', 'dark');
                }
            });
        }

        // Scroll to top
        const scrollTopBtn = document.getElementById('scroll-top-btn');
        if (scrollTopBtn) {
            scrollTopBtn.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
