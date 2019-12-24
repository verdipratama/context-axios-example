import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// @ts-ignore
export const FetchContext = createContext();

const FetchContextProvider = props => {
  const [fetch, setFetch] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const initialFetch = async () => {
      axios
        .get('https://api.punkapi.com/v2/beers')
        .then(res => {
          setFetch(res.data.slice(1, 5));
          setLoad(true);
        })
        .catch(err => {
          setError(err.message);
          setLoad(true);
        });
    };
    initialFetch();
  }, []);

  return (
    <FetchContext.Provider value={{ fetch, load, error }}>
      {/* wajib diisi */}
      {props.children}
    </FetchContext.Provider>
  );
};

export default FetchContextProvider;
