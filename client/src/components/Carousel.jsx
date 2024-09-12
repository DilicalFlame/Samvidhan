import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../assets/bg2.webp';
import ExampleCarouselImage2 from '../assets/bg3.webp';
import ExampleCarouselImage3 from '../assets/bg4.webp';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100 custom-carousel-image"
          src={ExampleCarouselImage}
          alt="First slide"
          style={{ height: '400px', objectFit: 'cover' }} // Adjust the height value
        />
        <Carousel.Caption className="custom-caption">
          <h3>Directive Principles</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 custom-carousel-image"
          src={ExampleCarouselImage2}
          alt="Second slide"
          style={{ height: '400px', objectFit: 'cover' }}
        />
        <Carousel.Caption className="custom-caption">
          <h3>The Preamble</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, consectetur!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 custom-carousel-image"
          src={ExampleCarouselImage3}
          alt="Third slide"
          style={{ height: '400px', objectFit: 'cover' }}
        />
        <Carousel.Caption className="custom-caption">
          <h3>Indian Constitution</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, libero?</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
