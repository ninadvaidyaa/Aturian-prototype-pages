import React, { useState } from 'react';

function Sidebar() {
  const [showOrdersDropdown, setShowOrdersDropdown] = useState(false);

  const toggleOrdersDropdown = () => {
    setShowOrdersDropdown(!showOrdersDropdown);
  };

  return (
    <div className="sidebar">
      <ul>
        <li onClick={toggleOrdersDropdown}>Orders</li>
        {showOrdersDropdown && (
          <ul>
            <li>Create New Order</li>
            <li>Orders List</li>
            <li>Manage Draft Orders</li>
          </ul>
        )}
        <li>Customers</li>
        <li>Suppliers</li>
        <li>Inventory</li>
      </ul>
    </div>
  );
}

export default Sidebar;


