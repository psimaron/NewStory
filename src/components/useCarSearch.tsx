import { useState } from 'react';

interface CarInfo {
  year: number;
  model: string;
  make: string;
}

function useCarSearch(keys?: any) {
  const [cars, setCars] = useState<CarInfo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const defaultKeys = {
    'X-RapidAPI-Key': '59f0db3649msh4cb00124f5c8564p191a6cjsnc468d27648d7',
    'X-RapidAPI-Host': 'car-data.p.rapidapi.com',
  };
  let finalKeys: any;
  if (keys == null) {
    finalKeys = defaultKeys;
  } else {
    finalKeys = keys;
  }
  const search = (word: string) => {
    setLoading(true);

    const options = {
      method: 'GET',
      headers: finalKeys,
    };

    fetch(
      `https://car-data.p.rapidapi.com/cars?limit=10&page=0&make=${word}`,
      options,
    )
      .then((response: any) => response.json())
      .then((json) => setCars(json))
      .catch((error: any) => {
        setError(true);
        console.log(error);
      })
      .finally(() => setLoading(false));
  };

  return { cars, loading, error, search };
}

export default useCarSearch;
