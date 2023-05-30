import React from 'react';
import { render } from '@testing-library/react';
import ListPage from './ListPage';

describe('ListPage', () => {
  const fakeData = [
    { orderNumber: '123', jobID: 'ABC', customerName: 'Customer A', orderDate: '2023-05-01', estShipDate: '2023-05-10' },
    { orderNumber: '456', jobID: 'DEF', customerName: 'Customer B', orderDate: '2023-05-02', estShipDate: '2023-05-11' },
    // Add more fake data points as needed
  ];

  it('renders the ListPage component', () => {
    render(<ListPage />);
  });

  it('renders the correct number of rows', () => {
    const { getAllByRole } = render(<ListPage data={fakeData} />);
    const tableRows = getAllByRole('row');

    expect(tableRows.length).toBe(fakeData.length + 1); // +1 for the table header row
  });

  it('renders the correct column names', () => {
    const { getByText } = render(<ListPage data={fakeData} />);

    expect(getByText('Links')).toBeInTheDocument();
    expect(getByText('Order #')).toBeInTheDocument();
    expect(getByText('JobID')).toBeInTheDocument();
    expect(getByText('Customer Name')).toBeInTheDocument();
    expect(getByText('Order Date')).toBeInTheDocument();
    expect(getByText('Est. Ship Date')).toBeInTheDocument();
  });

  it('renders the correct data in the table rows', () => {
    const { getByText } = render(<ListPage data={fakeData} />);

    fakeData.forEach((data) => {
      expect(getByText(data.orderNumber)).toBeInTheDocument();
      expect(getByText(data.jobID)).toBeInTheDocument();
      expect(getByText(data.customerName)).toBeInTheDocument();
      expect(getByText(data.orderDate)).toBeInTheDocument();
      expect(getByText(data.estShipDate)).toBeInTheDocument();
    });
  });
});
