import { useState } from 'react';

interface CarInfo {
  year: number;
  model: string;
  make: string;
}

function useCarSearch(header: HeadersInit) {
  const [cars, setCars] = useState<CarInfo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const search = (word: string) => {
    setLoading(true);

    const options: RequestInit = {
      method: 'GET',
      headers: header,
    };

    fetch(
      `https://car-data.p.rapidapi.com/cars?limit=10&page=0&make=${word}`,
      options,
    )
      .then((response: any) => response.json())
      .then((json) => setCars(json))
      .catch((error: Error) => {
        setError(true);
        console.log(error);
      })
      .finally(() => setLoading(false));
  };
  return { cars, loading, error, search };
}

export default useCarSearch;
