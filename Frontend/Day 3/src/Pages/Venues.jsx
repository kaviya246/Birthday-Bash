import { FaShoppingCart, FaWhatsapp, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { useState } from 'react';
import AppNavbar from '../Components/AppNavbar';
import VenueSlide from './VenueSlide';


const ProductCard = () => {
  const [products] = useState([
    { id: 1, name: 'Beanch Side', amount: 'Starting from 8000', imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708708751/vv8_chzl6s.jpg' },
    { id: 2, name: 'Indoor Venue', amount: 'Starting from 6000', imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708708750/vv5_aqptql.jpg' },
    { id: 3, name: 'OPen Venue', amount: 'Starting from 5000', imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708708750/vv7_c7ejwl.jpg' },
    { id: 4, name: 'Theme Venue', amount: 'Strating from 7000', imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708708750/vv6_au6dxh.jpg' },
    { id: 5, name: 'Aesthetic venue', amount: 'Startin from 8000', imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708708750/vv1_uig14q.jpg' },
    { id: 6, name: 'Lighting Venue', amount: 'Starting from 9000', imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708708750/vv3_pjmenz.jpg' },
    { id: 7, name: 'Open venue + Nature', amount: 'Starting from 10000', imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708708750/vv4_qd8b2s.jpg' },
    { id: 8, name: 'Nature Theme', amount: 'Starting from 6000', imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708708749/vv2_mf9whc.jpg' },
    { id: 9, name: 'Normal Venue', amount: 'Starting from 5000', imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708708751/vv8_chzl6s.jpg' },
    { id: 10, name: 'Outdoor Venue', amount: 'Starting from 4000', imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708708750/vv1_uig14q.jpg' },
    
    
  ]);

  const handleAddToCart = (productId) => {
    console.log(`Product ${productId} added to cart`);
  };

  const handleShareWhatsApp = () => {
    window.open(`https://wa.me/?text=Check out this product: ${window.location.href}`);
  };

  const handleShareLinkedIn = () => {
    window.open(`https://www.linkedin.com/shareArticle?url=${window.location.href}`);
  };

  const handleShareFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`);
  };

  return (
    <div>
      <AppNavbar />
      <VenueSlide/>
      <div>
      <h1 style={{textAlign:"center",fontFamily:"Bahnschrift Condensed",fontSize:"larger",marginTop:"40%",color:"#543f3f"}}>Venues are the frames that capture the moments of a birthday, turning them into timeless memories.</h1>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-image">
              <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className="product-details">
              <h2>{product.name}</h2>
              <p>Amount: {product.amount}</p>
            </div>
            <div className="action-icons">
              <FaShoppingCart onClick={() => handleAddToCart(product.id)} className="icon" />
              <FaWhatsapp onClick={() => handleShareWhatsApp(product)} className="icon" />
              <FaLinkedin onClick={() => handleShareLinkedIn(product)} className="icon" />
              <FaFacebook onClick={() => handleShareFacebook(product)} className="icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
