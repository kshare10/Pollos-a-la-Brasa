# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Mobile-first restaurant website for **Pollos a la Brasa**, a Peruvian-style roasted chicken restaurant. Built with Next.js, React, and Tailwind CSS.

You are given very little information about this restaurant but can use any information found online. The goal is to create a website that is both beautiful and functional. It should be easy to navigate and provide all the necessary information for customers. It should have modern functionality, clean aesthetic, and accurately reflect published information about the restaurant. Start simple and we can add more functionality later.

## User Access

Furthermore, the idea is that the creator of the website can hand over permission of the website to the restaurant owner. This means that the website should be easy to use and understand for someone who is not a developer. It should also be easy to update and maintain. Integrate Sanity CMS so the owner can edit the menu and homepage text through a web dashboard without touching code.

## Tech Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS (mobile-first approach)
- **Language**: TypeScript
- **Package Manager**: npm
- **CMS**: Sanity CMS

## Commands

- `npm run dev` — Start development server
- `npm run build` — Production build
- `npm run start` — Serve production build
- `npm run lint` — Run ESLint

## Architecture

- `src/app/` — Next.js App Router pages and layouts
- `src/components/` — Reusable React components
- `src/lib/` — Utility functions and shared logic
- `public/` — Static assets (images, fonts)

## Design Guidelines

- **Mobile-first**: All styles start from mobile breakpoints and scale up (`sm:`, `md:`, `lg:`)
- **Bilingual consideration**: Content will need English and Spanish support
- Restaurant branding: warm color palette (reds, oranges, golds) reflecting Peruvian cuisine
- Prioritize fast load times — optimize images, minimize client-side JS where possible
- Key pages: Home, Menu, About, Contact/Location, Order Online
