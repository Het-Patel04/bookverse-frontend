# 📚 BookVerse — Bookstore Frontend

BookVerse is a responsive multi-page online bookstore UI built with **HTML5, CSS3 and vanilla JavaScript**. It includes a home page, searchable/filterable catalog, book details, login/sign-up, cart, wishlist and profile screens.

> **Project status:** This repository contains the frontend. Cart, wishlist, orders and profile demo data use browser `localStorage`. Authentication and book listing can connect to the optional BookVerse .NET API. A real production store still needs a deployed backend, payment provider, email service and security review.

## Features

- Responsive dark UI with mobile navigation
- Home page with categories, trending books, bestsellers, new arrivals and deal countdown
- Catalog search, category/price/rating/format filters, sorting, grid/list view and pagination
- Book details, related titles, wishlist and cart actions
- Cart quantity changes, coupon demo (`BOOK10` / `WELCOME`), delivery calculation and demo checkout
- Login/sign-up form validation and password visibility
- Profile, order history, address and account screens
- `localStorage` persistence for demo data
- Optional .NET API integration helper in `js/frontend-api.js`

## Folder structure

```text
bookverse-complete/
├── index.html
├── catalog.html
├── book-detail.html
├── cart.html
├── wishlist.html
├── login.html
├── profile.html
├── css/
│   └── style.css
├── js/
│   ├── app.js
│   └── frontend-api.js
├── DEMO-15-MIN.md
├── README.md
└── .gitignore
```

## Run locally

No build step or npm install is required.

### Option 1 — VS Code Live Server

1. Open this folder in VS Code.
2. Install the **Live Server** extension if needed.
3. Right-click `index.html` → **Open with Live Server**.

### Option 2 — Python

Run from the project root:

```bash
python -m http.server 5500
```

Open `http://localhost:5500`.

## Optional .NET API

`js/frontend-api.js` currently points to `http://localhost:5000/api`. Start your BookVerse API on that address and configure its PostgreSQL connection before expecting server-backed books/authentication to work. If the API is not running, pages that request it use the included sample catalog where their fallback is implemented. A localhost API is **not available** to visitors on GitHub Pages; deploy the API and update `API_URL` before connecting a hosted frontend.

Do not commit database passwords, API keys, private connection strings, or real user data. The seeded demo password in a development guide should never be reused in production.

## Publish to GitHub

1. Create a new **public** or **private** repository on GitHub, for example `bookverse-frontend`.
2. Extract/open this folder and make sure the root contains `index.html`, `css/`, and `js/`.
3. In a terminal in this folder:

```bash
git init
git add .
git commit -m "Add complete BookVerse frontend"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/bookverse-frontend.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username and use your actual repository URL. If GitHub says the remote already contains a README, pull/reconcile that commit before pushing.

### Enable GitHub Pages

1. Open the repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Choose branch `main`, folder `/ (root)`, and save.
5. Wait for the Pages URL to appear in the same section.

GitHub Pages serves static frontend files only. Demo cart/wishlist state is stored in each visitor's browser; backend-dependent functionality needs a publicly deployed API and correct CORS configuration.

## Notes / limitations

- This is a student/demo frontend, not a production-ready commerce platform.
- Demo social sign-in buttons do not authenticate with Google, Facebook or Apple.
- The checkout flow is a demo and does not charge money or create a verified payment.
- Never store passwords or sensitive payment details in browser `localStorage` in a production application.
- Book cover images are loaded from Open Library and require an internet connection; fallback placeholders are shown if unavailable.

## Tech stack

HTML · CSS · JavaScript · localStorage · optional ASP.NET Core API · optional PostgreSQL backend
