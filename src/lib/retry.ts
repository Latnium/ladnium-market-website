export interface RetryOptions {
  maxAttempts?: number;
  baseDelayMs?: number;
  useExponentialBackoff?: boolean;
}

const defaultOptions: Required<RetryOptions> = {
  maxAttempts: 3,
  baseDelayMs: 1000,
  useExponentialBackoff: true,
};

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Executes an async function with retries. On failure, waits with optional
 * exponential backoff (baseDelayMs, 2x, 4x...) before retrying.
 */
export async function withRetry<T>(
  fn: () => Promise<T>,
  options: RetryOptions = {}
): Promise<T> {
  const { maxAttempts, baseDelayMs, useExponentialBackoff } = {
    ...defaultOptions,
    ...options,
  };
  let lastError: unknown;
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await fn();
    } catch (e) {
      lastError = e;
      if (attempt === maxAttempts) break;
      const waitMs = useExponentialBackoff
        ? baseDelayMs * Math.pow(2, attempt - 1)
        : baseDelayMs;
      await delay(waitMs);
    }
  }
  throw lastError;
}

/**
 * Wraps fetch with retry. Use for API calls that may transiently fail.
 */
export async function fetchWithRetry(
  input: RequestInfo | URL,
  init?: RequestInit,
  options?: RetryOptions
): Promise<Response> {
  return withRetry(async () => {
    const res = await fetch(input, init);
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}: ${res.statusText}`);
    }
    return res;
  }, options);
}
