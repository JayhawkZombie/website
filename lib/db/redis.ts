import Redis from 'ioredis';

let redis: Redis | null = null;

/**
 * Get or create a Redis client
 * Returns null during build time or if Redis is not available
 */
export function getRedis(): Redis | null {
  // Skip Redis connection during build time
  if (
    process.env.NODE_ENV === 'production' &&
    process.env.NEXT_PHASE === 'phase-production-build'
  ) {
    return null;
  }

  // Skip if no Redis URL is provided
  const redisUrl = process.env.REDIS_URL;
  if (!redisUrl) {
    return null;
  }

  if (!redis) {
    try {
      redis = new Redis(redisUrl, {
        maxRetriesPerRequest: 3,
        retryStrategy: (times) => {
          const delay = Math.min(times * 50, 2000);
          return delay;
        },
        reconnectOnError: (err) => {
          const targetError = 'READONLY';
          if (err.message.includes(targetError)) {
            return true;
          }
          return false;
        },
        lazyConnect: true, // Don't connect immediately
      });

      redis.on('error', (err) => {
        console.error('Redis Client Error', err);
      });

      redis.on('connect', () => {
        console.log('Redis Client Connected');
      });
    } catch (error) {
      console.error('Failed to create Redis client:', error);
      return null;
    }
  }

  return redis;
}

/**
 * Get a value from Redis cache
 */
export async function getCache<T>(key: string): Promise<T | null> {
  try {
    const client = getRedis();
    if (!client) {
      return null;
    }
    const value = await client.get(key);
    return value ? (JSON.parse(value) as T) : null;
  } catch (error) {
    console.error('Redis get error:', error);
    return null;
  }
}

/**
 * Set a value in Redis cache with optional TTL
 */
export async function setCache(key: string, value: any, ttlSeconds?: number): Promise<void> {
  try {
    const client = getRedis();
    if (!client) {
      return;
    }
    const serialized = JSON.stringify(value);
    if (ttlSeconds) {
      await client.setex(key, ttlSeconds, serialized);
    } else {
      await client.set(key, serialized);
    }
  } catch (error) {
    console.error('Redis set error:', error);
  }
}

/**
 * Delete a key from Redis cache
 */
export async function deleteCache(key: string): Promise<void> {
  try {
    const client = getRedis();
    if (!client) {
      return;
    }
    await client.del(key);
  } catch (error) {
    console.error('Redis delete error:', error);
  }
}

/**
 * Delete multiple keys matching a pattern
 */
export async function deleteCachePattern(pattern: string): Promise<void> {
  try {
    const client = getRedis();
    if (!client) {
      return;
    }
    const keys = await client.keys(pattern);
    if (keys.length > 0) {
      await client.del(...keys);
    }
  } catch (error) {
    console.error('Redis delete pattern error:', error);
  }
}

/**
 * Close the Redis connection (useful for cleanup in tests)
 */
export async function closeRedis(): Promise<void> {
  if (redis) {
    await redis.quit();
    redis = null;
  }
}
