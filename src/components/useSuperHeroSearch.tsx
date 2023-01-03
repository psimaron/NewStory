import { useEffect, useState } from 'react';
// import axios from 'axios';

function useSuperHeroSearch(term: string) {
  const [superHero, setSuperHero] = useState([{ name: '', id: '' }]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    /* const options = {
      method: 'GET',
      url: 'https://superhero-search.p.rapidapi.com/api/',
      params: { hero: term },
      headers: {
        'X-RapidAPI-Key': '59f0db3649msh4cb00124f5c8564p191a6cjsnc468d27648d7',
        'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com',
      },
    }; */
    const timer = setTimeout(() => {
      if (term.length >= 3) {
        setLoading(true);
        fetch('https://superhero-search.p.rapidapi.com/api/heroes', {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key':
              '59f0db3649msh4cb00124f5c8564p191a6cjsnc468d27648d7',
            'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com',
          },
        })
          .then((response: any) => response.json())
          .then((json) => setSuperHero(json))
          .catch((error: any) => {
            setError(true);
            console.log(error);
          })
          .finally(() => setLoading(false));
      }
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [term]);
  return { superHero, loading, error };
}

export default useSuperHeroSearch;
