import React, { useState } from 'react';

const Sidebar = () => {
  const [isOrdersMenuOpen, setOrdersMenuOpen] = useState(false);

  const toggleOrdersMenu = () => {
    setOrdersMenuOpen(!isOrdersMenuOpen);
  };

  return (
    <aside>
      <nav>
        <ul className="sidebar-nav">
          <li>
            <a href="#">Dashboard</a>
          </li>
          <li>
            <a href="#">Proposals</a>
          </li>
          <li>
            <a href="#" onClick={toggleOrdersMenu}>
              Orders
            </a>
            {isOrdersMenuOpen && (
              <ul className="sub-menu">
                <li>
                  <a href="#">Create New Order</a>
                </li>
                <li>
                  <a href="#">Orders List</a>
                </li>
                <li>
                  <a href="#">Manage Draft Orders</a>
                </li>
                <li>
                  <a href="#">Tracking & Follow-up</a>
                </li>
                <li>
                  <a href="#">Processing & Scheduling</a>
                </li>
                <li>
                  <a href="#">Document Upload</a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="#">Customer</a>
          </li>
          <li>
            <a href="#">Suppliers</a>
          </li>
          <li>
            <a href="#">Inventory</a>
          </li>
          <li>
            <a href="#">Invoicing</a>
          </li>
          <li>
            <a href="#">A/R</a>
          </li>
          <li>
            <a href="#">A/P</a>
          </li>
          <li>
            <a href="#">Accounting</a>
          </li>
          <li>
            <a href="#">Reports</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
