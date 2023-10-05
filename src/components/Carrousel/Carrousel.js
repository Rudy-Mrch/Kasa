import { useState } from 'react';


const Carrousel = ({ slides }) => {
  const slidesLength = slides.length;
  const [place, setPlace] = useState(0);

  const backSlide = () => {
    setPlace(place === 0 ? slidesLength - 1 : place - 1);
  };

  const nextSlide = () => {
    setPlace(place === slidesLength - 1 ? 0 : place + 1);
  };

  return (
    <div className='carrousel-container centered'>
      {slides.map((slide, index) => (
        <div key={index} className={index === place ? "carrouselAct" : "carrouselInac"}>
          {index === place && (
            <div className='carrousel-container__image-wrapper'>
              <img className='carrousel-container__slide' src={slide} alt="photos des appartements" />
              {slidesLength > 1 && (
                <img
                  className='carrousel-container__arrowBack'
                  src="/pictures/arrowBack.png"
                  alt='fleche precedent'
                  onClick={backSlide}
                />
              )}
              {slidesLength > 1 && (
                <img
                  className='carrousel-container__arrowNext'
                  src="/pictures/arrowNext.png"
                  alt="fleche suivante"
                  onClick={nextSlide}
                />
              )}
            </div>
          )}
          {index === place && slidesLength > 1 && (
            <span className='carrousel-container__number'>{place + 1}/{slidesLength}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default Carrousel;
