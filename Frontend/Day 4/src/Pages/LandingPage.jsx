import { Link } from 'react-router-dom';
import '../assets/css/LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header>
        <h1 style={{textAlign:"center",marginTop:"-15%",fontFamily:"Bernard MT Condensed"}}>Welcome to Joyful Jumborees</h1>
        <p style={{fontFamily:"Bahnschrift Condensed",marginTop:"40%",fontSize:"larger"}}>Your one-stop destination for creating unforgettable birthday celebrations!</p>
        <Link to="/">
          <button>USER</button>
        </Link>
        <Link to="/admin">
          <button>ADMIN</button>
        </Link>
      </header>

      <section className="features">
        <div className="feature">
          <h2>Cakes</h2>
          <p>Delicious and beautifully crafted cakes for every birthday theme.</p>
        </div>

        <div className="feature">
          <h2>Entertainment</h2>
          <p>Exciting entertainment options to make your birthday party memorable.</p>
        </div>

        <div className="feature">
          <h2>Photography</h2>
          <p>Capture every moment with our professional photography services.</p>
        </div>

        <div className="feature">
          <h2>Foods</h2>
          <p>Delectable food options to delight your guest is taste buds.</p>
        </div>
        <div className="feature">
          <h2>Return Gifts</h2>
          <p>Unique and thoughtful return gift ideas for your guests.</p>
        </div>

        <div className="feature">
          <h2>Venues</h2>
          <p>Discover stunning venues for your birthday celebration.</p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
