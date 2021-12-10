import React from 'react';
import logoImg from '@images/football.svg'

const Spinner = () => {
  return (
    <div className="Spinner d-flex align-items-center justify-content-center">
      <img id="football-logo" className="px-3 football-logo" src={logoImg} alt="football" />
    </div>
  );
};

export default Spinner;