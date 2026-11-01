// 1. Centralized Site & Resume Config
    const siteConfig = {
      candidateName: "Rajesh R",
      candidateRole: "AI & Data Science Engineer"
    };

    // 2. Download / Print Handler
    function handleResumeDownload() {
      // Offers clean browser print-to-PDF dialog for instant high-res output
      window.print();
    }

    // 3. Modal Lightbox Logic
    const resumeModalBackdrop = document.getElementById('resume-modal-backdrop');
    const resumeModalCloseBtn = document.getElementById('resume-modal-close-btn');
    const modalBodyContent = document.getElementById('modal-body-content');
    const printableSheet = document.getElementById('printable-resume-sheet');

    function openResumeModal() {
      if (modalBodyContent && printableSheet) {
        modalBodyContent.innerHTML = printableSheet.outerHTML;
      }
      resumeModalBackdrop.classList.add('open');
      resumeModalBackdrop.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function closeResumeModal() {
      resumeModalBackdrop.classList.remove('open');
      resumeModalBackdrop.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    if (resumeModalCloseBtn) {
      resumeModalCloseBtn.addEventListener('click', closeResumeModal);
    }

    if (resumeModalBackdrop) {
      resumeModalBackdrop.addEventListener('click', (e) => {
        if (e.target === resumeModalBackdrop) {
          closeResumeModal();
        }
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && resumeModalBackdrop.classList.contains('open')) {
        closeResumeModal();
      }
    });

    // 4. Mobile Navigation Drawer
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

    // 5. Theme Toggle with LocalStorage Persistence
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

    // 6. Scroll to top button
    const scrollTopBtn = document.getElementById('scroll-top-btn');
    if (scrollTopBtn) {
      scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
