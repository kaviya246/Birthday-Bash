// ProfilePage.js
import  { useState } from 'react';
import '../assets/css/ProfilePage.css';
import AppNavbar from '../Components/AppNavbar'

const ProfilePage = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phoneNumber: '123-456-7890',
  });

  const handleEditToggle = () => {
    setIsEditMode((prevMode) => !prevMode);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <div>
        <AppNavbar/>
    <div className="profile-page">
      <div className="profile-header">
        <img src="https://res.cloudinary.com/dunzdwo0h/image/upload/v1708713998/person_ygv9ho.jpg" alt="Profile" />
      </div>

      <div className="profile-details">
        <h2 style={{marginRight:"3%"}}>{userDetails.name}</h2>
        <p>Email: {userDetails.email}</p>
        <p>Phone Number: {userDetails.phoneNumber}</p>

        {isEditMode ? (
          <div>
            <label>
              Name:
              <input type="text" name="name" className='boxin' value={userDetails.name} onChange={handleInputChange} />
            </label>
            <br></br>
            <label>
              Email:
              <input type="text" name="email" className='boxin' value={userDetails.email} onChange={handleInputChange} />
            </label>
            <br></br>
            <label>
              Phone Number:
              <input type="text" name="phoneNumber" className='boxin' value={userDetails.phoneNumber} onChange={handleInputChange} />
            </label>
          </div>
        ) : null}

        <button onClick={handleEditToggle}>{isEditMode ? 'Save' : 'Edit'}</button>
      </div>

      <div className="previous-events">
        <h3>Previous Events</h3>
        {/* Display previous events in card format */}
        {/* You can map through an array of previous events and create a card for each */}
        {/* For simplicity, let's create a static card */}
        <div className="event-card">
          <p>Event Name: Birthday Bash</p>
          <p>Date: January 1, 2022</p>
          <p>Location: Party Venue</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProfilePage;
