import '../assets/css/Card.css'
import { Link } from 'react-router-dom';
const Cards = () => {
  const cards = [
    {
      title:'Cakes',
      description: '',
      image: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708538769/c1_kbkfqr.jpg',
      path : '/cakes'
    },
    {
      title: 'Entertainment',
      description: '',
      image: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708538138/Entertainment_ocuaga.jpg',
      path : '/entertainment'
    },
    {
      title: 'Photography',
      description: '',
      image: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708538549/photo_pur80a.jpg',
      path : '/photography'
    },
    {
      title: 'Food',
      description: '',
      image: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708561076/f1_gamywy.jpg',
      path : '/foods'
    },
    {
      title: 'Decorations',
      description: '',
      image: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708526710/p7_xqpl50.jpg',
      path : '/deco'
    },
    {
      title: 'Return Gifts',
      description: '',
      image: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708526710/p11_zal2p4.jpg',
      path : '/return'
    },
  ];
  
  return (
    <div className="cards-containercc">
      {cards.map((card, index) => (
        <div key={index} className="cardcc">
          {card.image && <img src={card.image} alt={card.title} />}
          <div className="card-contentcc">
        <center><Link to = {card.path}> <button>{card.title}</button></Link></center>  
            <p>{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;