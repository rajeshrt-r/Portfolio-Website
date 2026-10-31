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
    const heroScene = portrait?.closest('.hero-scene');
    const portraitHero = portrait?.closest('.hero');
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

    // Procedural nebula rendering is isolated from the portrait and network animation loops.
    const nebulaHero = document.querySelector('.hero');
    const nebulaCanvas = nebulaHero?.querySelector('.hero-nebula');
    const nebulaGl = nebulaCanvas?.getContext('webgl', {
      alpha: true,
      antialias: false,
      premultipliedAlpha: false,
      powerPreference: 'low-power'
    });

    if (nebulaHero && nebulaCanvas) {
      if (!nebulaGl) {
        console.warn('Nebula WebGL is unavailable; using the animated CSS fallback.');
      } else {
        const vertexSource = `
          attribute vec2 aPosition;
          varying vec2 vUv;

          void main() {
            vUv = aPosition * 0.5 + 0.5;
            gl_Position = vec4(aPosition, 0.0, 1.0);
          }
        `;
        const fragmentSource = `
          precision mediump float;
          varying vec2 vUv;
          uniform vec2 uResolution;
          uniform float uTime;
          uniform float uLightTheme;
          uniform float uOctaves;

          float hash(vec2 p) {
            return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
          }

          float noise(vec2 p) {
            vec2 cell = floor(p);
            vec2 local = fract(p);
            local = local * local * (3.0 - 2.0 * local);
            return mix(
              mix(hash(cell), hash(cell + vec2(1.0, 0.0)), local.x),
              mix(hash(cell + vec2(0.0, 1.0)), hash(cell + vec2(1.0, 1.0)), local.x),
              local.y
            );
          }

          float fbm(vec2 p) {
            float value = 0.0;
            float amplitude = 0.5;
            mat2 turn = mat2(1.6, -1.2, 1.2, 1.6);
            for (int octave = 0; octave < 5; octave++) {
              if (float(octave) >= uOctaves) break;
              value += noise(p) * amplitude;
              p = turn * p;
              amplitude *= 0.5;
            }
            return value;
          }

          void main() {
            float aspect = uResolution.x / max(uResolution.y, 1.0);
            vec2 space = vec2((vUv.x - 0.5) * aspect, vUv.y - 0.5);
            float time = uTime * 0.14;
            vec2 warp = vec2(
              fbm(space * 1.7 + vec2(time * 0.42, -time * 0.29)),
              fbm(space * 1.7 + vec2(8.3 - time * 0.26, 3.7 + time * 0.34))
            );
            vec2 flow = space * 3.25 + (warp - 0.5) * 3.0;
            flow += vec2(time * 0.48, -time * 0.3);

            float cloudShape = fbm(flow);
            float cloudDetail = fbm(flow * 1.9 + vec2(4.2 - time * 0.22, -2.6 + time * 0.16));
            float cloud = smoothstep(0.32, 0.7, cloudShape * 0.66 + cloudDetail * 0.34);
            float textSafeGlow = mix(0.42, 1.0, smoothstep(-1.3, 0.7, space.x));
            float verticalFalloff = 0.78 + 0.22 * (1.0 - smoothstep(0.12, 0.68, abs(space.y)));
            float region = textSafeGlow * verticalFalloff;
            float filaments = 1.0 - abs(cloudDetail * 2.0 - 1.0);
            float wisps = smoothstep(0.36, 0.82, filaments + cloudShape * 0.2);
            float densityPulse = 0.95 + 0.05 * sin(time * 1.1 + warp.x * 4.0);
            float density = clamp(cloud * region * (0.78 + wisps * 0.62) * densityPulse, 0.0, 1.0);
            float core = smoothstep(0.55, 0.88, cloudShape + cloudDetail * 0.22) * density;

            vec3 deepBlue = vec3(0.006, 0.035, 0.13);
            vec3 cobalt = vec3(0.012, 0.16, 0.43);
            vec3 electricBlue = vec3(0.015, 0.32, 0.72);
            vec3 turquoise = vec3(0.02, 0.56, 0.72);
            vec3 cloudColor = mix(deepBlue, cobalt, smoothstep(0.18, 0.72, cloudDetail));
            cloudColor = mix(cloudColor, electricBlue, smoothstep(0.34, 0.88, cloudShape) * 0.7);
            cloudColor = mix(cloudColor, turquoise, core * 0.74);
            float cloudAlpha = clamp(density * 0.66 + core * 0.12, 0.0, 0.72);

            vec3 cloudTint = vec3(0.0, 0.16, 0.42) * core * (0.4 + 0.6 * sin(time * 0.9 + cloudDetail * 8.0));
            cloudColor += cloudTint;

            vec2 starGrid = vUv * vec2(105.0 * aspect, 64.0);
            vec2 starCell = floor(starGrid);
            vec2 starLocal = fract(starGrid);
            vec2 starPoint = vec2(hash(starCell), hash(starCell + 17.1));
            float starDistance = length((starLocal - starPoint) * vec2(1.0, aspect));
            float starSeed = hash(starCell + 31.7);
            float star = (1.0 - smoothstep(0.035, 0.15, starDistance))
              * step(0.95, starSeed)
              * (0.72 + 0.28 * sin(uTime * 0.7 + starSeed * 48.0));

            float alpha = clamp(cloudAlpha + star * 0.62, 0.0, 0.9);
            float lightFactor = mix(1.0, 0.2, uLightTheme);
            vec3 color = mix(cloudColor, vec3(0.58, 0.86, 1.0), star);
            gl_FragColor = vec4(color, alpha * lightFactor);
          }
        `;

        const compileShader = (type, source) => {
          const shader = nebulaGl.createShader(type);
          if (!shader) return null;
          nebulaGl.shaderSource(shader, source);
          nebulaGl.compileShader(shader);
          if (!nebulaGl.getShaderParameter(shader, nebulaGl.COMPILE_STATUS)) {
            console.warn('Nebula shader compilation failed:', nebulaGl.getShaderInfoLog(shader));
            nebulaGl.deleteShader(shader);
            return null;
          }
          return shader;
        };

        const vertexShader = compileShader(nebulaGl.VERTEX_SHADER, vertexSource);
        const fragmentShader = compileShader(nebulaGl.FRAGMENT_SHADER, fragmentSource);
        const nebulaProgram = vertexShader && fragmentShader ? nebulaGl.createProgram() : null;

        if (!nebulaProgram) {
          console.warn('Nebula WebGL could not initialize; using the animated CSS fallback.');
          if (vertexShader) nebulaGl.deleteShader(vertexShader);
          if (fragmentShader) nebulaGl.deleteShader(fragmentShader);
        } else {
          nebulaGl.attachShader(nebulaProgram, vertexShader);
          nebulaGl.attachShader(nebulaProgram, fragmentShader);
          nebulaGl.linkProgram(nebulaProgram);
          nebulaGl.deleteShader(vertexShader);
          nebulaGl.deleteShader(fragmentShader);

          if (!nebulaGl.getProgramParameter(nebulaProgram, nebulaGl.LINK_STATUS)) {
            console.warn('Nebula WebGL program linking failed:', nebulaGl.getProgramInfoLog(nebulaProgram));
            nebulaGl.deleteProgram(nebulaProgram);
          } else {
            const nebulaBuffer = nebulaGl.createBuffer();
            if (!nebulaBuffer) {
              console.warn('Nebula WebGL buffer allocation failed; using the animated CSS fallback.');
              nebulaGl.deleteProgram(nebulaProgram);
            } else {
              nebulaCanvas.classList.add('is-webgl');
              nebulaGl.bindBuffer(nebulaGl.ARRAY_BUFFER, nebulaBuffer);
              nebulaGl.bufferData(
                nebulaGl.ARRAY_BUFFER,
                new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
                nebulaGl.STATIC_DRAW
              );
              nebulaGl.useProgram(nebulaProgram);

              const positionLocation = nebulaGl.getAttribLocation(nebulaProgram, 'aPosition');
              nebulaGl.enableVertexAttribArray(positionLocation);
              nebulaGl.vertexAttribPointer(positionLocation, 2, nebulaGl.FLOAT, false, 0, 0);
              const resolutionLocation = nebulaGl.getUniformLocation(nebulaProgram, 'uResolution');
              const timeLocation = nebulaGl.getUniformLocation(nebulaProgram, 'uTime');
              const themeLocation = nebulaGl.getUniformLocation(nebulaProgram, 'uLightTheme');
              const octaveLocation = nebulaGl.getUniformLocation(nebulaProgram, 'uOctaves');
              let nebulaFrame = null;
              let lastNebulaFrame = 0;
              let nebulaElapsed = 0;
              let nebulaVisible = false;
              let nebulaDisposed = false;

              const drawNebula = (timeSeconds) => {
                if (nebulaDisposed || nebulaGl.isContextLost()) return;
                nebulaGl.viewport(0, 0, nebulaCanvas.width, nebulaCanvas.height);
                nebulaGl.clearColor(0, 0, 0, 0);
                nebulaGl.clear(nebulaGl.COLOR_BUFFER_BIT);
                nebulaGl.uniform2f(resolutionLocation, nebulaCanvas.width, nebulaCanvas.height);
                nebulaGl.uniform1f(timeLocation, timeSeconds);
                nebulaGl.uniform1f(themeLocation, document.body.classList.contains('light-theme') ? 1 : 0);
                nebulaGl.uniform1f(octaveLocation, window.innerWidth <= 768 ? 4 : 5);
                nebulaGl.drawArrays(nebulaGl.TRIANGLES, 0, 6);
              };

              const stopNebula = () => {
                if (nebulaFrame !== null) {
                  window.cancelAnimationFrame(nebulaFrame);
                  nebulaFrame = null;
                }
                lastNebulaFrame = 0;
              };

              const animateNebula = (timestamp) => {
                nebulaFrame = null;
                if (
                  !nebulaVisible
                  || document.hidden
                  || reducedMotion.matches
                  || nebulaDisposed
                  || nebulaGl.isContextLost()
                ) return;
                if (timestamp - lastNebulaFrame >= 33) {
                  if (lastNebulaFrame > 0) {
                    nebulaElapsed += Math.min((timestamp - lastNebulaFrame) / 1000, 0.05);
                  }
                  drawNebula(nebulaElapsed);
                  lastNebulaFrame = timestamp;
                }
                nebulaFrame = window.requestAnimationFrame(animateNebula);
              };

              const startNebula = () => {
                if (
                  nebulaFrame !== null
                  || !nebulaVisible
                  || document.hidden
                  || reducedMotion.matches
                  || nebulaDisposed
                  || nebulaGl.isContextLost()
                ) return;
                nebulaFrame = window.requestAnimationFrame(animateNebula);
              };

              const resizeNebula = () => {
                const bounds = nebulaHero.getBoundingClientRect();
                const renderScale = bounds.width <= 768 ? 0.36 : bounds.width <= 1200 ? 0.45 : 0.5;
                const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.15) * renderScale;
                const width = Math.max(1, Math.round(bounds.width * pixelRatio));
                const height = Math.max(1, Math.round(bounds.height * pixelRatio));
                if (nebulaCanvas.width !== width || nebulaCanvas.height !== height) {
                  nebulaCanvas.width = width;
                  nebulaCanvas.height = height;
                }
                drawNebula(nebulaElapsed);
                startNebula();
              };

              const handleNebulaMotion = () => {
                stopNebula();
                drawNebula(nebulaElapsed);
                startNebula();
              };

              const handleNebulaVisibility = () => {
                if (document.hidden) {
                  stopNebula();
                } else {
                  drawNebula(nebulaElapsed);
                  startNebula();
                }
              };

              const handleNebulaPageHide = (event) => {
                if (event.persisted) return;
                nebulaDisposed = true;
                stopNebula();
                nebulaObserver.disconnect();
                nebulaResizeObserver.disconnect();
                nebulaThemeObserver.disconnect();
                nebulaCanvas.removeEventListener('webglcontextlost', handleNebulaContextLoss);
                document.removeEventListener('visibilitychange', handleNebulaVisibility);
                window.removeEventListener('pageshow', handleNebulaVisibility);
                reducedMotion.removeEventListener('change', handleNebulaMotion);
                nebulaGl.deleteBuffer(nebulaBuffer);
                nebulaGl.deleteProgram(nebulaProgram);
                nebulaGl.getExtension('WEBGL_lose_context')?.loseContext();
              };

              const handleNebulaContextLoss = (event) => {
                event.preventDefault();
                stopNebula();
                nebulaCanvas.classList.remove('is-webgl');
                console.warn('Nebula WebGL context was lost; using the animated CSS fallback.');
              };

              const nebulaObserver = new IntersectionObserver(([entry]) => {
                nebulaVisible = entry.isIntersecting;
                if (nebulaVisible) {
                  drawNebula(nebulaElapsed);
                  startNebula();
                } else {
                  stopNebula();
                }
              });
              const nebulaResizeObserver = new ResizeObserver(resizeNebula);
              const nebulaThemeObserver = new MutationObserver(() => drawNebula(nebulaElapsed));
              nebulaObserver.observe(nebulaHero);
              nebulaResizeObserver.observe(nebulaHero);
              nebulaThemeObserver.observe(document.body, { attributes: true, attributeFilter: ['class'] });
              nebulaCanvas.addEventListener('webglcontextlost', handleNebulaContextLoss);
              document.addEventListener('visibilitychange', handleNebulaVisibility);
              window.addEventListener('pageshow', handleNebulaVisibility);
              reducedMotion.addEventListener('change', handleNebulaMotion);
              resizeNebula();

              window.addEventListener('pagehide', handleNebulaPageHide);
            }
          }
        }
      }
    }
