// 1. Verified certificate dataset
const certificates = [
  {
    id: "ai-agents-llm",
    title: "AI Agents with Large Language Models (LLMs)",
    issuer: "JClick Solutions",
    category: "AI & ML",
    filterCategory: "ai-ml",
    date: "27 Jul 2026 – 31 Jul 2026",
    credentialId: "JCS/VAC/026/41",
    badgeLabel: "AI & LLM",
    badgeColor: "#0CF2FF",
    badgeIcon: "fa-robot",
    image: "https://raw.githubusercontent.com/rajeshrt-r/Portfolio-Website/main/assets/images/certifications/ai-agents-llm-jclick-solutions.jpg",
    description: "Completed 5-Days Value-Added course on \"AI Agents with Large Language Models (LLMs)\" organized by JClick Solutions at DMI Engineering College in association with the Department of Artificial Intelligence and Data Science.",
    technologies: ["AI Agents", "Large Language Models (LLMs)", "Prompt Engineering", "Artificial Intelligence", "Autonomous Agents"],
    verificationUrl: "https://www.jclicksolutions.in",
    rowGroup: 1,
    svg: `<img src="https://raw.githubusercontent.com/rajeshrt-r/Portfolio-Website/main/assets/images/certifications/ai-agents-llm-jclick-solutions.jpg" alt="AI Agents with Large Language Models (LLMs) Certificate - JClick Solutions" style="width: 100%; height: 100%; object-fit: cover;">`
  },
  {
    id: "cybersecurity-ethical-hacking",
    title: "Cybersecurity & Ethical Hacking",
    issuer: "Cappriciosec University",
    category: "Cybersecurity",
    filterCategory: "cybersecurity",
    date: "18 Jan 2026",
    credentialId: "8b319c5aaa096add1365",
    badgeLabel: "Cybersecurity",
    badgeColor: "#10B981",
    badgeIcon: "fa-shield-halved",
    image: "https://raw.githubusercontent.com/rajeshrt-r/Portfolio-Website/main/assets/images/certifications/cyber-security-and-ethical-hacking-certificate.jpg",
    description: "Completed 42 hours of advanced training in Linux, Go, Python, Wi-Fi hacking, Web/API/Mobile pentesting, Active Directory pentesting, and IoT hacking.",
    technologies: ["Cybersecurity", "Ethical Hacking", "Web/API Pentesting", "Active Directory", "Linux & Python", "IoT & Hardware Hacking"],
    verificationUrl: "https://university.cappriciosec.com/verify/8b319c5aaa096add1365",
    rowGroup: 1,
    svg: `<img src="https://raw.githubusercontent.com/rajeshrt-r/Portfolio-Website/main/assets/images/certifications/cyber-security-and-ethical-hacking-certificate.jpg" alt="Cybersecurity & Ethical Hacking Certificate - Cappriciosec University" style="width: 100%; height: 100%; object-fit: cover;">`
  },
  {
    id: "java-fundamentals",
    title: "Java Fundamentals",
    issuer: "Uniq Technologies",
    category: "Programming",
    filterCategory: "programming",
    date: "Jan 2026",
    credentialId: "UQ25-0379",
    badgeLabel: "Programming",
    badgeColor: "#6366F1",
    badgeIcon: "fa-code",
    image: "https://raw.githubusercontent.com/rajeshrt-r/Portfolio-Website/main/assets/images/certifications/java-certificate.jpg",
    description: "Learned core Java concepts including OOP, collections, exception handling and problem solving.",
    technologies: ["Java", "OOP", "Data Structures", "Collections", "Exception Handling"],
    verificationUrl: "https://www.uniqtechnologies.co.in",
    rowGroup: 1,
    svg: `<img src="https://raw.githubusercontent.com/rajeshrt-r/Portfolio-Website/main/assets/images/certifications/java-certificate.jpg" alt="Java Fundamentals Certificate - Uniq Technologies" style="width: 100%; height: 100%; object-fit: cover;">`
  },
  {
    id: "ui-ux-design-internship",
    title: "UI & UX Design Internship",
    issuer: "JCS Infotech",
    category: "Internship",
    filterCategory: "internship",
    date: "03 Jun 2026 – 30 Jun 2026",
    badgeLabel: "Design",
    badgeColor: "#A855F7",
    badgeIcon: "fa-pen-ruler",
    image: "https://raw.githubusercontent.com/rajeshrt-r/Portfolio-Website/main/assets/images/certifications/img-20260808-151740.jpg",
    description: "Completed a UI & UX Design internship at JCS Infotech with an Excellent performance evaluation.",
    technologies: ["UI Design", "UX Design"],
    rowGroup: 3,
    svg: `<img src="https://raw.githubusercontent.com/rajeshrt-r/Portfolio-Website/main/assets/images/certifications/img-20260808-151740.jpg" alt="UI & UX Design Internship Certificate - JCS Infotech" style="width: 100%; height: 100%; object-fit: cover;">`
  },
  {
    id: "ai-ml-internship",
    title: "AI & ML Internship",
    issuer: "MATT Engineering Solutions",
    category: "Internship",
    filterCategory: "internship",
    date: "12 Jan 2026 – 19 Jan 2026",
    badgeLabel: "Internship",
    badgeColor: "#F59E0B",
    badgeIcon: "fa-briefcase",
    image: "https://raw.githubusercontent.com/rajeshrt-r/Portfolio-Website/main/assets/images/certifications/img-20260808-144310.jpg",
    description: "Completed a practical AI & ML internship at MATT Engineering Solutions, Vadasery, covering applied machine learning, data analysis and problem solving during B.Tech II year at DMI Engineering College.",
    technologies: ["Artificial Intelligence", "Machine Learning", "Data Analysis", "Python"],
    rowGroup: 3,
    svg: `<img src="https://raw.githubusercontent.com/rajeshrt-r/Portfolio-Website/main/assets/images/certifications/img-20260808-144310.jpg" alt="AI & ML Internship Certificate - MATT Engineering Solutions" style="width: 100%; height: 100%; object-fit: cover;">`
  },
  {
    id: "diploma-computer-application",
    title: "Diploma in Computer Application",
    issuer: "Metro Soft Computers",
    category: "Computer Applications",
    filterCategory: "applications",
    date: "12 Dec 2020 – 06 Mar 2021",
    credentialId: "Reg. No.: 006312",
    badgeLabel: "Computer Applications",
    badgeColor: "#38BDF8",
    badgeIcon: "fa-laptop-code",
    image: "https://raw.githubusercontent.com/rajeshrt-r/Portfolio-Website/main/assets/images/certifications/img-20260808-144839.jpg",
    description: "Completed Diploma in Computer Application covering MS Office, programming basics, operating systems, and computer applications with Grade 'Excellent'.",
    technologies: ["Computer Applications", "MS Office", "Programming Fundamentals", "Operating Systems", "Grade: Excellent"],
    verificationUrl: "https://metrosoftcomputers.com/verify/006312",
    rowGroup: 3,
    svg: `<img src="https://raw.githubusercontent.com/rajeshrt-r/Portfolio-Website/main/assets/images/certifications/img-20260808-144839.jpg" alt="Diploma in Computer Application Certificate - Metro Soft Computers" style="width: 100%; height: 100%; object-fit: cover;">`
  }
];

