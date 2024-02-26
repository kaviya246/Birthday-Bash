// import  { createContext, useContext, useReducer } from 'react';
// import PropTypes from 'prop-types';
// import './CartPage';
// import './ProductCard';

// const CartContext = createContext();

// const cartReducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD_TO_CART':
//       return [...state, action.payload];
//     default:
//       return state;
//   }
// };

// const CartProvider = ({ children }) => {
//   const [cart, dispatch] = useReducer(cartReducer, []);

//   const addToCart = (product) => {
//     dispatch({ type: 'ADD_TO_CART', payload: product });
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// CartProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// const Cart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error('useCart must be used within a CartProvider');
//   }
//   return context;
// };

// export { CartProvider, Cart };
