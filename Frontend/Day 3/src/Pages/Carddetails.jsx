import { useState } from 'react';
import '../assets/css/Carddetails.css';
import AppNavbar from '../Components/AppNavbar'

const Carddetails = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Indian- Dinner', amount: 100, imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708755308/indin_onm8pt.jpg' },
    { id: 2, name: 'Game', amount: 150, imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708719060/games_rp5ucm.jpg' },
    { id: 3, name: 'Candid', amount: 2000, imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708735921/po5_vs4quu.jpg' },
    { id: 4, name: 'Outdoor hall', amount: 10000, imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708708750/vv3_pjmenz.jpg' },
    { id: 5, name: 'Theme Cake', amount: 600, imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708700253/cake7_msyh9q.jpg' },
    { id: 6, name: 'Balloon Decorations', amount: 1500, imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708526714/p8_zidoub.jpg' },
  ]);

  const [totalAmount, setTotalAmount] = useState(0);

  const handleDelete = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));

    setTotalAmount((prevTotal) =>
      prevTotal - items.find((item) => item.id === id).amount
    );
  };

  const handleProceedToPay = () => {
    console.log('Proceeding to pay...');
  };

  

  return (
    <div>
      <AppNavbar/>
      <h1 style={{textAlign:"center",color:"#543f3f"}}>Shopping Cart</h1>
      <div style={{ display: 'flex', gap: '10px' }}>
        {items.map((item) => (
          <div key={item.id} className="cardd">
            <div className='detail-image'>
            <img  style={{height:"100px",width:"100px"}}src={item.imageUrl} alt={item.name}  />
            <h3>{item.name}</h3>
            <p>Amount: Rs.{item.amount}</p>
            </div>
          </div>
        ))}
      </div>

      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Item Name</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>Rs.{item.amount}</td>
              <td>
                <button onClick={() => handleDelete(item.id)} className='detailbut'>Delete</button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan="2"></td>
            <td>Total:</td>
            <td>Rs.{totalAmount}</td>
          </tr>
        </tbody>
      </table>

      <button onClick={handleProceedToPay} className='paybut'>Proceed to Pay</button>
    </div>
  );
};

export default Carddetails;