// 2. Dynamic Metric Calculation (Directly from dataset)
function updateHeroStats() {
  const total = certificates.length;
  const verified = certificates.filter(c => c.credentialId && c.credentialId.trim() !== "").length;
  const issuers = new Set(certificates.map(c => c.issuer)).size;
  const internships = certificates.filter(c => c.filterCategory === "internship").length;

  document.getElementById('stat-total-certs').textContent = total + "+";
  document.getElementById('stat-verified-certs').textContent = verified + "+";
  document.getElementById('stat-platforms').textContent = issuers + "+";
  document.getElementById('stat-internship').textContent = internships + "+";
}

// 3. Render Certificate Cards Function (Data-Driven with 3 Rows matching reference)
const certsContainer = document.getElementById('certifications-container');
const emptyState = document.getElementById('empty-state');
let currentCategory = 'all';
let currentSearchTerm = '';

function renderCertificates() {
  // Filter by category and search query
  const filtered = certificates.filter(cert => {
    const matchesCategory = (currentCategory === 'all') || (cert.filterCategory === currentCategory);

    const term = currentSearchTerm.toLowerCase().trim();
    const matchesSearch = term === '' ||
      cert.title.toLowerCase().includes(term) ||
      cert.issuer.toLowerCase().includes(term) ||
      cert.category.toLowerCase().includes(term) ||
      cert.description.toLowerCase().includes(term) ||
      cert.technologies.some(tech => tech.toLowerCase().includes(term)) ||
      (cert.credentialId && cert.credentialId.toLowerCase().includes(term));

    return matchesCategory && matchesSearch;
  });

  certsContainer.innerHTML = '';

  if (filtered.length === 0) {
    emptyState.classList.add('visible');
    return;
  } else {
    emptyState.classList.remove('visible');
  }

  // If user is searching or has filtered, show clean adaptive grid
  if (currentCategory !== 'all' || currentSearchTerm.trim() !== '') {
    const grid = document.createElement('div');
    grid.className = 'cert-grid';
    filtered.forEach(cert => {
      grid.appendChild(createCertCardElement(cert));
    });
    certsContainer.appendChild(grid);
    return;
  }
  // Default view: render remaining certificates by row group.
  const row1Certs = filtered.filter(c => c.rowGroup === 1);
  if (row1Certs.length > 0) {
    const row1Grid = document.createElement('div');
    row1Grid.className = 'cert-grid';
    row1Certs.forEach(cert => {
      row1Grid.appendChild(createCertCardElement(cert));
    });
    certsContainer.appendChild(row1Grid);
  }
  const row2Certs = filtered.filter(c => c.rowGroup === 2);
  if (row2Certs.length > 0) {
    const row2Grid = document.createElement('div');
    row2Grid.className = 'cert-grid four-cols';
    row2Certs.forEach(cert => {
      row2Grid.appendChild(createCertCardElement(cert));
    });
    certsContainer.appendChild(row2Grid);
  }

  // Row 3: remaining certificate cards
  const row3Certs = filtered.filter(c => c.rowGroup === 3);
  const row3Grid = document.createElement('div');

  row3Grid.className = 'cert-grid bottom-row';
  row3Certs.forEach(cert => {
    row3Grid.appendChild(createCertCardElement(cert));
  });


  certsContainer.appendChild(row3Grid);
}

