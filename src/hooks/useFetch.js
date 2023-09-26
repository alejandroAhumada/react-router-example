import { useCallback, useEffect, useState } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    console.log("useFetch");

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(url);

            if (!response.ok) throw new Error("Error al consumir la api");

            const data = await response.json();
            setData(data);
        } catch (error) {
            setError(error.message);
            setData([]);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        console.log("useEffect");
        fetchData();
    }, [fetchData]);

    return { data, loading, error };
};
