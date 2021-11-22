import { useState } from 'react';

const images = [
  'https://picsum.photos/500?random=1',
  'https://picsum.photos/500?random=2',
  'https://picsum.photos/500?random=3',
  'https://picsum.photos/500?random=4',
  'https://picsum.photos/500?random=5',
];
const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imagesLength = images.length;

  const prevImage = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? imagesLength - 1 : currentImageIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex(
      currentImageIndex === imagesLength - 1 ? 0 : currentImageIndex + 1
    );
  };

  const dotImage = (i: number) => {
    setCurrentImageIndex(i);
  };

  console.log(currentImageIndex);

  return (
    <div className="carousel">
      <button className="carousel__arrow--left" onClick={prevImage}></button>
      <button className="carousel__arrow--right" onClick={nextImage}></button>
      {images.map((image, index) => {
        return (
          index === currentImageIndex && (
            <img
              className="carousel__image"
              src={image}
              alt="image"
              key={index}
            />
          )
        );
      })}
      <div className="carousel__dots">
        {images.map((_, index) => {
          return (
            <span
              className="carousel__dot"
              key={index}
              onClick={() => dotImage(index)}
              style={{
                backgroundColor:
                  index === currentImageIndex ? 'black' : 'white',
              }}
            ></span>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
