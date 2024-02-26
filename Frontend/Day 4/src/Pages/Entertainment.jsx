import { FaShoppingCart, FaWhatsapp, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { useState } from 'react';
import AppNavbar from '../Components/AppNavbar';
import Enterslide from './Enterslide';


const ProductCard = () => {
  const [products] = useState([
    { id: 1, name: 'Game', amount: 'per person 100', imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708719060/games_rp5ucm.jpg' },
    { id: 2, name: 'Crafts', amount: 'per person 150', imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708719063/carft1_iqjins.jpg' },
    { id: 3, name: 'Dance', amount: 'hall amount', imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708719069/dance_qvrmwy.jpg' },
    { id: 4, name: 'Party', amount: 'per person 200', imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708584428/slide7_nrog62.jpg' },
    { id: 5, name: 'Crafts', amount: 'per person 100', imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708719065/craft_iekepo.jpg' },
    { id: 6, name: 'Game', amount: 'Staring form 500', imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708719060/games_rp5ucm.jpg' },
    { id: 7, name: 'Dance', amount: 'hall amount', imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708719069/dance_qvrmwy.jpg' },
    { id: 8, name: 'Crafts', amount: 'Starting from 100', imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708719065/craft_iekepo.jpg' },
    { id: 9, name: 'Crafts', amount: 'Starting from 100', imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708719063/carft1_iqjins.jpg' },
    { id: 10, name: 'Game', amount: 'Startign from 100', imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708719060/games_rp5ucm.jpg' },
    
    
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
      <Enterslide/>
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