function createCertCardElement(cert) {
  const card = document.createElement('div');
  card.className = 'cert-card';
  card.setAttribute('data-id', cert.id);

  card.innerHTML = `
        <div class="cert-card-media">
          ${cert.image ? `<img src="${cert.image}" alt="${cert.title} Certificate" style="width: 100%; height: 100%; object-fit: cover;">` : cert.svg}
        </div>
        <div class="cert-card-body">
          <div class="cert-category-badge" style="border-color: ${cert.badgeColor}44; color: ${cert.badgeColor};">
            <i class="fa-solid ${cert.badgeIcon}"></i> ${cert.badgeLabel}
          </div>
          <h3 class="cert-title">${cert.title}</h3>
          <div class="cert-meta-row">
            <span class="cert-meta-item"><i class="fa-solid fa-building-columns cyan"></i> ${cert.issuer}</span>
            <span class="cert-meta-item"><i class="fa-regular fa-calendar cyan"></i> ${cert.date}</span>
          </div>
          <p class="cert-desc">${cert.description}</p>
          ${cert.credentialId ? `<div class="cert-credential-id">Credential ID: ${cert.credentialId}</div>` : ''}
          <div class="cert-card-actions">
            <button class="cert-btn cert-btn-view" onclick="openCertModal('${cert.id}')">
              <i class="fa-regular fa-eye"></i> View Certificate
            </button>
          </div>
        </div>
      `;
  return card;
}

// 4. Filter Button Event Handlers
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    currentCategory = btn.getAttribute('data-filter');
    renderCertificates();
  });
});

