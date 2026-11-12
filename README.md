# Debtosh Mohanty — Personal Portfolio Website

A modern, visually appealing, and fully responsive personal portfolio website for **Debtosh Mohanty** (Computer Science Graduate · IT Support & Data Annotation Specialist).

Built with a light color theme, subtle gradients, clean typography, modular components, and smooth animations using React, Tailwind CSS, Lucide icons, and Framer Motion.

---

## 🌟 Key Highlights & Design Identity

- **Light Aesthetic & Visual Hierarchy**: Built with off-white (`#F8FAFC`), crisp white cards, and navy blue / muted sky accents (`#1E3A8A`, `#2563EB`, `#0F172A`).
- **100% Authentic Content**: Based strictly on Debtosh Mohanty's CV — zero fabricated claims, fake percentages, or placeholder experiences.
- **Interactive CV Viewer & Downloader**: Built-in CV modal allowing recruiters to view, download as plain text, or print / save as a clean PDF (`window.print()`).
- **Interactive Project Showcase**: Complete architecture diagrams for the Cisco Packet Tracer Networking Project and Python Data Analysis Pipeline, with an interactive project breakdown modal.
- **Verified Credentials**: Showcases 1-Year Jetking Institute experience across IT Support and Data Annotation, SDI Bhubaneswar Data Science Certification, Jetking Cloud Computing course, and Gandhi Engineering College B.Tech CSE degree.
- **Responsive Across Devices**: Fully responsive layout with a mobile hamburger navigation menu, active section highlighting, and floating back-to-top button.
- **Functional Contact Section**: Instant one-click copy for email (`debtoshmohanty7@gmail.com`) and phone (`+91 8895486669`), along with a validated contact form.

---

## 🛠️ Tech Stack

- **Framework**: React 18+ / React 19 with Vite & TypeScript
- **Styling**: Tailwind CSS v3 with custom light color palette & typography
- **Animations**: Framer Motion for scroll reveals, staggered card entrances, and floating badges
- **Icons**: Lucide React
- **Typography**: Plus Jakarta Sans / Inter

---

## 📁 Project Structure

```text
portfolio/
├── public/
│   └── favicon.svg           # Custom SVG monogram favicon (DM)
├── src/
│   ├── assets/               # Static assets
│   ├── components/
│   │   ├── Navbar.tsx        # Sticky navbar with mobile menu & active highlights
│   │   ├── Hero.tsx          # Hero section with interactive identity card & CTAs
│   │   ├── About.tsx         # Professional bio, strengths & key stats
│   │   ├── Skills.tsx        # Categorized skills with interactive filter tabs
│   │   ├── Experience.tsx    # Vertical timeline for Jetking & internships
│   │   ├── Projects.tsx      # Project cards, diagrams & detail breakdown modal
│   │   ├── Education.tsx     # B.Tech CSE, 12th & 10th academic qualifications
│   │   ├── Certifications.tsx# SDI Bhubaneswar, Jetking Cloud, and training cards
│   │   ├── Contact.tsx       # Direct contact channels & validated contact form
│   │   ├── Footer.tsx        # Minimal footer with quick links & copyright
│   │   ├── CvModal.tsx       # Printable & downloadable curriculum vitae modal
│   │   └── BackToTop.tsx     # Smooth scroll-to-top floating button
│   ├── data/
│   │   └── portfolioData.ts  # Structured profile data extracted from CV
│   ├── App.tsx               # Main layout orchestrator
│   ├── index.css             # Tailwind imports & custom utilities
│   └── main.tsx              # Application entrypoint
├── index.html                # Semantic HTML5 template with SEO meta tags
├── tailwind.config.js        # Tailwind theme configuration
├── vite.config.ts            # Vite configuration
└── package.json              # Project dependencies & scripts
```

---

## 🚀 Running the Project Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

The preview server runs by default on `http://localhost:5173/`.

---

## 🌐 Deployment Options

- **Vercel / Netlify**: Connect the GitHub repository; the build command is `npm run build` and the output directory is `dist`.
- **GitHub Pages**: Deploy the generated `dist/` folder using `gh-pages` or GitHub Actions.

---

## 📄 License & Credits
Designed and built for **Debtosh Mohanty**.
