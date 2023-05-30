import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>ATURIAN</h1>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button type="button">Search</button>
      </div>
    </header>
  );
}

export default Header;