// 5. Search Bar Event Handlers
const searchInput = document.getElementById('cert-search-input');
const searchClearBtn = document.getElementById('search-clear-btn');

searchInput.addEventListener('input', (e) => {
  currentSearchTerm = e.target.value;
  if (currentSearchTerm.length > 0) {
    searchClearBtn.style.display = 'block';
  } else {
    searchClearBtn.style.display = 'none';
  }
  renderCertificates();
});

searchClearBtn.addEventListener('click', () => {
  searchInput.value = '';
  currentSearchTerm = '';
  searchClearBtn.style.display = 'none';
  searchInput.focus();
  renderCertificates();
});

// Clear Filters Reset Button
document.getElementById('clear-filters-btn').addEventListener('click', () => {
  searchInput.value = '';
  currentSearchTerm = '';
  searchClearBtn.style.display = 'none';
  currentCategory = 'all';
  filterButtons.forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-filter') === 'all');
    b.setAttribute('aria-selected', b.getAttribute('data-filter') === 'all');
  });
  renderCertificates();
});

// 6. Modal Lightbox Logic
const certModalBackdrop = document.getElementById('cert-modal-backdrop');
const certModalCloseBtn = document.getElementById('modal-cert-close-btn');
const modalCertTitle = document.getElementById('modal-cert-title');
const modalCertBadge = document.getElementById('modal-cert-badge');
const modalCertIssuer = document.getElementById('modal-cert-issuer');
const modalCertDate = document.getElementById('modal-cert-date');
const modalCertId = document.getElementById('modal-cert-id');
const modalCertDesc = document.getElementById('modal-cert-desc');
const modalCertSvgBox = document.getElementById('modal-cert-svg-box');
const modalCertSkills = document.getElementById('modal-cert-skills');
const modalVerifyLink = document.getElementById('modal-verify-link');

function openCertModal(certId) {
  const cert = certificates.find(c => c.id === certId);
  if (!cert) return;

  modalCertTitle.textContent = cert.title;
  modalCertBadge.innerHTML = `<i class="fa-solid ${cert.badgeIcon}"></i> ${cert.badgeLabel}`;
  modalCertBadge.style.color = cert.badgeColor;
  modalCertBadge.style.borderColor = cert.badgeColor + '55';
  modalCertIssuer.textContent = cert.issuer;
  modalCertDate.textContent = cert.date;
  modalCertId.textContent = cert.credentialId || 'Verified Record';
  modalCertDesc.textContent = cert.description;

  if (cert.image) {
    modalCertSvgBox.innerHTML = `<img src="${cert.image}" alt="${cert.title} Certificate - ${cert.issuer}" style="width: 100%; height: auto; max-height: 520px; object-fit: contain; display: block; border-radius: 8px;">`;
  } else {
    modalCertSvgBox.innerHTML = cert.svg;
  }

  modalCertSkills.innerHTML = cert.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('');
  if (cert.verificationUrl) {
    modalVerifyLink.href = cert.verificationUrl;
    modalVerifyLink.style.display = '';
  } else {
    modalVerifyLink.href = '#';
    modalVerifyLink.style.display = 'none';
  }

  certModalBackdrop.classList.add('open');
  certModalBackdrop.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeCertModal() {
  certModalBackdrop.classList.remove('open');
  certModalBackdrop.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

certModalCloseBtn.addEventListener('click', closeCertModal);

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

// 7. Verify Credential Helper
function verifyCredential(url) {
  if (url && url !== '#') {
    window.open(url, '_blank', 'noopener,noreferrer');
  } else {
    alert("This verified credential is authenticated directly through official institutional records.");
  }
}


// 8. Mobile Navigation Drawer
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

// 9. Theme Toggle with LocalStorage Persistence (Dark / Light)
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

// 10. Scroll to top button
const scrollTopBtn = document.getElementById('scroll-top-btn');
if (scrollTopBtn) {
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Initialize Page
document.addEventListener('DOMContentLoaded', () => {
  updateHeroStats();
  renderCertificates();
});
