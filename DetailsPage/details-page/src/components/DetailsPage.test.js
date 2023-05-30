import React from 'react';
import { render } from '@testing-library/react';
import DetailsPage from './DetailsPage';

describe('DetailsPage', () => {
  it('renders the details page with correct information', () => {
    // Render the component
    const { getByText } = render(<DetailsPage />);

    // Perform assertions
    expect(getByText(/Order #/)).toBeInTheDocument();
    expect(getByText(/Customer:/)).toBeInTheDocument();
    expect(getByText(/Customer #:/)).toBeInTheDocument();
    expect(getByText(/Order Date:/)).toBeInTheDocument();
    expect(getByText(/Est. Ship Date:/)).toBeInTheDocument();
    expect(getByText(/Rev #:/)).toBeInTheDocument();

    expect(getByText(/Bill to/)).toBeInTheDocument();
    expect(getByText(/Final Ship to/)).toBeInTheDocument();
    expect(getByText(/Vendor/)).toBeInTheDocument();
  });
});
