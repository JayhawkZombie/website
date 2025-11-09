import { NextResponse } from 'next/server';
import { getPool } from '@/lib/db/postgres';
import { getRedis } from '@/lib/db/redis';

export async function GET() {
  try {
    // Check database connection
    const pool = getPool();
    await pool.query('SELECT 1');

    // Check Redis connection
    const redis = getRedis();
    await redis.ping();

    return NextResponse.json({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      services: {
        database: 'connected',
        redis: 'connected',
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: 'unhealthy',
        timestamp: new Date().toISOString(),
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
