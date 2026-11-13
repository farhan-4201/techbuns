# TechBuns Website Replication

Exact pixel-perfect replication of [TechBuns](https://techbuns.co.uk/), including all visual styles, original branding assets, high-resolution WebP product photos, typography (Space Grotesk & Inter), responsive layout, and interactive features.

## 🚀 Key Features Replicated

- **Navigation & Header:**
  - Sticky header with translucent glassmorphic backdrop blur and drop-shadow on scroll (`window.scrollY > 40`).
  - Mobile responsive hamburger menu drawer with smooth transitions and auto-close on selection.
  - Smooth anchor link scrolling to all sections (`#how-it-works`, `#why-techbuns`, `#brands`, `#contact`).

- **Hero Section:**
  - Original high-res hero image (`techbuns/hero.webp`) with multi-stop dark gradient overlay.
  - High-impact typography with bold accent color (`#FF6933`).
  - Call to action buttons ("Let's Team Up", "How It Works").

- **Infinite Marquee Ticker:**
  - Seamless CSS animation loop showcasing platform partner badges (`Just Eat`, `Uber Eats`, `Deliveroo`, `Order Hub Solutions`).

- **How It Works:**
  - 3-step numbered workflow cards (01 Sign Up, 02 Set Up, 03 Earn) with custom icons and responsive grid.

- **Why TechBuns:**
  - 6 feature benefit cards with brand accent icons: No Setup Fees, Tech Powered, Trusted & Proven, Full Support, Data-Driven, Fast Launch.

- **Our Brands Portfolio:**
  - High-res WebP product photography for all virtual restaurant brands:
    - **Yoyo Burger** (Gourmet Burgers)
    - **Clifton Burgers** (Burgers & Chicken)
    - **Smashing Soundwell** (Smash Burgers)
    - **Taco Loco** (Mexican Street Food)
    - **Loaded Pie** (Artisan Pizza)
    - **Wrap Kings** (Wraps & Bowls)

- **Revenue Callout Banner:**
  - Vibrant brand-color banner with call to action.

- **Interactive Contact & Partner Enquiry Form:**
  - Inputs for Full Name, Email, Phone, Business Name, Business Address, and Message.
  - Input validation and dynamic loading state (`Sending…` with animated spinner).
  - Transition to full confirmation screen ("Thanks — we've got it! Our team will be in touch within 24 hours.") and "Send another enquiry" reset action.
  - Toast notification alert.

- **WhatsApp Floating Widget:**
  - Bottom-right fixed floating WhatsApp chat button linking directly to TechBuns WhatsApp.
  - Dismissible greeting speech bubble with close button.

- **Footer:**
  - Brand mark, quick links, platform tags, social media link, and copyright notice.

---

## 🛠️ How to Run Locally

### Option 1: Using Vite Dev Server (Recommended)
```bash
npm install
npm run dev
```
Open `http://localhost:5173` in your browser.

### Option 2: Build for Production
```bash
npm run build
npm run preview
```

### Option 3: Direct Static File
You can also directly double-click or open `index.html` in any modern web browser.
