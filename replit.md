# Hyperquantum Website

## Overview

This is a full-stack web application for Hyperquantum, a Colombian company specializing in intelligent automation solutions for SMEs. The application is built with React on the frontend, Express.js on the backend, and uses PostgreSQL for data storage. The website serves as a marketing platform and contact collection system for the company's AI automation services.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state
- **Animations**: Framer Motion for smooth animations
- **3D Graphics**: Three.js for 3D logo animations
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL
- **Email Service**: Resend for transactional emails
- **Session Management**: Session-based authentication ready
- **File Structure**: Monorepo with shared schema between client and server

### Database Design
- **Primary Database**: PostgreSQL (configured for Neon/serverless)
- **ORM**: Drizzle ORM with schema-first approach
- **Tables**:
  - `users`: Basic user authentication (username, password)
  - `contact_submissions`: Contact form submissions with full contact details
- **Migration Strategy**: Drizzle Kit for database migrations

## Key Components

### Contact Management System
- **Contact Form**: Multi-step form with validation for service inquiries
- **Email Integration**: Automatic email notifications via Resend service
- **Data Persistence**: All contact submissions stored in PostgreSQL
- **Validation**: Zod schema validation on both client and server

### UI/UX Features
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **3D Animations**: Custom Three.js logo animations and holographic effects
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support
- **SEO Optimization**: Meta tags, structured data, and React Helmet
- **Performance**: Lazy loading, code splitting, and optimized assets

### Marketing Features
- **Landing Page**: Hero section with animated 3D elements
- **Services Showcase**: Detailed service descriptions with animations
- **Success Stories**: Case studies with client testimonials
- **Legal Compliance**: Privacy policy, cookie policy, and terms of service modals
- **WhatsApp Integration**: Floating WhatsApp button for direct contact

## Data Flow

1. **User Interaction**: Users navigate the landing page and fill out contact forms
2. **Form Submission**: Client-side validation with Zod, then API call to backend
3. **Server Processing**: Express.js validates data, stores in PostgreSQL via Drizzle ORM
4. **Email Notification**: Resend service sends notification emails to company
5. **Response**: Success/error feedback to user with toast notifications

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL driver for serverless environments
- **@sendgrid/mail**: Email service (note: using Resend in code, not SendGrid)
- **@radix-ui/react-***: Headless UI components for accessibility
- **@tanstack/react-query**: Server state management
- **three**: 3D graphics library
- **framer-motion**: Animation library
- **wouter**: Lightweight routing

### Development Dependencies
- **drizzle-kit**: Database migrations and introspection
- **tsx**: TypeScript execution for development
- **esbuild**: Fast bundling for production builds
- **vite**: Development server and build tool

## Deployment Strategy

### Environment Setup
- **Development**: Vite dev server with HMR and TypeScript
- **Production**: Cloud Run deployment with automatic scaling
- **Database**: PostgreSQL (configured for Neon serverless)
- **Email**: Resend service for transactional emails

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild bundles Express server to `dist/index.js`
3. **Database**: Drizzle migrations applied via `npm run db:push`
4. **Deployment**: Cloud Run serves both static files and API routes

### Configuration
- **Port**: 5000 (configured in .replit)
- **Environment Variables**: DATABASE_URL, RESEND_API_KEY required
- **Static Files**: Served from `dist/public` in production
- **API Routes**: All routes under `/api` prefix

## Changelog

```
Changelog:
- June 20, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```