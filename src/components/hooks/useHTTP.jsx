import { useState } from 'react';
import { useEffect } from 'react';

export const useHTTP = (fn, params) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const ref = await fn(params);
        setData(ref);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [fn, params]);

  return { data, loading };
};
