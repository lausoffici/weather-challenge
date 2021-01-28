import { useState, useEffect, useCallback } from 'react';

type UseFetchResponse<T> = {
  status: Status;
  data: T | undefined;
  get: GetRequest
};

type GetRequest = () => Promise<void>;

export type Status = 'idle' | 'resolved' | 'error' | 'pending';

export const useFetch = <T>(url: string, initialFetch = true): UseFetchResponse<T> => {
  const [status, setStatus] = useState<Status>('idle');
  const [data, setData] = useState<T | undefined>(undefined);

  const fetchData = useCallback(async () => {
    setStatus('pending');
    console.log(`fetching: ${url}`);
    try {
      // fetch url
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }
      // get data
      setStatus('resolved');
      const responseData: T = await response.json();
      setData(responseData);
    } catch (err) {
      // prints error
      console.error(err);
      setStatus('error');
    }
  }, [url]);

  useEffect(() => {
    if (!initialFetch) return;

    fetchData();
  }, [initialFetch, url, fetchData]);

  const get: GetRequest = useCallback(() => fetchData(), [fetchData]);

  return { status, data, get };
};