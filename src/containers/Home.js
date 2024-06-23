import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../css/Home.css';
import myImage from '../css/Space.png';

const Home = () => {
  const navigate = useNavigate();

  const handleCreateEvent = () => {
    // Dispatch any actions if needed
    navigate('/createEvent');;
  };

  const handleShowEvents = () => {
    // Dispatch any actions if needed
    navigate('/showAllEvents');;
  };

  return (
    <div className="container">      
      <div className="image-container">
        <img src={myImage} alt="My Image" />
      </div>
      <div className="menu-container">
        <h1>Welcome to Solanix Satellite App</h1>
      </div>
      </div>
  );
};

export default Home;
