import { useEffect, useState } from "react";

// To Do: Add request caching
const useFetch = (url: string, options: any) => {

    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        const fetchData = async () => {
            setLoading(true);
            try {
                const result = await fetch(url, options);
                const response = await result.json();
                if (!signal.aborted) {
                    setResponse(response);
                }
            } catch(error: any) {
                if (!signal.aborted) {
                    setError(error);
                }
            } finally {
                if (!signal.aborted) {
                    setLoading(false);
                }
            }

        }
        fetchData();

        return () => {
            abortController.abort();
        }

    }, []);

    return [response, error, loading];
}

export default useFetch;