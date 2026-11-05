# Rajesh R Portfolio

A static, multi-page portfolio website built with HTML, CSS, and vanilla JavaScript.

## Run locally

Serve the repository root with a local static server. For example, run `python -m http.server 8000` from the project directory and open `http://localhost:8000`. The root page redirects to `pages/home.html`.

## Install as an app

The site is configured as an installable progressive web app. Use a secure HTTPS deployment or `localhost`; browsers do not allow app installation when opening files directly from disk. In a supported browser, use the install icon in the address bar or the browser menu. The core pages and styles are cached for offline navigation. Images load from this repository's public `main` branch on GitHub and require an internet connection.

## GitHub Pages deployment

This repository is `rajeshrt-r/Portfolio-Website`, so its project-site URL is `https://rajeshrt-r.github.io/Portfolio-Website/`. Internal page, stylesheet, and script references are relative so they also work when hosted below the domain root. Image references use the corresponding public GitHub raw URLs.

The `Deploy static portfolio to GitHub Pages` workflow publishes the repository root when changes are pushed to `main`. Enable **Settings → Pages → Build and deployment → Source → GitHub Actions** once in the repository settings. The public Pages URL currently returns 404 until that configuration is enabled and a deployment succeeds.

## Project layout

- `pages/` contains the portfolio pages.
- `assets/images/` contains images organized by backgrounds, profile, certifications, and icons.
- `assets/css/pages/` contains each page's extracted stylesheet.
- `assets/js/pages/` contains each page's extracted JavaScript.
- `assets/js/` contains reusable standalone JavaScript modules.
- `assets/data/` contains the reusable profile and certification datasets.
- `documents/` is reserved for downloadable documents.

Each page links to its own CSS and JavaScript files. JSON-LD structured data stays in the page head.
