# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start the Next.js development server at http://localhost:3000
- `npm run build` - Build the application for production
- `npm start` - Start production server

### Code Quality
- `npm run lint` - Run ESLint to check for code quality issues

## Architecture

This is a Next.js 16.1.6 application using the App Router pattern with React 19.2.3 and TypeScript 5.

### Key Technologies
- **Framework**: Next.js with App Router
- **Language**: TypeScript with strict mode enabled
- **Styling**: CSS modules and Tailwind CSS (configured but not actively used in current code)
- **Fonts**: Custom Google Fonts (DM Sans for UI, JetBrains Mono for code)

### Project Structure
- `/src/app/` - App Router pages and components
  - `page.tsx` - Main installation guide component (client-side interactive React component)
  - `layout.tsx` - Root layout with font configuration
  - `globals.css` - Global styles
- Path alias configured: `@/*` maps to `./src/*`

### Main Application
The app is a single-page installation guide for an AI 101 workshop. The main component (`src/app/page.tsx`) is a client-side interactive guide that:
- Provides platform-specific installation instructions (macOS/Windows)
- Tracks user progress through installation steps
- Organizes content by workshop days
- Uses local state management for step completion tracking

### TypeScript Configuration
- Target: ES2017
- Strict mode enabled
- JSX: react-jsx
- Module resolution: bundler
- Next.js plugin configured