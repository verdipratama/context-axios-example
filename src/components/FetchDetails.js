import React from 'react';

const FetchDetails = ({ data }) => {
  return (
    <li>
      <div className="container">
        <div className="name">{data.name}</div>
        <div className="description">{data.description}</div>
      </div>
    </li>
  );
};

export default FetchDetails;
