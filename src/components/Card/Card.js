import React from 'react';
import data from '../../data.json';
import './Card.css';

const Card = () => {
  return (
    <main className='cards'>
      {data.map((item) => (
        <div className='card' key={item.id}>
          <img src={item.cover} alt={`Cover ${item.id}`} />
          <p>{item.title}</p>
        </div>
      ))}
    </main>
  );
};

export default Card;

