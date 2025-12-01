import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {

        setError(null);
        setLoading(true);

        try {
            // Delay simulation
            await new Promise(res => setTimeout(res, 2000));

            // Error simulation
            if (Math.random() < 0.5) {
                throw new Error("Simulated fetch error (Math.random() < 0.3 in the hook 😎)");
            }

            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`HTTP Error! Status: ${response.status}`);
            }

            const json = await response.json();
            setData(json);

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    const tryAgain = () => {
        fetchData()
    }
    useEffect(() => {
        fetchData()
    }, [url]);

    return { data, loading, error, tryAgain };
};