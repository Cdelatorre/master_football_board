import React from 'react';
import logoImg from '../assets/img/football.svg'

const Spinner = () => {
  return (
    <div className="Spinner d-flex align-items-center justify-content-center" style={{ height: "400px" }}>
      <img id="football-logo" className="px-3 football-logo" src={logoImg} alt="football" />
    </div>
  );
};

export default Spinner;