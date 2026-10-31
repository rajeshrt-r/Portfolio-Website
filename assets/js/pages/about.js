// 1. Mobile navigation toggle
    const menuToggleBtn = document.getElementById('menu-toggle-btn');
    const mobileNav = document.getElementById('mobile-nav');

    if (menuToggleBtn && mobileNav) {
      menuToggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = mobileNav.classList.toggle('open');
        menuToggleBtn.setAttribute('aria-expanded', isOpen);
        const icon = menuToggleBtn.querySelector('i');
        if (isOpen) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-xmark');
        } else {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      });

      document.addEventListener('click', (e) => {
        if (!mobileNav.contains(e.target) && !menuToggleBtn.contains(e.target)) {
          mobileNav.classList.remove('open');
          menuToggleBtn.setAttribute('aria-expanded', 'false');
          const icon = menuToggleBtn.querySelector('i');
          if (icon) {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
          }
        }
      });
    }

    // 2. Theme toggle with localStorage persistence
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const themeIcon = document.getElementById('theme-icon');
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';

    if (savedTheme === 'light') {
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

    // 3. Scroll to top button
    const scrollTopBtn = document.getElementById('scroll-top-btn');
    if (scrollTopBtn) {
      scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
