// 1. Certificate Data for Verified Credential Modal
    const certDetailsData = {
      cyber: {
        title: "Cybersecurity & Ethical Hacking",
        issuer: "Cappriciosec University",
        date: "18 Jan 2026",
        id: "8b319c5aaa096add1365",
        skills: "Linux, Go, Python, Social Engineering, Wi-Fi Hacking, Web/API Pentesting, Active Directory Pentesting, Hardware & IoT Hacking",
        svg: `<img src="https://raw.githubusercontent.com/rajeshrt-r/Portfolio-Website/main/assets/images/certifications/cyber-security-and-ethical-hacking-certificate.jpg" alt="Cybersecurity & Ethical Hacking Certificate - Cappriciosec University" style="width: 100%; height: auto; max-height: 480px; object-fit: contain; border-radius: 6px;">`
      },
      java: {
        title: "Java Fundamentals",
        issuer: "Uniq Technologies",
        date: "Jan 2026",
        id: "Reg. No.: UQ25-0379",
        skills: "Core Java, OOP Architecture, Data Structures, Exception Handling, Collections",
        svg: `<img src="https://raw.githubusercontent.com/rajeshrt-r/Portfolio-Website/main/assets/images/certifications/java-certificate.jpg" alt="Java Fundamentals Certificate - Uniq Technologies" style="width: 100%; height: auto; max-height: 480px; object-fit: contain; border-radius: 6px;">`
      },
      uiux: {
        title: "UI & UX Design Internship",
        issuer: "JCS Infotech",
        date: "03 Jun 2026 – 30 Jun 2026",
        id: "Internship Certificate • JCS Infotech",
        skills: "UI Design, UX Design",
        svg: `<img src="https://raw.githubusercontent.com/rajeshrt-r/Portfolio-Website/main/assets/images/certifications/img-20260808-151740.jpg" alt="UI & UX Design Internship Certificate - JCS Infotech" style="width: 100%; height: auto; max-height: 480px; object-fit: contain; border-radius: 6px;">`
      },
      aiml: {
        title: "AI & ML Internship",
        issuer: "MATT Engineering Solutions",
        date: "12 Jan 2026 – 19 Jan 2026",
        id: "Internship Certificate • Issued by K. Ragunathan",
        skills: "Artificial Intelligence, Machine Learning, Data Analysis, Python, Applied ML Workflows",
        svg: `<img src="https://raw.githubusercontent.com/rajeshrt-r/Portfolio-Website/main/assets/images/certifications/img-20260808-144310.jpg" alt="AI & ML Internship Certificate - MATT Engineering Solutions" style="width: 100%; height: auto; max-height: 480px; object-fit: contain; border-radius: 6px;">`
      },
      dca: {
        title: "Diploma in Computer Application",
        issuer: "Metro Soft Computers",
        date: "12 Dec 2020 – 06 Mar 2021 (Issued: 25 Mar 2021)",
        id: "Reg. No.: 006312 • Grade: Excellent",
        skills: "Computer Applications, MS Office, Programming Fundamentals, Operating Systems, Office Productivity",
        svg: `<img src="https://raw.githubusercontent.com/rajeshrt-r/Portfolio-Website/main/assets/images/certifications/img-20260808-144839.jpg" alt="Diploma in Computer Application Certificate - Metro Soft Computers" style="width: 100%; height: auto; max-height: 480px; object-fit: contain; border-radius: 6px;">`
      }
    };

    // 2. Modal Controller
    const certModalBackdrop = document.getElementById('cert-modal-backdrop');
    const certModalCloseBtn = document.getElementById('modal-cert-close-btn');
    const modalCertTitle = document.getElementById('modal-cert-title');
    const modalCertIssuer = document.getElementById('modal-cert-issuer');
    const modalCertDate = document.getElementById('modal-cert-date');
    const modalCertId = document.getElementById('modal-cert-id');
    const modalCertSkills = document.getElementById('modal-cert-skills');
    const modalCertSvgBox = document.getElementById('modal-cert-svg-box');

    function openCertModal(key) {
      const data = certDetailsData[key];
      if (!data) return;

      modalCertTitle.textContent = data.title;
      modalCertIssuer.textContent = data.issuer;
      modalCertDate.textContent = data.date;
      modalCertId.textContent = data.id;
      modalCertSkills.textContent = data.skills;
      modalCertSvgBox.innerHTML = data.svg;

      certModalBackdrop.classList.add('open');
      certModalBackdrop.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function closeCertModal() {
      certModalBackdrop.classList.remove('open');
      certModalBackdrop.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    if (certModalCloseBtn) {
      certModalCloseBtn.addEventListener('click', closeCertModal);
    }

    certModalBackdrop.addEventListener('click', (e) => {
      if (e.target === certModalBackdrop) {
        closeCertModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && certModalBackdrop.classList.contains('open')) {
        closeCertModal();
      }
    });

    // 3. Mobile Navigation Drawer
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

    // 4. Theme Toggle with LocalStorage Persistence
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

    // 5. Scroll to top button
    const scrollTopBtn = document.getElementById('scroll-top-btn');
    if (scrollTopBtn) {
      scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
