import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route, Outlet } from 'react-router-dom';
import CartPage from '../CartPage/CartPage';
import PropTypes from 'prop-types';

// Wrapper Component to Simulate Cart Context
function TestWrapper({ cart }) {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<OutletContextWrapper cart={cart} />}>
          <Route index element={<CartPage />} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
}

TestWrapper.propTypes = {
  cart: PropTypes.array.isRequired,
};

// A wrapper component to provide the `cart` context
function OutletContextWrapper({ cart }) {
  return <Outlet context={{ cart }} />;
}

OutletContextWrapper.propTypes = {
  cart: PropTypes.array.isRequired,
};

describe('CartPage component', () => {
  const mockCart = [
    {
      id: 1,
      imgsrc: 'https://example.com/jacket.jpg',
      name: 'Mens Cotton Jacket',
      price: 55.99,
      quantity: 1,
    },
    {
      id: 2,
      imgsrc: 'https://example.com/tshirt.jpg',
      name: 'Mens Casual Slim Fit',
      price: 15.99,
      quantity: 2,
    },
  ];

  it('renders the correct total amount', () => {
    render(<TestWrapper cart={mockCart} />);

    // Verify that the total amount is calculated correctly
    expect(screen.getByText(/\$87\.97/i)).toBeInTheDocument();
  });
});
