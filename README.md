# Durat Al-Khalij — درة الخليج للأثاث

Static landing page (HTML/CSS/JS, no backend, no build step) for a home & office furniture company.
English / Arabic (RTL) toggle included.

## Edit your content

Everything you need to fill is in **`assets/js/config.js`**:

- **Contact** — phone, WhatsApp number (digits with country code), email, address, working hours, optional Google Maps embed URL.
- **Social links** — leave empty to hide.
- **Gallery** — drop photos into `assets/images/gallery/` and add one line per photo:
  ```js
  { src: "assets/images/gallery/sofa.jpg", category: "home", title_en: "Sofa", title_ar: "كنبة" },
  ```
  `category` is `home`, `office` or `decor` (drives the filter buttons). Delete the `sample-*.svg` placeholders when you have real photos.

Texts: English is in `index.html`, Arabic translations are in the `AR` object at the top of `assets/js/main.js`.

The contact form has no server — it opens WhatsApp or the visitor's email app with the message pre-filled.

## Run locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy (GitHub Pages via GitHub Actions)

1. Push this folder to a GitHub repo on the `main` branch.
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Every push to `main` runs `.github/workflows/deploy.yml`: it validates the HTML, checks that every gallery image in `config.js` exists, then publishes the site.

The site will be live at `https://<user>.github.io/<repo>/`. For a custom domain, set it in Settings → Pages → Custom domain and add the DNS records GitHub shows you.
