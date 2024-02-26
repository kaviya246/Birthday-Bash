import { FaShoppingCart, FaWhatsapp, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { useState } from 'react';
import AppNavbar from '../Components/AppNavbar';
import Photoslide from './Photoslide';

const ProductCard = () => {
  const [products] = useState([
    { id: 1, name: 'Indoor photoshoot', amount: 'Starting from 4000', imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708735920/po1_z8jjx1.jpg' },
    { id: 2, name: 'Outdoor phtotshoot', amount: 'Starting from 3000', imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708735921/po10_gvhurr.jpg' },
    { id: 3, name: 'Candid', amount: 'Starting from 2000', imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708735921/po5_vs4quu.jpg' },
    { id: 4, name: 'Indoor + Outdoor', amount: 'Starting from 5000', imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708735920/po4_db4jgb.jpg' },
    { id: 5, name: 'Outdoor', amount: 'Starting from 2000', imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708735921/po9_fenerl.jpg' },
    { id: 6, name: 'Candid + Indoor', amount: 'Starting from 6000', imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708735920/po2_vrvkcd.jpg' },
    { id: 7, name: 'Theme Photoshoot', amount: 'Starting from 3000', imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708735920/po7_rthkkn.jpg' },
    { id: 8, name: 'Outdoor + Candid ', amount: 'Starting from 2000', imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708735920/po8_yqrou4.jpg' },
    { id: 9, name: 'Family Photoshoot', amount: 'Starting from 6000', imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708735920/po3_t5ty5i.jpg' },
    { id: 10, name: 'Candid + Indoor + Outdoor', amount: 'Starting from 1000', imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708735921/po6_wvgnhk.jpg' },
    
    
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
      <Photoslide/>
      <div>
      <h1 style={{textAlign:"center",fontFamily:"Bahnschrift Condensed",fontSize:"larger",marginTop:"40%",color:"#543f3f"}}>Dance like no one id watching, sing like no one is listening, and celebrate your birthday with the best entertainment in town.</h1>
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
