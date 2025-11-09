import { GET } from '@/app/api/health/route';
import { NextResponse } from 'next/server';

// Mock the database and Redis modules
jest.mock('@/lib/db/postgres', () => ({
  getPool: jest.fn(() => ({
    query: jest.fn().mockResolvedValue({ rows: [] }),
  })),
}));

jest.mock('@/lib/db/redis', () => ({
  getRedis: jest.fn(() => ({
    ping: jest.fn().mockResolvedValue('PONG'),
  })),
}));

describe('/api/health', () => {
  it('returns healthy status when services are connected', async () => {
    const response = await GET();
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.status).toBe('healthy');
    expect(data.services.database).toBe('connected');
    expect(data.services.redis).toBe('connected');
  });
});
