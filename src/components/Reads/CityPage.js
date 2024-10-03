import React from 'react';
import { useParams } from 'react-router-dom';

const CityPage = () => {
  const { cityName } = useParams();

  return (
    <div>
      <h1>Silent Reading Community in {cityName}</h1>
      <p>Details about the silent reading community in {cityName}.</p>
    </div>
  );
};

export default CityPage;
