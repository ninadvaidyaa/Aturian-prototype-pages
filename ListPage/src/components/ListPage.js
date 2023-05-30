import React from 'react';

function ListPage() {
  const fakeData = [
    { orderNumber: '123', jobID: 'ABC', customerName: 'Customer A', orderDate: '2023-05-01', estShipDate: '2023-05-10' },
    { orderNumber: '456', jobID: 'DEF', customerName: 'Customer B', orderDate: '2023-05-02', estShipDate: '2023-05-11' },
    // Add more fake data points as needed
  ];

  return (
    <div className="content">
      <table>
        <thead>
          <tr>
            <th>Links</th>
            <th>Order #</th>
            <th>JobID</th>
            <th>Customer Name</th>
            <th>Order Date</th>
            <th>Est. Ship Date</th>
          </tr>
        </thead>
        <tbody>
          {fakeData.map((data, index) => (
            <tr key={index}>
              <td>Links</td>
              <td>{data.orderNumber}</td>
              <td>{data.jobID}</td>
              <td>{data.customerName}</td>
              <td>{data.orderDate}</td>
              <td>{data.estShipDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListPage;
