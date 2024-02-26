import '../assets/css/LoginPage.css';
import p9 from '../assets/images/p9.jpg'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';

const AdminPage = () => {
  return (
    <div className="login-container">
      <div className="image-half">
        <img src={p9} alt="Login" style={{height:'70%'}}/>
      </div>
      <div className="form-half">
        <Card className='Card'>
        <h2> Admin Login</h2>
        <form>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />

          <button type="submit"><Link  to='/AdminHome'> Login</Link></button>
          {/* <h4>Create New Account</h4> */}
          {/* <Link to='/register'>Register</Link>  */}
        </form>
        </Card>
      </div>
    </div>
  );
};

export default AdminPage;