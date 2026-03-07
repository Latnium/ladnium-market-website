'use client';

import { useCallback, useState } from 'react';
import { fetchWithRetry, type RetryOptions } from '@/lib/retry';

interface UseFetchWithRetryState<T> {
  data: T | null;
  error: Error | null;
  isLoading: boolean;
}

export function useFetchWithRetry<T = unknown>(
  url: string | null,
  options?: RetryOptions & { parser?: (res: Response) => Promise<T> }
) {
  const [state, setState] = useState<UseFetchWithRetryState<T>>({
    data: null,
    error: null,
    isLoading: false,
  });

  const execute = useCallback(async () => {
    if (!url) return;
    setState((s) => ({ ...s, error: null, isLoading: true }));
    try {
      const res = await fetchWithRetry(url, undefined, {
        maxAttempts: options?.maxAttempts,
        baseDelayMs: options?.baseDelayMs,
        useExponentialBackoff: options?.useExponentialBackoff,
      });
      const data = options?.parser
        ? await options.parser(res)
        : ((await res.json()) as T);
      setState({ data, error: null, isLoading: false });
      return data;
    } catch (e) {
      const error = e instanceof Error ? e : new Error(String(e));
      setState((s) => ({ ...s, data: null, error, isLoading: false }));
      throw error;
    }
  }, [url, options]);

  const retry = useCallback(() => {
    return execute();
  }, [execute]);

  return { ...state, retry, execute };
}
