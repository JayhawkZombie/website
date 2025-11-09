import { NextResponse } from 'next/server';
import { query } from '@/lib/db/postgres';
import { getCache, setCache } from '@/lib/db/redis';
import { CACHE_TTL } from '@/lib/constants';
import type { ApiResponse } from '@/types';

/**
 * Example API route demonstrating database and Redis usage
 * This is a placeholder that can be expanded with actual functionality
 */
export async function GET() {
  try {
    // Example: Check cache first
    const cacheKey = 'example:data';
    const cached = await getCache<any>(cacheKey);

    if (cached) {
      return NextResponse.json<ApiResponse>({
        success: true,
        data: cached,
        message: 'Data retrieved from cache',
      });
    }

    // Example: Query database (placeholder query)
    // Replace with your actual queries
    const result = await query('SELECT NOW() as current_time');

    const data = {
      timestamp: result[0]?.current_time,
      message: 'This is example data from the database',
    };

    // Cache the result
    await setCache(cacheKey, data, CACHE_TTL.MEDIUM);

    return NextResponse.json<ApiResponse>({
      success: true,
      data,
      message: 'Data retrieved from database',
    });
  } catch (error) {
    return NextResponse.json<ApiResponse>(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
