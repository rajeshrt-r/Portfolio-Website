// 1. Centralized Project Data Array (Clean, extensible architecture)
    const projectsData = [
      {
        id: "ai-pdf-assistant",
        slug: "ai-pdf-assistant",
        num: "01",
        category: "AI & ML",
        filterCategory: "ai-ml",
        title: "AI PDF Assistant",
        shortDesc: "An AI-powered project in development to help users explore PDF documents and find answers from their contents.",
        overview: "AI PDF Assistant is an in-progress project focused on making information inside PDF documents easier to find and understand.",
        problem: "Finding a specific detail in a long PDF can take time, especially when readers need to search across dense documents.",
        solution: "The project aims to let users ask questions about a PDF and receive answers grounded in its contents.",
        technologies: ["Artificial Intelligence", "PDF Processing"],
        year: "2026",
        status: "In Progress",
        svgIcon: "pdf",
        keyFeatures: [
          "Explore information in PDF documents",
          "Ask questions about document contents",
          "Get relevant answers grounded in the PDF"
        ],
        learnings: "Currently developing the project and exploring document processing and AI-powered question answering."
      },
      {
        id: "article-website-uiux",
        slug: "article-website-uiux",
        num: "02",
        category: "Web Development",
        filterCategory: "web-dev",
        title: "Article Website",
        shortDesc: "A website in development for browsing and reading articles, with a clear layout and a focused reading experience.",
        overview: "Article Website is a separate website project in progress, focused on helping readers browse articles and enjoy a clear, comfortable reading experience.",
        problem: "Readers need a straightforward way to find articles and read them without unnecessary distractions.",
        solution: "The planned website will organize articles for easy browsing and provide a focused layout for reading.",
        technologies: ["Web Development", "Responsive Design"],
        year: "2026",
        status: "In Progress",
        svgIcon: "article",
        keyFeatures: [
          "Browse and discover articles",
          "Read articles in a focused layout",
          "Responsive website experience"
        ],
        learnings: "Currently developing the website and exploring clear content organization and responsive reading experiences."
      }
    ];

    // 2. High-Tech SVG Thumbnail Generators for Each Project Card
    function getCardSvgThumbnail(type) {
      switch (type) {
        case "pdf":
          return `<svg viewBox="0 0 380 190" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="380" height="190" fill="#071326"/>
            <rect x="132" y="24" width="116" height="142" rx="12" fill="#0d223d" stroke="#0CF2FF" stroke-opacity=".45"/>
            <path d="M204 24v34h44" fill="#163756" stroke="#0CF2FF" stroke-opacity=".45"/>
            <text x="190" y="98" fill="#0CF2FF" font-family="Arial,sans-serif" font-size="26" font-weight="700" text-anchor="middle">AI PDF</text>
            <path d="M157 116h70M157 128h54M157 140h62" stroke="#94A3B8" stroke-width="4" stroke-linecap="round"/>
          </svg>`;
        case "article":
          return `<svg viewBox="0 0 380 190" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="380" height="190" fill="#071326"/>
            <rect x="132" y="24" width="116" height="142" rx="12" fill="#0d223d" stroke="#0CF2FF" stroke-opacity=".45"/>
            <path d="M204 24v34h44" fill="#163756" stroke="#0CF2FF" stroke-opacity=".45"/>
            <text x="190" y="96" fill="#0CF2FF" font-family="Arial,sans-serif" font-size="19" font-weight="700" text-anchor="middle">ARTICLE</text>
            <path d="M157 116h70M157 128h54M157 140h62" stroke="#94A3B8" stroke-width="4" stroke-linecap="round"/>
          </svg>`;
        case "health":
          return `<svg viewBox="0 0 380 190" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="380" height="190" fill="#020d1a"/>
            <circle cx="190" cy="95" r="75" stroke="#0CF2FF" stroke-width="1" stroke-dasharray="4 4" opacity="0.3"/>
            <circle cx="190" cy="95" r="50" stroke="#0CF2FF" stroke-width="1.5" opacity="0.5"/>
            <!-- Heart Pulse line -->
            <path d="M40 95 L120 95 L135 60 L150 130 L165 75 L180 115 L195 95 L340 95" stroke="#0CF2FF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <!-- Hologram nodes -->
            <circle cx="135" cy="60" r="4" fill="#0CF2FF"/>
            <circle cx="150" cy="130" r="4" fill="#0CF2FF"/>
            <circle cx="165" cy="75" r="4" fill="#0CF2FF"/>
            <!-- Brain / AI Hologram outline -->
            <circle cx="190" cy="95" r="18" fill="rgba(12, 242, 255, 0.2)" stroke="#0CF2FF" stroke-width="2"/>
            <text x="190" y="100" fill="#0CF2FF" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700" text-anchor="middle">AI</text>
            <text x="330" y="35" fill="#94A3B8" font-family="'JetBrains Mono', monospace" font-size="10" text-anchor="end">98% SpO2 &bull; 72 BPM</text>
          </svg>`;

        case "data":
          return `<svg viewBox="0 0 380 190" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="380" height="190" fill="#020e1f"/>
            <!-- Grid Lines -->
            <line x1="40" y1="40" x2="340" y2="40" stroke="#162e4a" stroke-width="1"/>
            <line x1="40" y1="80" x2="340" y2="80" stroke="#162e4a" stroke-width="1"/>
            <line x1="40" y1="120" x2="340" y2="120" stroke="#162e4a" stroke-width="1"/>
            <line x1="40" y1="160" x2="340" y2="160" stroke="#162e4a" stroke-width="1"/>
            <!-- Bar Chart Items -->
            <rect x="70" y="90" width="22" height="70" rx="3" fill="rgba(12, 242, 255, 0.4)"/>
            <rect x="115" y="60" width="22" height="100" rx="3" fill="#0CF2FF"/>
            <rect x="160" y="110" width="22" height="50" rx="3" fill="rgba(12, 242, 255, 0.4)"/>
            <rect x="205" y="75" width="22" height="85" rx="3" fill="#0284c7"/>
            <rect x="250" y="50" width="22" height="110" rx="3" fill="#0CF2FF"/>
            <rect x="295" y="95" width="22" height="65" rx="3" fill="rgba(12, 242, 255, 0.4)"/>
            <!-- Correlation Trend Curve -->
            <path d="M70 120 Q140 40, 210 85 T310 45" stroke="#facc15" stroke-width="2.5" fill="none"/>
            <text x="330" y="30" fill="#94A3B8" font-family="'JetBrains Mono', monospace" font-size="10" text-anchor="end">R&#178; = 0.942</text>
          </svg>`;

        case "finance":
          return `<svg viewBox="0 0 380 190" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="380" height="190" fill="#030f24"/>
            <!-- Donut Chart -->
            <circle cx="120" cy="95" r="50" stroke="#143254" stroke-width="18"/>
            <circle cx="120" cy="95" r="50" stroke="#0CF2FF" stroke-width="18" stroke-dasharray="160 300" stroke-linecap="round"/>
            <circle cx="120" cy="95" r="50" stroke="#c084fc" stroke-width="18" stroke-dasharray="70 300" stroke-dashoffset="-170" stroke-linecap="round"/>
            <text x="120" y="100" fill="#ffffff" font-family="'Inter', sans-serif" font-size="13" font-weight="800" text-anchor="middle">$4,850</text>
            <!-- Stats Bars Right -->
            <rect x="210" y="60" width="130" height="10" rx="5" fill="#143254"/>
            <rect x="210" y="60" width="95" height="10" rx="5" fill="#0CF2FF"/>
            <rect x="210" y="85" width="130" height="10" rx="5" fill="#143254"/>
            <rect x="210" y="85" width="60" height="10" rx="5" fill="#c084fc"/>
            <rect x="210" y="110" width="130" height="10" rx="5" fill="#143254"/>
            <rect x="210" y="110" width="115" height="10" rx="5" fill="#38bdf8"/>
            <text x="210" y="145" fill="#94A3B8" font-family="'JetBrains Mono', monospace" font-size="10">Monthly Budget: 82%</text>
          </svg>`;

        case "eco":
          return `<svg viewBox="0 0 380 190" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="380" height="190" fill="#02141a"/>
            <!-- Glowing Earth Circle -->
            <circle cx="190" cy="95" r="60" fill="url(#earthGrad)" stroke="#10b981" stroke-width="2"/>
            <!-- Continents & Eco Leaves -->
            <path d="M160 80 Q175 60, 200 70 Q225 80, 215 110 Q190 125, 170 110 Z" fill="#10b981" opacity="0.6"/>
            <path d="M190 40 Q210 20, 230 45 Q210 50, 190 40 Z" fill="#34d399"/>
            <path d="M150 140 Q130 160, 150 170 Q165 150, 150 140 Z" fill="#34d399"/>
            <!-- Atmospheric Rings -->
            <circle cx="190" cy="95" r="75" stroke="#0CF2FF" stroke-width="1" stroke-dasharray="8 6" opacity="0.4"/>
            <circle cx="190" cy="95" r="88" stroke="#10b981" stroke-width="0.8" opacity="0.25"/>
            <text x="330" y="30" fill="#34d399" font-family="'JetBrains Mono', monospace" font-size="10" text-anchor="end">-38% CO2e Target</text>
            <defs>
              <radialGradient id="earthGrad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(190 95) scale(60)">
                <stop stop-color="#0284c7"/>
                <stop offset="1" stop-color="#052e16"/>
              </radialGradient>
            </defs>
          </svg>`;

        default:
          return `<svg viewBox="0 0 380 190" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="380" height="190" fill="#031122"/>
            <circle cx="190" cy="95" r="40" stroke="#0CF2FF" stroke-width="2"/>
          </svg>`;
      }
    }

    // 3. Render Project Cards Engine
    const gridContainer = document.getElementById('projects-grid');
    const searchInput = document.getElementById('project-search-input');
    const searchClearBtn = document.getElementById('search-clear-btn');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const resultsCountText = document.getElementById('results-count-text');
    const activeFilterBadge = document.getElementById('active-filter-badge');

    document.getElementById('stat-project-count').textContent = projectsData.length;
    document.getElementById('stat-tech-count').textContent =
      new Set(projectsData.flatMap(project => project.technologies)).size;

    if (projectsData.length === 0) {
      document.getElementById('controls').hidden = true;
    }

    let currentFilter = 'all';
    let currentSearchTerm = '';

    function renderProjects() {
      // Filter logic
      const filtered = projectsData.filter(project => {
        // 1. Category check
        const matchCategory = (currentFilter === 'all') ||
          (currentFilter === 'ai-ml' && (project.filterCategory === 'ai-ml' || project.category.includes('AI') || project.category.includes('ML'))) ||
          (currentFilter === 'data-science' && (project.filterCategory === 'data-science' || project.category.includes('Data'))) ||
          (currentFilter === 'web-dev' && (project.filterCategory === 'web-dev' || project.category.includes('Web') || project.category.includes('Finance') || project.category.includes('Stack'))) ||
          (currentFilter === 'database' && (project.technologies.some(t => t.toLowerCase().includes('mongo') || t.toLowerCase().includes('data')))) ||
          (currentFilter === 'tools' && (project.technologies.some(t => t.toLowerCase().includes('git') || t.toLowerCase().includes('vercel') || t.toLowerCase().includes('streamlit'))));

        // 2. Search check (searches title, description, category, and technologies)
        const term = currentSearchTerm.toLowerCase().trim();
        const matchSearch = !term ||
          project.title.toLowerCase().includes(term) ||
          project.shortDesc.toLowerCase().includes(term) ||
          project.category.toLowerCase().includes(term) ||
          project.technologies.some(t => t.toLowerCase().includes(term));

        return matchCategory && matchSearch;
      });

      // Update count & feedback
      resultsCountText.textContent = `Showing ${filtered.length} of ${projectsData.length} ${projectsData.length === 1 ? 'project' : 'projects'}`;

      // Render cards
      if (filtered.length === 0) {
        if (projectsData.length === 0) {
          gridContainer.innerHTML = `
            <div class="empty-state-card">
              <i class="fa-solid fa-folder-open empty-icon"></i>
              <h3 class="empty-title">Projects coming soon</h3>
              <p class="empty-desc">I'm working on new projects. Please check back soon.</p>
            </div>
          `;
          return;
        }

        gridContainer.innerHTML = `
          <div class="empty-state-card">
            <i class="fa-solid fa-folder-open empty-icon"></i>
            <h3 class="empty-title">No projects found</h3>
            <p class="empty-desc">No project matches your search "${currentSearchTerm}" under the current category. Try resetting your search or picking another filter.</p>
            <button class="btn-clear-filters" id="btn-reset-filters">
              <i class="fa-solid fa-rotate-left"></i> Clear Filters
            </button>
          </div>
        `;

        document.getElementById('btn-reset-filters').addEventListener('click', () => {
          currentFilter = 'all';
          currentSearchTerm = '';
          searchInput.value = '';
          searchClearBtn.classList.remove('visible');
          filterButtons.forEach(btn => btn.classList.remove('active'));
          document.querySelector('[data-filter="all"]').classList.add('active');
          activeFilterBadge.textContent = 'Category: All';
          renderProjects();
        });
        return;
      }

      gridContainer.innerHTML = filtered.map(p => `
        <article class="project-card" data-id="${p.id}">
          ${p.svgIcon ? `
            <div class="project-card-thumb" aria-hidden="true">
              ${getCardSvgThumbnail(p.svgIcon)}
            </div>
          ` : ''}

          <div class="project-card-body">
            <!-- Number & Category -->
            <div class="card-meta-row">
              <span class="card-number-badge">${p.num}</span>
              <span class="card-category-label">${p.category}</span>
              <span class="card-status-label">${p.status}</span>
            </div>

            <h3 class="project-card-title">${p.title}</h3>
            <p class="project-card-desc">${p.shortDesc}</p>

            <!-- Tech Tags -->
            <div class="card-tech-tags">
              ${p.technologies.map(tag => `<span class="card-tech-tag">${tag}</span>`).join('')}
            </div>

            <!-- Action Links Footer -->
            <div class="card-actions-footer">
              <div class="card-left-links">
                ${p.githubUrl ? `
                  <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="card-action-link" title="View Source on GitHub">
                    <i class="fa-brands fa-github"></i> GitHub
                  </a>
                ` : ''}
                ${p.liveUrl ? `
                  <a href="${p.liveUrl}" target="${p.external ? '_blank' : '_self'}" rel="noopener noreferrer" class="card-action-link" title="${p.liveLabel || 'Open Live Demo'}">
                    <i class="fa-solid fa-arrow-up-right-from-square"></i> ${p.liveLabel || 'Live Demo'}
                  </a>
                ` : `
                  <span class="card-action-link" onclick="openProjectModal('${p.id}')" title="Read Case Study Details">
                    <i class="fa-regular fa-file-lines"></i> Case Study
                  </span>
                `}
              </div>

              <button type="button" class="card-view-details-btn" onclick="openProjectModal('${p.id}')">
                <span>View Details</span>
                <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </article>
      `).join('');
    }

    // 4. Filter Button Event Listeners
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.getAttribute('data-filter');
        activeFilterBadge.textContent = `Category: ${btn.textContent.trim()}`;
        renderProjects();
      });
    });

    // 5. Search Input Listeners
    searchInput.addEventListener('input', () => {
      currentSearchTerm = searchInput.value;
      if (currentSearchTerm.length > 0) {
        searchClearBtn.classList.add('visible');
      } else {
        searchClearBtn.classList.remove('visible');
      }
      renderProjects();
    });

    searchClearBtn.addEventListener('click', () => {
      searchInput.value = '';
      currentSearchTerm = '';
      searchClearBtn.classList.remove('visible');
      searchInput.focus();
      renderProjects();
    });

    // 6. Project Modal Logic
    const modalBackdrop = document.getElementById('project-modal-backdrop');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalCategory = document.getElementById('modal-category');
    const modalYear = document.getElementById('modal-year');
    const modalStatus = document.getElementById('modal-status');
    const modalTitle = document.getElementById('modal-title');
    const modalOverview = document.getElementById('modal-overview');
    const modalProblem = document.getElementById('modal-problem');
    const modalSolution = document.getElementById('modal-solution');
    const modalFeatures = document.getElementById('modal-features');
    const modalTechPills = document.getElementById('modal-tech-pills');
    const modalLearnings = document.getElementById('modal-learnings');
    const modalGithubBtn = document.getElementById('modal-github-btn');
    const modalLiveBtn = document.getElementById('modal-live-btn');

    function openProjectModal(projectId) {
      const p = projectsData.find(item => item.id === projectId);
      if (!p) return;

      modalCategory.textContent = p.category;
      modalYear.textContent = p.year;
      modalStatus.textContent = p.status || 'Active';
      modalTitle.textContent = p.title;
      modalOverview.textContent = p.overview;
      modalProblem.textContent = p.problem;
      modalSolution.textContent = p.solution;
      modalLearnings.textContent = p.learnings;

      modalFeatures.innerHTML = p.keyFeatures.map(f => `
        <div class="modal-feature-item">
          <i class="fa-solid fa-circle-check"></i>
          <span>${f}</span>
        </div>
      `).join('');

      modalTechPills.innerHTML = p.technologies.map(t => `
        <span class="modal-tech-pill">${t}</span>
      `).join('');

      if (p.githubUrl) {
        modalGithubBtn.href = p.githubUrl;
        modalGithubBtn.style.display = 'inline-flex';
      } else {
        modalGithubBtn.style.display = 'none';
      }

      if (p.liveUrl) {
        modalLiveBtn.href = p.liveUrl;
        modalLiveBtn.target = p.external ? '_blank' : '_self';
        modalLiveBtn.innerHTML = `<i class="fa-solid fa-arrow-up-right-from-square"></i> ${p.liveLabel || 'Live Demo'}`;
        modalLiveBtn.style.display = 'inline-flex';
      } else {
        modalLiveBtn.style.display = 'none';
      }

      modalBackdrop.classList.add('open');
      modalBackdrop.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      window.location.hash = p.slug;
    }

    function closeProjectModal() {
      modalBackdrop.classList.remove('open');
      modalBackdrop.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      if (window.location.hash) {
        history.replaceState(null, null, 'projects.html');
      }
    }

    if (modalCloseBtn) {
      modalCloseBtn.addEventListener('click', closeProjectModal);
    }

    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeProjectModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalBackdrop.classList.contains('open')) {
        closeProjectModal();
      }
    });

    // Check if direct hash link in URL
    window.addEventListener('load', () => {
      renderProjects();
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        const found = projectsData.find(p => p.slug === hash);
        if (found) {
          openProjectModal(found.id);
        }
      }
    });

    // 7. Global Navbar Mobile Drawer
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

    // 8. Theme Toggle with LocalStorage Persistence
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

    // 9. Scroll to top button
    const scrollTopBtn = document.getElementById('scroll-top-btn');
    if (scrollTopBtn) {
      scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
