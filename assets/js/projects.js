/**
 * ==========================================================================
   Projects Page Specific JavaScript
   ==========================================================================
*/

const ProjectsPage = (() => {
  const filterBtns = $$('.filter-btn');
  const projectCards = $$('.project-card');
  const searchInput = $('.search-input');
  const searchClearBtn = $('.search-clear-btn');
  const resultsInfoBar = $('.results-info-bar');

  let currentFilter = 'all';
  let searchQuery = '';

  const filterProjects = () => {
    let visibleCount = 0;

    projectCards.forEach(card => {
      const category = card.dataset.category || 'all';
      const title = card.querySelector('.project-title')?.textContent.toLowerCase() || '';
      const desc = card.querySelector('.project-desc')?.textContent.toLowerCase() || '';

      const matchesFilter = currentFilter === 'all' || category === currentFilter;
      const matchesSearch = searchQuery === '' ||
                          title.includes(searchQuery) ||
                          desc.includes(searchQuery);

      if (matchesFilter && matchesSearch) {
        card.style.display = 'flex';
        card.style.animation = 'fadeInUp 0.4s ease forwards';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (resultsInfoBar) {
      resultsInfoBar.textContent = `Showing ${visibleCount} project${visibleCount !== 1 ? 's' : ''}`;
    }
  };

  const handleFilterClick = (e) => {
    const btn = e.currentTarget;
    currentFilter = btn.dataset.filter;

    filterBtns.forEach(b => {
      b.classList.remove('active');
    });
    btn.classList.add('active');

    filterProjects();
  };

  const handleSearchInput = (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    searchClearBtn?.classList.toggle('visible', searchQuery.length > 0);
    filterProjects();
  };

  const handleSearchClear = () => {
    searchInput.value = '';
    searchQuery = '';
    searchClearBtn?.classList.remove('visible');
    filterProjects();
  };

  const init = () => {
    if (!filterBtns.length || !projectCards.length) return;

    filterBtns.forEach(btn => {
      btn.addEventListener('click', handleFilterClick);
    });

    searchInput?.addEventListener('input', handleSearchInput);
    searchClearBtn?.addEventListener('click', handleSearchClear);

    // Initial filter
    filterProjects();
  };

  return { init };
})();

// Initialize only on projects page
if (document.querySelector('.projects-hero') || document.querySelector('.filter-btn')) {
  document.addEventListener('DOMContentLoaded', ProjectsPage.init);
}