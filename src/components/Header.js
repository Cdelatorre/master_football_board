import React from 'react';
import HeaderBg from '../assets/img/header.jpg'
import '../assets/styles/Header.css'

const Header = () => {
  return (
    <div className="mb-5">
      <div style={{ background: `url(${HeaderBg})`}}>
        <div className="container ">
          <h1 className="heading-title text-light text-start font-weight-bold">FOOTBALL DASHBOARD</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;