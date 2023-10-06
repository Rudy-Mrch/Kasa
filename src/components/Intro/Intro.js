import React from 'react';
import { useLocation } from 'react-router-dom';
import './Intro.css';

const Intro = () => {
  const location = useLocation();


  const renderContent = () => {
    if (location.pathname === '/') {
      return (
        <div className='intro'>
          <img src="/pictures/IMG.png" alt="image d'un paysage" />
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
      );
    } else if (location.pathname === '/about') {
      return (
        <div className='intro'>
          <img src="/pictures/IMG2.png" alt="autre image" />
        </div>
      );
    } else {
      return null; 
    }
  };

  return renderContent();
};

export default Intro;

