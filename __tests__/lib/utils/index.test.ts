import { formatDate, formatRelativeTime, truncate, slugify } from '@/lib/utils';

describe('formatDate', () => {
  it('formats a date correctly', () => {
    const date = new Date('2024-01-15');
    const formatted = formatDate(date);
    expect(formatted).toContain('January');
    expect(formatted).toContain('15');
    expect(formatted).toContain('2024');
  });

  it('handles string dates', () => {
    const formatted = formatDate('2024-01-15');
    expect(formatted).toContain('January');
  });
});

describe('formatRelativeTime', () => {
  it('returns "just now" for recent dates', () => {
    const date = new Date(Date.now() - 30 * 1000);
    expect(formatRelativeTime(date)).toBe('just now');
  });

  it('formats minutes ago', () => {
    const date = new Date(Date.now() - 5 * 60 * 1000);
    expect(formatRelativeTime(date)).toBe('5 minutes ago');
  });

  it('formats hours ago', () => {
    const date = new Date(Date.now() - 2 * 60 * 60 * 1000);
    expect(formatRelativeTime(date)).toBe('2 hours ago');
  });
});

describe('truncate', () => {
  it('truncates long strings', () => {
    const long = 'a'.repeat(100);
    const truncated = truncate(long, 50);
    expect(truncated.length).toBe(50);
    expect(truncated).toEndWith('...');
  });

  it('does not truncate short strings', () => {
    expect(truncate('short', 50)).toBe('short');
  });
});

describe('slugify', () => {
  it('creates a slug from text', () => {
    expect(slugify('Hello World!')).toBe('hello-world');
    expect(slugify('Test 123')).toBe('test-123');
  });

  it('handles special characters', () => {
    expect(slugify('Hello, World!')).toBe('hello-world');
  });
});
