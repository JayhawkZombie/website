# Personal Website

A modern personal website built with Next.js, React, TypeScript, and SASS. Features a clean, organized codebase with reusable components, database integration (PostgreSQL), Redis caching, and comprehensive testing.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: SASS/SCSS
- **Database**: PostgreSQL
- **Cache**: Redis
- **Testing**: Jest + React Testing Library
- **Hosting**: Vercel (production)

## Getting Started

### Prerequisites

- Node.js 20+
- Docker and Docker Compose
- npm or yarn

### Local Development

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create `.env.local` file with the following variables:

   ```env
   DATABASE_URL=postgresql://postgres:postgres@localhost:5432/personal_website
   REDIS_URL=redis://localhost:6379
   NODE_ENV=development
   NEXT_PUBLIC_APP_URL=http://localhost:3001
   ```

3. Start all services with Docker Compose:

   ```bash
   docker-compose up
   ```

   This will start:
   - Next.js dev server on port 3001
   - PostgreSQL on port 5432
   - Redis on port 6379

4. Open [http://localhost:3001](http://localhost:3001) in your browser

The Docker Compose setup includes:

- Next.js development server (port 3001)
- PostgreSQL database (port 5432)
- Redis cache (port 6379)

### Manual Setup (without Docker)

1. Install dependencies:
   ```bash
   npm install
   ```
2. Set up PostgreSQL and Redis locally
3. Configure `.env.local` with your database URLs
4. Run the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
website/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── layout/           # Layout components
│   ├── features/         # Feature-specific components
│   └── shared/           # Shared utility components
├── lib/                   # Utilities and helpers
│   ├── db/               # Database utilities
│   ├── utils/            # General utilities
│   └── constants/        # Constants and config
├── types/                 # TypeScript type definitions
├── hooks/                 # Custom React hooks
├── styles/                # Global styles and SASS utilities
├── __tests__/             # Test files
└── public/                # Static assets
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage

## Testing

Tests are located in the `__tests__` directory and use Jest and React Testing Library. Run tests with:

```bash
npm run test
```

## Deployment

### Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy!

For database and Redis in production, consider:

- **Database**: Vercel Postgres, Supabase, or Neon
- **Redis**: Upstash Redis (serverless, free tier available)

## Environment Variables

See `.env.example` for required environment variables:

- `DATABASE_URL` - PostgreSQL connection string
- `REDIS_URL` - Redis connection string
- `NEXT_PUBLIC_APP_URL` - Your app URL (for production)

## License

MIT
