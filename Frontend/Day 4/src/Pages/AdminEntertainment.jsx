import { useState } from 'react';
import { FaCartArrowDown, FaWhatsapp, FaLinkedin, FaFacebook } from 'react-icons/fa';
import Modal from 'react-modal';
import '../assets/css/AdminCard.css'
import AdminNavbar from '../Components/AdminNavbar'
import Enterslide from './Enterslide';


const AdminEntertainment = () => {
  const [cards, setCards] = useState([
    { id: 1, title: 'Card 1', details: 'Details 1', imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708719069/dance_qvrmwy.jpg' },
    { id: 2, title: 'Card 2', details: 'Details 2', imageUrl:  'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708719065/craft_iekepo.jpg' },
    { id: 3, title: 'Card 3', details: 'Details 3', imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708719060/games_rp5ucm.jpg' },
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

  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState('');
  const [updatedDetails, setUpdatedDetails] = useState('');
  const [newCardTitle, setNewCardTitle] = useState('');
  const [newCardDetails, setNewCardDetails] = useState('');
  const [newCardImageUrl, setNewCardImageUrl] = useState('');


  const handleAdd = () => {
    const newCard = {
      id: cards.length + 1,
      title: newCardTitle,
      details: newCardDetails,
      imageUrl: newCardImageUrl,
    };
    setCards((prevCards) => [...prevCards, newCard]);

    setNewCardTitle('');
    setNewCardDetails('');
    setNewCardImageUrl('');

    setIsModalOpen(false);
  };

    
  const handleUpdate = () => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === selectedCard
          ? { ...card, title: updatedTitle, details: updatedDetails }
          : card
      )
    );
    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== id));
  };

  

  const openModal = (card) => {
    setSelectedCard(card.id);
    setUpdatedTitle(card.title);
    setUpdatedDetails(card.details);
    setIsModalOpen(true);
  };

  return (
    <div>
      <AdminNavbar />
      <Enterslide/>
      <h1>Card List</h1>
      <div className='item-grid'>
      {cards.map((card) => (
        <div key={card.id} className="cardaa">
          <img src={card.imageUrl} alt={card.title} style={{height:"200px",width:"200px",borderRadius:"10px",marginTop:"3%"}}/>
          <h3>{card.title}</h3>
          <p>{card.details}</p>
          <div className="icon-container">
            <FaCartArrowDown onClick={() => handleAddToCart(card.id)} className="icon" />
            <FaWhatsapp onClick={() => handleShareWhatsApp(card)} className="icon" />
            <FaLinkedin onClick={() => handleShareLinkedIn(card)} className="icon" />
            <FaFacebook onClick={() => handleShareFacebook(card)} className="icon" />
          </div>
          <div className="button-container">
            <button onClick={() => openModal(card)}>Update</button>
            <button onClick={() => handleDelete(card.id)}>Delete</button>
            <button onClick={handleAdd}>Add</button>
          </div>
        </div>
      ))}
      </div>
      <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}>
        <h2>Update Card</h2>
        <label>Title:</label>
        <input
          type="text"
          value={updatedTitle}
          onChange={(e) => setUpdatedTitle(e.target.value)}
        />
        <label>Details:</label>
        <input
          type="text"
          value={updatedDetails}
          onChange={(e) => setUpdatedDetails(e.target.value)}
        />
        <button onClick={handleUpdate}>Update</button>
      </Modal>
    </div>
  );
};

export default AdminEntertainment;
