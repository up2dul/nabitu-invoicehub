# Technical Challenge: InvoiceHub - Invoice Management System

![Screenshot](https://github.com/user-attachments/assets/62a0562d-304e-4b6e-9e23-4bf435afea5d)

> ℹ️ Deployed on [Render](https://render.com) through [GitHub Actions](https://github.com/features/actions) with [Docker](https://docker.com).

## Table of Contents

- [Technical Challenge: InvoiceHub - Invoice Management System](#technical-challenge-invoicehub---invoice-management-system)
  - [Table of Contents](#table-of-contents)
  - [Technologies](#technologies)
  - [Getting Started](#getting-started)
    - [1. Prerequisites](#1-prerequisites)
    - [2. Clone the Repository](#2-clone-the-repository)
    - [3. Instalation](#3-instalation)
    - [4. Environment Setup](#4-environment-setup)
    - [5. Run the database migration](#5-run-the-database-migration)
  - [Usage](#usage)
    - [Start the development server](#start-the-development-server)
  - [Project Structure](#project-structure)

## Technologies
Some of the technologies used in this project:
- ⚛️ [React](https://react.dev) — The main frontend library
- ▲ [Next.js](https://nextjs.org) — React framework
- 💎 [Material UI](https://mui.com) — UI component library
- 🐘 [PostgreSQL](https://postgresql.org) — An open-source relational database
- 💻 [Drizzle ORM](https://drizzle-orm.js.org) — ORM for helping with database interactions
- 🔷 [TypeScript](https://typescriptlang.org) — A typed superset of JavaScript
- 🐋 [Docker](https://docker.com) — Containerization

Also some additional development tools:
- 📝 [Biome](https://biomejs.dev) — Code formatter and linter
- 🔤 [Commitlint](https://commitlint.js.org) — Make sure the commit messages are well formatted
- 🐶 [Husky](https://typicode.github.io/husky) — A git hooks
- 📋 [Lint Staged](https://github.com/lint-staged/lint-staged) — Running some scripts before committing

## Getting Started

### 1. Prerequisites

- [Node.js](https://nodejs.org) `>=18.x`
- [PostgreSQL](https://postgresql.org) `>=17.x`
- [pnpm](https://pnpm.io) `>=9.x` (recommended as the package manager)

### 2. Clone the Repository

```bash
git clone https://github.com/up2dul/nabitu-invoicehub.git

# or if using ssh
git clone git@github.com:up2dul/nabitu-invoicehub.git
```

### 3. Instalation

Go to the project directory and install dependencies
```bash
# Go to the project directory
cd nabitu-invoicehub

# Install dependencies
pnpm install
```

### 4. Environment Setup

Copy the `.env.example` file to `.env` and fill in the `DB_URL` values with your own.
```bash
cp .env.example .env
```

### 5. Run the database migration

```bash
pnpm db:migrate
```

## Usage

### Start the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure
```
.
└── src/
    ├── app/
    │   ├── invoices/
    │   │   ├── add/
    │   │   │   └── page.tsx
    │   │   ├── list/
    │   │   │   └── page.tsx
    │   │   ├── update/[slug]/
    │   │   │   └── page.tsx
    │   │   └── layout.tsx
    │   ├── layout.tsx
    │   ├── not-found.tsx
    │   └── ...
    ├── components/
    │   ├── layout/
    │   ├── section/
    │   └── ui/
    ├── drizzle/
    │   ├── db.ts
    │   ├── migrate.ts
    │   ├── relations.ts
    │   └── schema.ts
    ├── hooks/
    │   └── use-debounce.ts
    ├── lib/
    │   ├── constants.ts
    │   ├── schemas.ts
    │   └── utils.ts
    ├── server/
    │   ├── actions.ts
    │   └── theme.ts
    ├── middleware.ts
    └── theme.ts
```
