import React from "react";
import '../css/About.css'; // Import the CSS file
import satelliteImage from '../css/Space2.png'; // Import the image file

const About = () => {
  return (
    <div className="about-container" style={{backgroundImage: `url(${satelliteImage})`, minHeight: '100vh', // Adjust as needed
    color: 'white'}}>
      <h2 style={{color: '#f0f8ff'}}className="about-title">Application for managing satellite events</h2>
      <p className="about-paragraph">
        Each event belongs to a satellite and has a creation date, description and priority.
      </p>
      <p className="about-paragraph">Create Events - Creates a new event</p>
      <p className="about-paragraph">
        Show Events
        <ul className="about-list">
          <li className="about-list-item">
            Tabular depiction of all events that belong to a certain satellite by providing a satellite name, e.g., “ISS” or “Sentinel-1A”.
          </li>
          <li className="about-list-item">User can filter Events based on satellite name.</li>
          <li className="about-list-item">
            On clicking an event, TLE information from Celestrak is shown matching the satellite name.
          </li>
        </ul>
      </p>
    </div>
  );
};

export default About;
