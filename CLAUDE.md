# CLAUDE.md - My Project

Personal portfolio website of TraaTech built with Next.js 14, TypeScript, Tailwind CSS. This project is a work in progress and is intended to be a comprehensive portfolio of my work and skills.

## Tech Stack

- Next.js
- TypeScript
- Aceternity UI
- Framer Motion
- Tailwind CSS

## Structure

Project is built with the following structure:

```
src/
├── app/
│   ├── (site)/            # Client-side pages (dynamic rendering)
│   │   ├── page.tsx        # Homepage
│   │   ├── about/
│   │   ├── projects/
│   │   ├── experience/
│   │   └── contact/
│   ├── (auth)/            # Authentication pages (NextAuth.js)
│   │   ├── sign-in/
│   │   └── sign-up/
│   ├── api/               # API routes
│   │   ├── auth/           # NextAuth.js API
│   │   └── projects/
│   ├── layout.tsx         # Root layout (server component)
│   ├── globals.css
│   └── ...
├── components/
│   ├── ui/                # Reusable UI components (shadcn/ui + custom)
│   ├── AuthProvider.tsx   # NextAuth.js provider
│   ├── Navbar.tsx         # Navigation
│   ├── Footer.tsx         # Footer
│   └── ...
├── lib/                   # Utility functions
├── types/                 # TypeScript types
├── public/                # Static assets
└── ...
```
