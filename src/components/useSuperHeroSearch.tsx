import { useEffect, useState } from 'react';
import axios from 'axios';

function useSuperHeroSearch(term: any) {
  const [superHero, setSuperHero] = useState(['']);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://superhero-search.p.rapidapi.com/api/',
      params: { hero: term },
      headers: {
        'X-RapidAPI-Key': '0bc116f760mshc0b7d82293c0c2ep1e3397jsn632a8f5d22b2',
        'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com',
      },
    };
    if (term.length >= 3) {
      axios
        .request(options)
        .then((response: any) => {
          setSuperHero(response.data.name);
        })
        .catch((error: any) => {
          setError(error);
        });
      setLoading(false);
    }
  }, [term]);
  return { superHero, loading, error };
}

export default useSuperHeroSearch;
