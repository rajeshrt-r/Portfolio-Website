/**
 * ==========================================================================
   Main JavaScript Module - Shared Functionality
   ==========================================================================
*/

// ==========================================================================
// Utility Functions
// ==========================================================================
const $ = (selector, context = document) => context.querySelector(selector);
const $$ = (selector, context = document) => [...context.querySelectorAll(selector)];

const debounce = (fn, delay = 250) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
};

const throttle = (fn, limit = 100) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// ==========================================================================
// Theme Management
// ==========================================================================
const ThemeManager = (() => {
  const STORAGE_KEY = 'portfolio-theme';
  const toggleBtn = document.getElementById('themeToggle');

  const applyTheme = (theme) => {
    if (theme === 'light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
    localStorage.setItem(STORAGE_KEY, theme);
  };

  const init = () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = saved || (prefersDark ? 'dark' : 'light');
    applyTheme(theme);

    toggleBtn?.addEventListener('click', () => {
      const isLight = document.body.classList.contains('light-theme');
      applyTheme(isLight ? 'dark' : 'light');
    });

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem(STORAGE_KEY)) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  };

  return { init };
})();

// ==========================================================================
// Navigation
// ==========================================================================
const Navigation = (() => {
  const header = $('#header');
  const hamburger = $('#hamburger');
  const navList = $('#navList');
  const navLinks = $$('.nav__link');
  const mobileNavPanel = $('.mobile-nav-panel');
  const menuToggle = $('.menu-toggle');

  const toggleMenu = () => {
    const isOpen = hamburger?.getAttribute('aria-expanded') === 'true' || mobileNavPanel?.classList.contains('open');

    if (hamburger) {
      hamburger.setAttribute('aria-expanded', !isOpen);
    }

    if (navList) {
      navList.classList.toggle('is-open');
    }

    if (mobileNavPanel) {
      mobileNavPanel.classList.toggle('open');
    }

    document.body.style.overflow = isOpen ? '' : 'hidden';
  };

  const closeMenu = () => {
    if (hamburger) {
      hamburger.setAttribute('aria-expanded', 'false');
    }

    if (navList) {
      navList.classList.remove('is-open');
    }

    if (mobileNavPanel) {
      mobileNavPanel.classList.remove('open');
    }

    document.body.style.overflow = '';
  };

  const handleScroll = throttle(() => {
    const scrolled = window.scrollY > 50;
    header?.classList.toggle('scrolled', scrolled);
  });

  const handleActiveLink = throttle(() => {
    const sections = $$('section[id]');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  });

  const smoothScroll = (target) => {
    const element = $(target);
    if (element) {
      const offset = header?.offsetHeight || 72;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const init = () => {
    hamburger?.addEventListener('click', toggleMenu);
    menuToggle?.addEventListener('click', toggleMenu);

    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          smoothScroll(href);
          closeMenu();
        }
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (navList?.classList.contains('is-open') || mobileNavPanel?.classList.contains('open')) {
          closeMenu();
          hamburger?.focus();
          menuToggle?.focus();
        }
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        if (navList?.classList.contains('is-open') || mobileNavPanel?.classList.contains('open')) {
          closeMenu();
        }
      }
    });

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleActiveLink);
  };

  return { init };
})();

// ==========================================================================
// Scroll Reveal Animations
// ==========================================================================
const ScrollReveal = (() => {
  const elements = $$('[data-reveal]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.revealDelay || 0;
        setTimeout(() => {
          entry.target.classList.add('is-visible');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  const init = () => {
    elements.forEach(el => observer.observe(el));
  };

  return { init };
})();

// ==========================================================================
// Counter Animation
// ==========================================================================
const CounterAnimation = (() => {
  const counters = $$('[data-count]');
  let hasAnimated = false;

  const animateCounter = (el) => {
    const target = parseInt(el.dataset.count, 10);
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        el.textContent = target.toLocaleString();
        clearInterval(timer);
      } else {
        el.textContent = Math.floor(current).toLocaleString();
      }
    }, 16);
  };

  const checkVisibility = () => {
    if (hasAnimated) return;
    const heroStats = $('.hero__stats');
    if (!heroStats) return;

    const rect = heroStats.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      hasAnimated = true;
      counters.forEach(el => animateCounter(el));
    }
  };

  const init = () => {
    window.addEventListener('scroll', throttle(checkVisibility, 200));
    checkVisibility();
  };

  return { init };
})();

// ==========================================================================
// Scroll to Top Button
// ==========================================================================
const ScrollToTop = (() => {
  const btn = $('.btn-scroll-top');

  const handleScroll = throttle(() => {
    if (window.scrollY > 500) {
      btn?.classList.add('visible');
    } else {
      btn?.classList.remove('visible');
    }
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const init = () => {
    btn?.addEventListener('click', scrollToTop);
    window.addEventListener('scroll', handleScroll);
  };

  return { init };
})();

// ==========================================================================
// Initialize All Modules
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  ThemeManager.init();
  Navigation.init();
  ScrollReveal.init();
  CounterAnimation.init();
  ScrollToTop.init();
});