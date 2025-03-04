import { useState, useEffect, useRef } from "react";

export default function useJsonFetch(url, opts) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch(url + opts);
        if (!response.ok) throw new Error(response.status + ' ' + response.statusText);
        const data = await response.json();
        setData(data);
        setError(null);
      } catch (e) {setError(e.message)
      } finally { setLoading(false); }
      };

    fetchData();
    }, []
  );

  return [data, loading, error];
}
