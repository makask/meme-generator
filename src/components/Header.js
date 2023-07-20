import React from 'react';
import trollface from '../images/troll-face.png';

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <img src={trollface} className="trollface-img" alt="trollface" />
        <h1>Meme Generator</h1>
      </div>
    </div>
  );
}

export default Header;
