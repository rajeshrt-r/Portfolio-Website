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

    const portrait = document.querySelector('.hero-portrait');
    const portraitImage = portrait?.querySelector('.hero-image');
    const heroCenter = portrait?.closest('.hero-center');
    const heroScene = portrait?.closest('.hero-scene');
    const liquidGlass = heroScene?.querySelector('.liquid-glass');
    const portraitHero = portrait?.closest('.hero');
    const heroNetwork = portraitHero?.querySelector('.hero-network');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const supportsTilt = window.matchMedia('(min-width: 769px) and (hover: hover) and (pointer: fine)');
    let tiltFrame = null;
    let pointerPosition = null;

    const revealPortrait = () => {
      requestAnimationFrame(() => {
        portrait?.classList.add('is-revealing');
        heroScene?.classList.add('is-arriving');
      });
    };

    if (portrait && portraitImage) {
      if (portraitImage.complete && portraitImage.naturalWidth > 0) {
        revealPortrait();
      } else {
        portraitImage.addEventListener('load', revealPortrait, { once: true });
      }

      const resetTilt = () => {
        portrait.style.removeProperty('--portrait-tilt-x');
        portrait.style.removeProperty('--portrait-tilt-y');
        heroScene?.style.removeProperty('--hero-camera-tilt-x');
        heroScene?.style.removeProperty('--hero-camera-tilt-y');
        heroNetwork?.style.removeProperty('--hero-network-camera-x');
        heroNetwork?.style.removeProperty('--hero-network-camera-y');
        liquidGlass?.style.removeProperty('--glass-light-x');
        liquidGlass?.style.removeProperty('--glass-light-y');
        liquidGlass?.style.removeProperty('--glass-tilt-x');
        liquidGlass?.style.removeProperty('--glass-tilt-y');
      };

      const applyTilt = () => {
        tiltFrame = null;
        if (!pointerPosition) return;

        const bounds = portrait.getBoundingClientRect();
        const horizontal = (pointerPosition.x - bounds.left) / bounds.width - 0.5;
        const vertical = (pointerPosition.y - bounds.top) / bounds.height - 0.5;
        portrait.style.setProperty('--portrait-tilt-x', `${-vertical * 5}deg`);
        portrait.style.setProperty('--portrait-tilt-y', `${horizontal * 6}deg`);
        heroScene?.style.setProperty('--hero-camera-tilt-x', `${-vertical * 2}deg`);
        heroScene?.style.setProperty('--hero-camera-tilt-y', `${horizontal * 2}deg`);
        heroNetwork?.style.setProperty('--hero-network-camera-x', `${-horizontal * 8}px`);
        heroNetwork?.style.setProperty('--hero-network-camera-y', `${-vertical * 5}px`);
        liquidGlass?.style.setProperty('--glass-light-x', `${50 + horizontal * 42}%`);
        liquidGlass?.style.setProperty('--glass-light-y', `${50 + vertical * 42}%`);
        liquidGlass?.style.setProperty('--glass-tilt-x', `${-vertical * 3}deg`);
        liquidGlass?.style.setProperty('--glass-tilt-y', `${horizontal * 4}deg`);
      };

      const handlePointerMove = (event) => {
        pointerPosition = { x: event.clientX, y: event.clientY };
        if (tiltFrame === null) {
          tiltFrame = requestAnimationFrame(applyTilt);
        }
      };

      const disableTilt = () => {
        portrait.removeEventListener('pointermove', handlePointerMove);
        portrait.removeEventListener('pointerleave', resetTilt);
        if (tiltFrame !== null) {
          cancelAnimationFrame(tiltFrame);
          tiltFrame = null;
        }
        pointerPosition = null;
        resetTilt();
      };

      const updateTilt = () => {
        disableTilt();
        if (!reducedMotion.matches && supportsTilt.matches) {
          portrait.addEventListener('pointermove', handlePointerMove);
          portrait.addEventListener('pointerleave', resetTilt);
        }
      };

      reducedMotion.addEventListener('change', updateTilt);
      supportsTilt.addEventListener('change', updateTilt);
      updateTilt();
    }

    const heroTagline = portraitHero?.querySelector('.hero-right');
    let parallaxFrame = null;

    const clearHeroParallax = () => {
      portrait?.style.removeProperty('--portrait-scroll-y');
      portrait?.style.removeProperty('--portrait-scroll-scale');
      heroCenter?.style.removeProperty('--hero-aura-scale');
      heroCenter?.style.removeProperty('--hero-aura-brightness');
      heroCenter?.style.removeProperty('--hero-orbit-scale');
      heroCenter?.style.removeProperty('--hero-orbit-opacity');
      heroNetwork?.style.removeProperty('--hero-network-parallax');
      heroTagline?.style.removeProperty('--hero-tagline-y');
      heroTagline?.style.removeProperty('--hero-tagline-opacity');
    };

    const updateHeroParallax = () => {
      parallaxFrame = null;

      if (!portraitHero || reducedMotion.matches) {
        clearHeroParallax();
        return;
      }

      const bounds = portraitHero.getBoundingClientRect();
      const linearProgress = Math.min(1, Math.max(0, -bounds.top / Math.max(bounds.height * 0.8, 1)));
      const progress = linearProgress * linearProgress * (3 - 2 * linearProgress);

      portrait?.style.setProperty('--portrait-scroll-y', `${-48 * progress}px`);
      portrait?.style.setProperty('--portrait-scroll-scale', `${1 - 0.07 * progress}`);
      heroCenter?.style.setProperty('--hero-aura-scale', `${1 - 0.2 * progress}`);
      heroCenter?.style.setProperty('--hero-aura-brightness', `${1 - 0.3 * progress}`);
      heroCenter?.style.setProperty('--hero-orbit-scale', `${1 - 0.12 * progress}`);
      heroCenter?.style.setProperty('--hero-orbit-opacity', `${1 - 0.72 * progress}`);
      heroNetwork?.style.setProperty('--hero-network-parallax', `${-34 * progress}px`);
      heroTagline?.style.setProperty('--hero-tagline-y', `${-24 * progress}px`);
      heroTagline?.style.setProperty('--hero-tagline-opacity', `${1 - progress}`);
    };

    const scheduleHeroParallax = () => {
      if (parallaxFrame === null) {
        parallaxFrame = requestAnimationFrame(updateHeroParallax);
      }
    };

    if (portraitHero) {
      window.addEventListener('scroll', scheduleHeroParallax, { passive: true });
      window.addEventListener('resize', scheduleHeroParallax, { passive: true });
      reducedMotion.addEventListener('change', scheduleHeroParallax);
      scheduleHeroParallax();

      window.addEventListener('pagehide', () => {
        if (parallaxFrame !== null) {
          cancelAnimationFrame(parallaxFrame);
        }
        window.removeEventListener('scroll', scheduleHeroParallax);
        window.removeEventListener('resize', scheduleHeroParallax);
        reducedMotion.removeEventListener('change', scheduleHeroParallax);
      }, { once: true });
    }

    // Decorative neural network, kept independent from the interactive hero content.
    const hero = document.querySelector('.hero');
    const networkCanvas = hero ? hero.querySelector('.hero-network') : null;
    const networkContext = networkCanvas ? networkCanvas.getContext('2d') : null;

    if (hero && networkCanvas && networkContext) {
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
      let nodes = [];
      let width = 0;
      let height = 0;
      let frameId = null;
      let lastFrameTime = null;
      let isVisible = true;

      const getSafeArea = () => {
        const heroBounds = hero.getBoundingClientRect();
        const leftBounds = hero.querySelector('.hero-left').getBoundingClientRect();
        const isMobile = window.matchMedia('(max-width: 768px)').matches;

        if (isMobile) {
          return {
            left: 12,
            right: Math.max(13, width - 12),
            top: Math.min(height - 1, leftBounds.bottom - heroBounds.top + 16),
            bottom: Math.max(1, height - 12)
          };
        }

        return {
          left: Math.min(width - 1, leftBounds.right - heroBounds.left + 24),
          right: Math.max(1, width - 12),
          top: 12,
          bottom: Math.max(1, height - 12)
        };
      };

      const createNodes = () => {
        const count = width <= 480 ? 14 : width <= 768 ? 22 : 34;
        const area = getSafeArea();
        nodes = Array.from({ length: count }, () => ({
          x: area.left + Math.random() * Math.max(1, area.right - area.left),
          y: area.top + Math.random() * Math.max(1, area.bottom - area.top),
          vx: (Math.random() - 0.5) * 10,
          vy: (Math.random() - 0.5) * 10,
          radius: 1.1 + Math.random() * 1.1,
          phase: Math.random() * Math.PI * 2
        }));
      };

      const drawNetwork = (time, animate) => {
        const area = getSafeArea();
        const seconds = time / 1000;
        const isLightTheme = document.body.classList.contains('light-theme');
        const connectionRange = width <= 480 ? 105 : 145;
        const delta = animate && lastFrameTime !== null
          ? Math.min((time - lastFrameTime) / 1000, 0.05)
          : 0;
        lastFrameTime = animate ? time : null;
        networkContext.clearRect(0, 0, width, height);

        nodes.forEach((node) => {
          if (delta) {
            node.x += node.vx * delta;
            node.y += node.vy * delta;

            if (node.x < area.left || node.x > area.right) node.vx *= -1;
            if (node.y < area.top || node.y > area.bottom) node.vy *= -1;
            node.x = Math.max(area.left, Math.min(area.right, node.x));
            node.y = Math.max(area.top, Math.min(area.bottom, node.y));
          }
        });

        for (let i = 0; i < nodes.length; i += 1) {
          for (let j = i + 1; j < nodes.length; j += 1) {
            const dx = nodes[i].x - nodes[j].x;
            const dy = nodes[i].y - nodes[j].y;
            const distance = Math.hypot(dx, dy);

            if (distance < connectionRange) {
              const opacity = (1 - distance / connectionRange) * 0.14;
              networkContext.strokeStyle = isLightTheme
                ? `rgba(36, 123, 255, ${opacity * 0.55})`
                : `rgba(0, 217, 255, ${opacity})`;
              networkContext.lineWidth = 0.7;
              networkContext.beginPath();
              networkContext.moveTo(nodes[i].x, nodes[i].y);
              networkContext.lineTo(nodes[j].x, nodes[j].y);
              networkContext.stroke();
            }
          }
        }

        nodes.forEach((node, index) => {
          const pulse = animate ? (Math.sin(seconds * 0.65 + node.phase) + 1) / 2 : 0.35;
          const opacity = 0.16 + pulse * 0.2;
          networkContext.beginPath();
          networkContext.arc(node.x, node.y, node.radius + pulse * 0.35, 0, Math.PI * 2);
          networkContext.fillStyle = isLightTheme
            ? `rgba(2, 132, 199, ${opacity * 0.65})`
            : `rgba(${index % 4 === 0 ? '36, 123, 255' : '0, 217, 255'}, ${opacity})`;
          networkContext.fill();
        });
      };

      const renderFrame = (time) => {
        frameId = null;
        drawNetwork(time, true);
        if (isVisible && !document.hidden && !reducedMotion.matches) {
          frameId = window.requestAnimationFrame(renderFrame);
        }
      };

      const stopAnimation = () => {
        if (frameId !== null) {
          window.cancelAnimationFrame(frameId);
          frameId = null;
        }
        lastFrameTime = null;
      };

      const startAnimation = () => {
        if (reducedMotion.matches || !isVisible || document.hidden || frameId !== null) return;
        frameId = window.requestAnimationFrame(renderFrame);
      };

      const resizeCanvas = () => {
        const bounds = hero.getBoundingClientRect();
        const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
        width = bounds.width;
        height = bounds.height;
        networkCanvas.width = Math.round(width * pixelRatio);
        networkCanvas.height = Math.round(height * pixelRatio);
        networkContext.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
        createNodes();
        drawNetwork(0, false);
        startAnimation();
      };

      const handleMotionPreference = () => {
        stopAnimation();
        drawNetwork(0, false);
        startAnimation();
      };

      const handleVisibilityChange = () => {
        if (document.hidden) {
          stopAnimation();
        } else {
          startAnimation();
        }
      };

      const intersectionObserver = new IntersectionObserver(([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          startAnimation();
        } else {
          stopAnimation();
        }
      });
      intersectionObserver.observe(hero);
      const resizeObserver = new ResizeObserver(resizeCanvas);
      resizeObserver.observe(hero);
      const themeObserver = new MutationObserver(() => {
        if (reducedMotion.matches) drawNetwork(0, false);
      });
      themeObserver.observe(document.body, { attributes: true, attributeFilter: ['class'] });
      document.addEventListener('visibilitychange', handleVisibilityChange);
      reducedMotion.addEventListener('change', handleMotionPreference);
      const cleanup = () => {
        stopAnimation();
        intersectionObserver.disconnect();
        resizeObserver.disconnect();
        themeObserver.disconnect();
        document.removeEventListener('visibilitychange', handleVisibilityChange);
        reducedMotion.removeEventListener('change', handleMotionPreference);
      };
      window.addEventListener('pagehide', cleanup, { once: true });
      resizeCanvas();
    }
