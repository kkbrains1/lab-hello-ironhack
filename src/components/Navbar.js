// eslint-disable-next-line 
import React, { Component } from 'react';
import './Navbar.css'

const navbar = () => {
  return (
    <div className="nav-bar container">
      <nav>
        <img className="logo" src="images/ironhack-logo.svg" alt="ironhack logo" />
      </nav>
    </div>
  );
}

export default navbar;
