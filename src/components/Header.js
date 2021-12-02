import React from 'react';
import HeaderBg from '../assets/img/header.jpg'
import '../assets/styles/Header.css'

const Header = () => {
  return (
    <div className="mb-5">
      <div style={{ background: `url(${HeaderBg})`}}>
        <div className="container ">
          <h1 className="heading-title text-light text-start font-weight-bold">Football World Cup Board </h1>
          <p className="heading-description text-light" >Save your games and list all results. All results are given from API requests from <a href="https://main-football-dashboard-api.herokuapp.com/">https://main-football-dashboard-api.herokuapp.com/</a>, and they are given ordered by results and date. Try to <span className="text-danger">delete</span> some of your matches!</p>
        </div>
      </div>
    </div>
  );
};

export default Header;