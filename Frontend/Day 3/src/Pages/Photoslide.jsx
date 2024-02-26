import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../assets/css/ImageCarousel.css';
import carousel1 from '../assets/images/b1.webp';
import carousel2 from '../assets/images/b2.jpg';
import carousel3 from '../assets/images/b3.jpg';

const Photoslide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="image-carousel">
      <Slider {...settings}>
        <div>
          <img src={carousel1} alt="Image 1" />
        </div>
        <div>
          <img src={carousel3} alt="Image 3" />
        </div>
        <div>
          <img src={carousel2} alt="Image 2" />
        </div>
      </Slider>
    </div>
  );
};

export default Photoslide;
