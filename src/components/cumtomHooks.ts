import { useEffect, useState } from 'react';

// api의 데이터를 비동기적으로 가져오는 커스텀훅
export const useFetch = (url: string, options: {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | unknown>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url, options]);
  return { data, loading, error };
};
