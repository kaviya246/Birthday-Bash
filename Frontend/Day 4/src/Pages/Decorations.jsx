import { FaShoppingCart, FaWhatsapp, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { useState } from 'react';
import AppNavbar from '../Components/AppNavbar';
import Enterslide from './Enterslide';


const ProductCard = () => {
  const [products] = useState([
    { id: 1, name: '', amount: '', imageUrl: '' },
    { id: 2, name: '', amount: '', imageUrl: '' },
    { id: 3, name: '', amount: '', imageUrl: '' },
    { id: 4, name: '', amount: '', imageUrl: '' },
    { id: 5, name: '', amount: '', imageUrl: '' },
    { id: 6, name: '', amount: '', imageUrl: '' },
    { id: 7, name: '', amount: '', imageUrl: '' },
    { id: 8, name: '', amount: '', imageUrl: '' },
    { id: 9, name: '', amount: '', imageUrl: '' },
    { id: 10, name: '', amount: '', imageUrl: '' },
    
    
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
