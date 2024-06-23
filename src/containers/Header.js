import React from "react";
const Header = () => {
return (
    <div className="home">
    <header className="home-header">
        <div className="logo">Satellite App</div>
        <nav>
          <a href="/home">Home</a>
          <a href="/createEvent">Create Events</a>
          <a href="/showAllEvents">Show Events</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>
    </div>
)
};

export default Header;