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
  <div className='carrousel-container'>
    {slides.map((slide, index) => (
      <div key={index} className="carrouselPix">
        {index === place && (
          <div>
            <img
              className='carrousel-container__slide' 
              src={slide}
              alt="photos des appartements"
            />
            <img
              className='carrousel-container__arrowBack'
              src="/pictures/arrowBack.png"
              alt='fleche precedent'
              onClick={backSlide}
            />
            <img
              className='carrousel-container__arrowNext'
              src="/pictures/arrowNext.png"
              alt="fleche suivante"
              onClick={nextSlide}
            />
          </div>
        )}
        {index === place && (
          <span className='carrousel-container__number'>{place + 1}/{slidesLength}</span>
        )}
      </div>
    ))}
  </div>
);
        }
export default Carrousel
