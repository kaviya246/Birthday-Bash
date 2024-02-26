import { Link } from 'react-router-dom';
import '../assets/css/Registration.css';
import Card from 'react-bootstrap/Card'

const Registration = () => {
  return (
    <div className="bgm">
      <Card>
      <div className="registration-container">
      <h2>Create Account</h2>
      <form>
      <label>Name:</label>
        <input type="name" name="name" />
        <label>Email:</label>
        <input type="email" name="email" />
        <label>Password:</label>
        <input type="password" name="password" />
        <label>Phone Number:</label>
        <input type="Phonenumber" name="phonenumber" />
        <label>Address:</label>
        <input type="address" name="address" />
        <button type="submit"><Link to='/home'>Register</Link></button>
      </form>
      <p>
        Already have an account? <Link to="/">Login</Link>
      </p>
    </div>
    </Card>
    </div>
  );
};

export default Registration;
