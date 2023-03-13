import Carousel from 'react-bootstrap/Carousel';
import HeroImage from '../image/slider.png';

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 h-90vh"
          src={HeroImage}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='slider-title'>First slide label</h3>
          <p className='slider-text'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={HeroImage}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='slider-title'>Second slide label</h3>
          <p className='slider-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={HeroImage}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='slider-title'>Third slide label</h3>
          <p className='slider-text'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
