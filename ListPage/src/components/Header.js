import React from 'react';

function Header() {
  return (
    <div className="header">
      <h1>List Page</h1>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>
    </div>
  );
}

export default Header;


