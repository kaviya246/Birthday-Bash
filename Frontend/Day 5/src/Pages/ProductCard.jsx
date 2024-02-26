// import { FaShoppingCart, FaWhatsapp, FaLinkedin, FaFacebook } from 'react-icons/fa';
// import { useCart } from './Cart';
// import AppNavbar from '../Components/AppNavbar';
// import ImageCarousel from './ImageCarousel';
// import '../assets/css/Cakes.css';
// import '../assets/css/ProductCard.css'; 
// import './CartPage';
// import './Cart';


// const ProductCards = () => {
//     const [products] = useCart([
//         { id: 1, name: 'Theme Cakes', amount: 'Half KG 500', imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708700253/cake7_msyh9q.jpg' },
//         { id: 2, name: 'Flavour Cakes', amount: 'Starting from 1000', imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708700021/cake1_kudmiu.jpg' },
//         { id: 3, name: 'Cup Cakes', amount: '', imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708701386/cupcake1_inzg70.jpg' },
//         { id: 4, name: 'Eggless Cakes', amount: '', imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708700025/cake3_ihdr9g.jpg' },
//         { id: 5, name: 'Brownies', amount: '', imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708700026/cake6_qxfl78.jpg' },
//         { id: 6, name: 'Donuts', amount: '', imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708701387/donuts_btytr6.jpg' },
//         { id: 7, name: 'Theme Cakes', amount: '', imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708700025/cake5_npf5az.jpg' },
//         { id: 8, name: 'Brownies', amount: '', imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708701392/brownies_ttuury.jpg' },
//         { id: 9, name: 'Flavour Cakes', amount: '', imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708700021/cake_fgfuvh.jpg' },
//         { id: 10, name: 'Eggless Cakes', amount: '', imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708700021/cake2_alrury.jpg' },
        
        
//       ]);
    
//       const handleAddToCart = (productId) => {
//         console.log(`Product ${productId} added to cart`);
//       };
    
//       const handleShareWhatsApp = () => {
//         window.open(`https://wa.me/?text=Check out this product: ${window.location.href}`);
//       };
    
//       const handleShareLinkedIn = () => {
//         window.open(`https://www.linkedin.com/shareArticle?url=${window.location.href}`);
//       };
    
//       const handleShareFacebook = () => {
//         window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`);
//       };
  

//   return (
//     <div>
//       <AppNavbar />
//       <ImageCarousel />
//       <div>
//       <h1 style={{textAlign:"center",fontFamily:"Bahnschrift Condensed",fontSize:"larger",marginTop:"40%",color:"#543f3f"}}>Cakes are like hugs in edible form. Sending you a big slice of happiness on your birthday!</h1>
//       </div>
//       <div>
//       <div className="product-grid">
//         {products.map((product) => (
//           <div className="product-card" key={product.id}>
//             <div className="product-image">
//               <img src={product.imageUrl} alt={product.name} />
//             </div>
//             <div className="product-details">
//               <h2>{product.name}</h2>
//               <p>Amount: {product.amount}</p>
//             </div>
//             <div className="action-icons">
//               <FaShoppingCart onClick={() => handleAddToCart(product)} className="icon" />
//               <FaWhatsapp onClick={() => handleShareWhatsApp(product)} className="icon" />
//               <FaLinkedin onClick={() => handleShareLinkedIn(product)} className="icon" />
//               <FaFacebook onClick={() => handleShareFacebook(product)} className="icon" />
//             </div>
//           </div>
//         ))}
//       </div>
//      </div>
//     </div>
//   );
// };

// export default ProductCards;
