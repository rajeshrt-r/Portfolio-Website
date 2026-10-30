/**
 * ==========================================================================
   Certifications Page Specific JavaScript
   ==========================================================================
*/

const CertificationsPage = (() => {
  const filterBtns = $$('.filter-btn');
  const certCards = $$('.cert-card');
  const searchInput = $('.search-input');
  const searchClearBtn = $('.search-clear-btn');
  const modal = $('.cert-modal');
  const modalContent = $('.cert-modal-content');
  const modalClose = $('.cert-modal-close');
  const modalBody = $('.cert-modal-body');
  const modalTitle = $('.cert-modal-title');

  let currentFilter = 'all';
  let searchQuery = '';

  const filterCertificates = () => {
    let visibleCount = 0;

    certCards.forEach(card => {
      const category = card.dataset.category || 'all';
      const title = card.querySelector('.cert-title')?.textContent.toLowerCase() || '';
      const issuer = card.querySelector('.cert-issuer')?.textContent.toLowerCase() || '';

      const matchesFilter = currentFilter === 'all' || category === currentFilter;
      const matchesSearch = searchQuery === '' ||
                          title.includes(searchQuery) ||
                          issuer.includes(searchQuery);

      if (matchesFilter && matchesSearch) {
        card.style.display = 'flex';
        card.style.animation = 'fadeInUp 0.4s ease forwards';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });
  };

  const handleFilterClick = (e) => {
    const btn = e.currentTarget;
    currentFilter = btn.dataset.filter;

    filterBtns.forEach(b => {
      b.classList.remove('active');
    });
    btn.classList.add('active');

    filterCertificates();
  };

  const handleSearchInput = (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    searchClearBtn?.classList.toggle('visible', searchQuery.length > 0);
    filterCertificates();
  };

  const handleSearchClear = () => {
    searchInput.value = '';
    searchQuery = '';
    searchClearBtn?.classList.remove('visible');
    filterCertificates();
  };

  const openModal = (title, imageSrc) => {
    if (!modal || !modalBody) return;

    if (modalTitle) {
      modalTitle.textContent = title;
    }

    if (modalBody) {
      modalBody.innerHTML = `<img src="${imageSrc}" alt="${title}" class="cert-modal-image">`;
    }

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    if (!modal) return;

    modal.classList.remove('open');
    document.body.style.overflow = '';
  };

  const handleModalClick = (e) => {
    if (e.target === modal) {
      closeModal();
    }
  };

  const handleEscapeKey = (e) => {
    if (e.key === 'Escape' && modal?.classList.contains('open')) {
      closeModal();
    }
  };

  const init = () => {
    if (!filterBtns.length || !certCards.length) return;

    filterBtns.forEach(btn => {
      btn.addEventListener('click', handleFilterClick);
    });

    searchInput?.addEventListener('input', handleSearchInput);
    searchClearBtn?.addEventListener('click', handleSearchClear);

    // Modal functionality
    modalClose?.addEventListener('click', closeModal);
    modal?.addEventListener('click', handleModalClick);
    document.addEventListener('keydown', handleEscapeKey);

    // Certificate card click handlers
    certCards.forEach(card => {
      const link = card.querySelector('.cert-link');
      if (link) {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const title = card.querySelector('.cert-title')?.textContent;
          const imageSrc = card.querySelector('.cert-thumb')?.src;
          openModal(title, imageSrc);
        });
      }
    });

    // Initial filter
    filterCertificates();
  };

  return { init };
})();

// Initialize only on certifications page
if (document.querySelector('.hero-section') && document.querySelector('.filter-btn')) {
  document.addEventListener('DOMContentLoaded', CertificationsPage.init);
}