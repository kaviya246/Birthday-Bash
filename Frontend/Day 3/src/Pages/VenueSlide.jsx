import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../assets/css/ImageCarousel.css';
import carousel1 from '../assets/images/v1.jpg';
import carousel2 from '../assets/images/v2.jpg';
import carousel3 from '../assets/images/v3.jpg';
import carousel4 from '../assets/images/v5.jpg';
import carousel5 from '../assets/images/v6.jpg';
import carousel6 from '../assets/images/v7.webp';


const VenueSlide = () => {
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
        <div>
          <img src={carousel4} alt="Image 2" />
        </div>
        <div>
          <img src={carousel5} alt="Image 2" />
        </div>
        <div>
          <img src={carousel6} alt="Image 2" />
        </div>
      </Slider>
    </div>
  );
};

export default VenueSlide;
