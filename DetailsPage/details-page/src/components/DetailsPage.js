import React from 'react';
import './DetailsPage.css';

const DetailsPage = () => {
  // Generate random fake data
  const orderNumber = Math.floor(Math.random() * 100000);
  const customer = 'John Doe';
  const customerNumber = 'CUST-123';
  const orderDate = new Date().toLocaleDateString();
  const estimatedShipDate = new Date().toLocaleDateString(); // Placeholder value, update as needed
  const revisionNumber = Math.floor(Math.random() * 10) + 1;

  // Fake addresses and contact details
  const billToAddress = '123 Main St, Anytown, USA';
  const billToContact = 'Jane Smith (123) 456-7890';
  const finalShipToAddress = '456 Elm St, Anytown, USA';
  const finalShipToContact = 'John Smith (987) 654-3210';
  const vendorDetails = 'ACME Corporation, email: vendor@example.com';

  return (
    <div className="details-page">
      <div className="upper-part">
        <h2>Order #{orderNumber}</h2>
        <p>Customer: {customer}</p>
        <p>Customer #: {customerNumber}</p>
        <p>Order Date: {orderDate}</p>
        <p>Est. Ship Date: {estimatedShipDate}</p>
        <p>Rev #: {revisionNumber}</p>
      </div>
      <div className="lower-part">
        <div className="bill-to">
          <h3>Bill to</h3>
          <p>Address: {billToAddress}</p>
          <p>Contact: {billToContact}</p>
        </div>
        <div className="final-ship-to">
          <h3>Final Ship to</h3>
          <p>Address: {finalShipToAddress}</p>
          <p>Contact: {finalShipToContact}</p>
        </div>
        <div className="vendor">
          <h3>Vendor</h3>
          <p>{vendorDetails}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
