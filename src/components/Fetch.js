import React, { useContext } from 'react';
import FetchDetails from './FetchDetails';
import { FetchContext } from '../contexts/FetchContext';

const Fetch = () => {
  const { fetch } = useContext(FetchContext);
  // console.log(fetch);
  return (
    <div className="fetch-all">
      <ul>
        {fetch.map(data => {
          return (
            // @ts-ignore
            <FetchDetails data={data} key={data.id} />
          );
        })}
      </ul>
    </div>
  );
};

export default Fetch;
