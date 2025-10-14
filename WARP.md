# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a **Next.js 15** TypeScript project for "Worksper", a web development agency website featuring internationalization (i18n) support. The project uses the **App Router** with dynamic routing for localization and is built with modern React patterns.

## Architecture

### Internationalization System
The project implements a custom i18n system with the following key components:

- **Dynamic Routes**: Uses `[lang]` dynamic segments (`src/app/[lang]/`) to handle multiple locales
- **Middleware**: `src/middleware.ts` automatically redirects users to their preferred locale based on browser settings
- **Dictionary System**: Located in `src/dictionary/` with separate language files (`en.ts`, `pt.ts`)
- **Language Context**: `src/contexts/LanguageContext.tsx` provides translation functions throughout the app
- **Custom Hook**: `src/hooks/use-language.ts` provides `t()` function for translations

### Component Structure
- **Page Components**: Located in `src/components/` (hero, about, services, contact, customers, etc.)
- **UI Components**: Shadcn/ui components in `src/components/ui/`
- **Layout**: Single layout in `src/app/[lang]/layout.tsx` handles font loading, toast notifications, and language provider

### Key Dependencies
- **UI Framework**: Shadcn/ui components with Radix UI primitives
- **Styling**: Tailwind CSS v4 with PostCSS
- **Forms**: React Hook Form with Zod validation
- **Fonts**: Geist Sans & Geist Mono from next/font/google
- **Icons**: Lucide React
- **Notifications**: Sonner toast library
- **Themes**: next-themes for dark/light mode support

## Development Commands

### Core Commands
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

### Testing
Currently no testing framework is configured. To add testing:
```bash
# For Jest + React Testing Library setup
npm install --save-dev jest @testing-library/react @testing-library/jest-dom jest-environment-jsdom
```

## Development Workflow

### Adding New Languages
1. Create new dictionary file: `src/dictionary/langs/[locale].ts`
2. Add locale to `dictionaries` object in `src/dictionary/index.ts`
3. Follow the structure of existing dictionaries (e.g., `en.ts`)

### Adding New Components
- Place page-level components in in unrouted components directory in the same directory as the corresponding page.tsx
- Use the `useLanguage()` hook for translations: `const { t } = useLanguage()`
- Follow existing patterns for responsive design and Tailwind classes

### Working with Forms
The project uses React Hook Form with Zod validation. See contact form implementation in `src/components/contact.tsx` for patterns.

### Styling Guidelines
- Uses Tailwind CSS v4 with CSS variables for theming
- Follows Shadcn/ui patterns for component styling
- Supports dark/light themes via next-themes
- Uses `cn()` utility (from `src/lib/utils.ts`) for conditional classes

### File Structure Patterns
```
src/
├── app/[lang]/          # Next.js app router with i18n
├── components/          # Page-level React components
├── components/ui/       # Reusable UI components (Shadcn/ui)
├── contexts/           # React contexts
├── dictionary/         # i18n translations
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
└── middleware.ts      # Next.js middleware for i18n routing
```

## Important Notes

- **Locale Handling**: All routes automatically include locale prefix (e.g., `/en`, `/pt`)
- **Server Components**: Most components are server components; use `"use client"` directive only when necessary
- **Path Aliases**: Uses `@/*` alias pointing to `src/*` directory
- **CSS Variables**: Tailwind configured to use CSS variables for consistent theming
- **TypeScript**: Strict mode enabled with comprehensive type checking

## Language Context Usage

Always use the `useLanguage()` hook for accessing translations:

```typescript
const { t, lang } = useLanguage();
return <h1>{t('heroTitle')}</h1>
```

The translation keys are strongly typed based on the default English dictionary structure.