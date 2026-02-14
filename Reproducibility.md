# Reproducibility Guide

> **Audience:** Beginner / non-developer  
> **Goal:** Walk you through every decision and step that was made to build the Pollos a la Brasa Eagle Rock restaurant website from scratch on a Windows PC.

---

## Table of Contents

1. [What We're Building](#1-what-were-building)
2. [Installing Node.js](#2-installing-nodejs)
3. [Creating the Project with Next.js](#3-creating-the-project-with-nextjs)
4. [Understanding the Project Structure](#4-understanding-the-project-structure)
5. [Building the Design System](#5-building-the-design-system)
6. [Creating the Menu Data](#6-creating-the-menu-data)
7. [Building the Components](#7-building-the-components)
8. [Building the Pages](#8-building-the-pages)
9. [Running the Website](#9-running-the-website)
10. [Troubleshooting Common Issues](#10-troubleshooting-common-issues)

---

## 1. What We're Building

We built a **restaurant website** for **Pollos a la Brasa**, a real Peruvian rotisserie chicken restaurant in the Eagle Rock neighborhood of Los Angeles. The website includes:

- **Home page** — hero section, featured dishes, location/hours info
- **Menu page** — complete 41-item menu with pricing, organized by category
- **About page** — the restaurant's story and Peruvian cuisine background
- **Contact page** — Google Maps embed, phone number, hours, and online ordering links

### Technology Choices

| Tool | What It Does | Why We Chose It |
|------|-------------|-----------------|
| **Node.js** | A runtime that lets you run JavaScript on your computer (not just in a browser). Required to build modern web apps. | It's the industry standard for web development. Every modern web framework depends on it. |
| **npm** | "Node Package Manager" — comes with Node.js. Downloads and manages third-party code libraries ("packages") that your project depends on. | Automatically included with Node.js. It's how you install frameworks like Next.js. |
| **Next.js** | A React-based web framework that handles routing (URLs like `/menu`), server-rendering, and optimization. | It's the most popular React framework. It gives us file-based routing (each file in `src/app/` becomes a URL), fast page loads, and SEO optimization. |
| **React** | A JavaScript library for building user interfaces with reusable "components" (e.g., a Header component used on every page). | It's the most widely-used UI library in the world. Next.js is built on top of it. |
| **TypeScript** | A superset of JavaScript that adds "types" — essentially labels that tell you what kind of data a variable holds (string, number, etc.). | Catches bugs before they happen. If you accidentally pass text where a number is expected, TypeScript warns you immediately. |
| **Tailwind CSS** | A CSS framework where you style elements by adding utility class names directly in your HTML (e.g., `text-white`, `rounded-lg`, `px-4`). | Much faster than writing traditional CSS files. Instead of naming classes and writing rules, you compose styles inline. |

---

## 2. Installing Node.js

### What Is Node.js?

Think of Node.js as the "engine" that powers modern web development tools. Without it, you can't run Next.js, install packages, or build the project.

### What We Did

1. **Downloaded** Node.js v22.14.0 (the Long-Term Support version) as a portable `.zip` file from [nodejs.org](https://nodejs.org/dist/v22.14.0/node-v22.14.0-win-x64.zip)
2. **Extracted** the zip to `%LOCALAPPDATA%\nodejs\` — this is a local folder on your computer
3. **Added it to PATH** — PATH is a system setting that tells Windows where to find programs. By adding Node.js to PATH, you can type `node` or `npm` in any terminal and Windows knows where to find them.

### How to Verify

Open PowerShell and run:
```powershell
node --version
# Should output: v22.14.0

npm --version
# Should output: 10.9.2
```

### Decision: Portable vs. Installer

We chose the **portable zip** instead of the standard MSI installer because:
- It doesn't require administrator privileges
- It's self-contained — you can delete the folder to uninstall
- The MSI installer's "silent mode" had issues in our environment

---

## 3. Creating the Project with Next.js

### What Is `create-next-app`?

`create-next-app` is a command-line tool that generates a complete Next.js project with all the configuration files pre-set. Without it, you'd need to manually create dozens of configuration files.

### The Command We Ran

```powershell
npx -y create-next-app@latest ./ --typescript --tailwind --eslint --app --src-dir --no-import-alias --yes
```

Breaking down every flag:

| Flag | What It Does |
|------|-------------|
| `npx -y` | Runs a package without installing it permanently. `-y` means "yes, auto-install it." |
| `create-next-app@latest` | The tool name. `@latest` means use the newest version. |
| `./` | Create the project in the current directory (not a subfolder). |
| `--typescript` | Use TypeScript instead of plain JavaScript, for type safety. |
| `--tailwind` | Include Tailwind CSS for styling. |
| `--eslint` | Include ESLint, a tool that checks your code for common mistakes. |
| `--app` | Use the "App Router" — Next.js's modern routing system where folders = pages. |
| `--src-dir` | Put source code in a `src/` folder instead of the project root (cleaner organization). |
| `--no-import-alias` | Don't set up import aliases (keeps things simpler). |
| `--yes` | Accept all defaults without asking questions. |

---

## 4. Understanding the Project Structure

After the project is created, here's what each file/folder does:

```
pollosalabrasa/
├── public/              ← Static files (images, favicon) served directly
├── src/
│   ├── app/
│   │   ├── globals.css  ← Global styles (colors, fonts, animations)
│   │   ├── layout.tsx   ← Root layout — wraps EVERY page with Header + Footer
│   │   ├── page.tsx     ← Home page (URL: /)
│   │   ├── menu/
│   │   │   └── page.tsx ← Menu page (URL: /menu)
│   │   ├── about/
│   │   │   └── page.tsx ← About page (URL: /about)
│   │   └── contact/
│   │       └── page.tsx ← Contact page (URL: /contact)
│   ├── components/
│   │   ├── Header.tsx   ← Navigation bar (appears on every page)
│   │   ├── Footer.tsx   ← Footer section (appears on every page)
│   │   └── MenuSection.tsx ← Reusable menu category renderer
│   └── lib/
│       └── menuData.ts  ← All menu items, descriptions, and prices
├── package.json         ← Lists all dependencies and scripts
├── tailwind.config.ts   ← Tailwind CSS configuration
├── tsconfig.json        ← TypeScript configuration
└── next.config.ts       ← Next.js configuration
```

### Key Concept: File-Based Routing

In Next.js App Router, **the folder structure IS the URL structure**:

- `src/app/page.tsx` → `http://localhost:3000/`
- `src/app/menu/page.tsx` → `http://localhost:3000/menu`
- `src/app/about/page.tsx` → `http://localhost:3000/about`

This is why we don't need a separate router configuration.

---

## 5. Building the Design System

### What Is a Design System?

A design system is a set of reusable visual rules — colors, fonts, spacing, animations — that ensure the entire website looks consistent. We defined ours in `globals.css`.

### Color Palette Decision

We chose **warm Peruvian-inspired colors** on a dark background:

| Color | CSS Variable | Hex Code | Used For |
|-------|-------------|----------|----------|
| Deep Brick Red | `--color-primary` | `#B91C1C` | Buttons, accents |
| Burnt Orange | `--color-accent` | `#D97706` | Highlights, active states |
| Gold | `--color-gold` | `#FBBF24` | Prices, headings, links |
| Warm Cream | `--color-cream` | `#FEF3C7` | Light accents |
| Charcoal | `--color-charcoal` | `#1C1917` | Background |
| Stone Gray | `--color-stone` | `#78716C` | Secondary text |

**Why dark background?** It creates a premium restaurant feel, makes gold text pop, and feels modern.

### Font Decision

- **Inter** (body text) — clean, highly readable, modern sans-serif
- **Playfair Display** (headings) — elegant serif font with a classic restaurant feel

Both loaded via Google Fonts `<link>` tags in `layout.tsx` (not CSS `@import`, since CSS requires imports to come before all other rules — a real issue we encountered and fixed).

### Design Techniques Used

| Technique | What It Is | Where We Used It |
|-----------|-----------|------------------|
| **Glassmorphism** | Semi-transparent backgrounds with blur effect | Navigation bar, info cards |
| **Gradient text** | Text that transitions between colors | Restaurant name in hero |
| **Micro-animations** | Small, subtle motions | Button hover effects, floating decorations |
| **Staggered reveals** | Elements appear one after another | Hero section entrance animation |

---

## 6. Creating the Menu Data

### Where the Data Lives

All menu data is in `src/lib/menuData.ts` — a single TypeScript file with structured data. This is important because:

- **Single source of truth** — change a price once, it updates everywhere
- **Type safety** — TypeScript ensures every menu item has the required fields
- **Separation of concerns** — data is separate from presentation

### How We Researched the Menu

Prices and items were cross-referenced from **multiple sources** to ensure accuracy:

1. The restaurant's own ordering website (pollosalabrasaca.com)
2. DoorDash listings
3. Grubhub listings
4. order.online listings

### Decision: Handling Uncertain Prices

Some items had **inconsistent prices across platforms** (delivery platforms sometimes mark up prices). For those items, we:

1. Added an `uncertainPrice: true` flag in the data
2. Display a `*` asterisk next to those prices on the website
3. Include a footnote: *"Prices marked with ★ are approximate. Contact the restaurant for current pricing."*

This is transparent and honest — a user knows which prices to double-check.

### Data Structure

```typescript
interface MenuItem {
  id: number;           // Unique identifier
  nameEs: string;       // Spanish name (e.g., "Lomo Saltado")
  nameEn: string;       // English name (e.g., "Sautéed Loin")
  description?: string; // English description (optional)
  descriptionEs?: string; // Spanish description (optional)
  price: number;        // Price in USD
  uncertainPrice?: boolean; // Whether this price is approximate
}
```

The `?` after a field name means it's optional — not every item needs a description (e.g., sides like "Rice" are self-explanatory).

---

## 7. Building the Components

### What Are Components?

In React, a **component** is a reusable piece of UI. Instead of duplicating the navigation bar HTML on every page, you write it once as a `Header` component and use it everywhere.

### Header Component (`src/components/Header.tsx`)

**Decisions made:**
- **Sticky positioning** — stays at the top as you scroll, so navigation is always accessible
- **Glassmorphism effect** — transparent with blur when scrolled, fully transparent at page top
- **Mobile hamburger menu** — on small screens, links collapse into a menu toggle (the three horizontal lines ☰)
- **"Order Online" CTA** — red button always visible, linking to the restaurant's ordering system
- **Active link highlighting** — the current page link is highlighted in gold

**Key concept: `"use client"`** — this directive at the top tells Next.js this component needs JavaScript in the browser (for scroll detection and menu toggle). By default, Next.js renders components on the server for speed.

### Footer Component (`src/components/Footer.tsx`)

A four-column layout with:
1. Brand description
2. Quick navigation links
3. Hours of operation
4. Contact info + Order Online button

### MenuSection Component (`src/components/MenuSection.tsx`)

A **reusable component** that takes a menu category (e.g., "Appetizers") and renders:
- Category name in Spanish + English
- Optional description (e.g., "Served with choice of 2 sides")
- Grid of item cards with name, description, and price
- Asterisk on uncertain prices

We use this same component 9 times on the menu page — once per category.

---

## 8. Building the Pages

### Home Page (`src/app/page.tsx`)

| Section | Purpose |
|---------|---------|
| **Hero** | Full-screen introduction with restaurant name, tagline, and CTA buttons |
| **Featured Dishes** | Three handpicked dishes with descriptions to entice visitors |
| **Info Strip** | Quick-reference cards for location, hours, and phone number |
| **Menu Teaser** | Encourages visitors to view the full menu |

### Menu Page (`src/app/menu/page.tsx`)

| Feature | Why |
|---------|-----|
| **Sticky category nav** | Horizontal scrollable pills that let you jump to any section |
| **9 menu sections** | All categories rendered via `MenuSection` component |
| **Price footnote** | Explains asterisked prices honestly |
| **Order CTA** | Easy access to place an order after browsing |

### About Page (`src/app/about/page.tsx`)

Tells the restaurant's story:
- Heritage section (opened 2020, family dream)
- Peruvian cuisine context (history of Pollo a la Brasa, Día del Pollo a la Brasa)
- Three value cards (Fresh Ingredients, Traditional Recipes, Community First)

### Contact Page (`src/app/contact/page.tsx`)

| Element | Details |
|---------|---------|
| **Google Maps embed** | Interactive map showing the location |
| **Address** | 2161 Colorado Blvd, LA 90041 with "Open in Google Maps" link |
| **Phone** | Click-to-call (323) 255-6322 |
| **Hours table** | Full 7-day schedule, Wednesday marked as "Closed" in red |
| **Order Online** | Direct link to ordering system |

### Root Layout (`src/app/layout.tsx`)

The layout wraps **every page**. It includes:
- HTML `<head>` with SEO metadata (title, description, keywords)
- Google Fonts loading via `<link>` tags
- `<Header />` at the top of every page
- `<Footer />` at the bottom of every page

---

## 9. Running the Website

### Development Mode (for building/testing)

```powershell
npm run dev
```

This starts a **development server** at `http://localhost:3000`. Changes you make to code are reflected instantly in the browser ("hot reload").

### Production Build (for deploying)

```powershell
npm run build    # Compiles and optimizes everything
npm run start    # Serves the optimized build
```

The build command:
1. Compiles TypeScript to JavaScript
2. Optimizes CSS (removes unused styles)
3. Pre-renders all pages as static HTML for instant loading
4. Checks for errors

### What "Static" Means

In the build output, you'll see all routes marked with `○ (Static)`. This means Next.js pre-generated the HTML at build time — pages load instantly without waiting for server processing.

---

## 10. Troubleshooting Common Issues

### Issue: CSS `@import` Must Come First

**What happened:** We initially put Google Fonts `@import` after the Tailwind `@import` in `globals.css`. CSS requires all `@import` statements to be at the very top of the file — before any other rules.

**How we fixed it:** Moved the Google Fonts loading to `<link>` tags in `layout.tsx` instead of CSS `@import`. This is actually better for performance too, since the browser starts downloading fonts immediately.

### Issue: Node.js Not Found

**What happened:** After MSI installation, `node` wasn't recognized in the terminal because the PATH wasn't updated in the current session.

**How we fixed it:** Used the portable zip distribution and manually added the path:
```powershell
$env:Path = "$env:LOCALAPPDATA\nodejs\node-v22.14.0-win-x64;$env:Path"
```

### Issue: `@theme` Lint Warning

The editor may show *"Unknown at rule @theme"* in `globals.css`. This is a **false positive** — `@theme` is valid Tailwind CSS v4 syntax that the editor's CSS validator doesn't recognize yet. It has no effect on the build.

---

## Summary of Key Decisions

| Decision | Choice Made | Reasoning |
|----------|------------|-----------|
| Framework | Next.js (App Router) | File-based routing, SSR, great developer experience |
| Styling | Tailwind CSS on dark theme | Fast development, warm Peruvian palette |
| Fonts | Inter + Playfair Display | Modern readability + elegant headings |
| Menu data | Single TypeScript file | Type-safe, single source of truth |
| Uncertain prices | Asterisk markers | Transparent, honest communication to users |
| Bilingual | Spanish-primary dish names | Authentic to the restaurant's identity |
| Mobile | Mobile-first responsive | Most users will visit on phones |
