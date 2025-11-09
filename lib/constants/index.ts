/**
 * Application constants
 */

export const APP_NAME = 'Personal Website';
export const APP_DESCRIPTION = 'Personal website portfolio, blog, and resume';

// API routes
export const API_ROUTES = {
  HEALTH: '/api/health',
  // Add more API routes as needed
} as const;

// Cache TTLs (in seconds)
export const CACHE_TTL = {
  SHORT: 60, // 1 minute
  MEDIUM: 300, // 5 minutes
  LONG: 3600, // 1 hour
  DAY: 86400, // 24 hours
} as const;

// Pagination
export const DEFAULT_PAGE_SIZE = 10;
export const MAX_PAGE_SIZE = 100;
