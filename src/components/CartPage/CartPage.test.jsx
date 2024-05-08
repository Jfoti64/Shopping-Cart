import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route, Outlet } from 'react-router-dom';
import CartPage from './CartPage';
import PropTypes from 'prop-types';

// Test Wrapper Component to provide context
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
  cart: PropTypes.array,
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
      description: 'great outerwear jackets for Spring/Autumn/Winter',
      price: '$55.99',
    },
    {
      id: 2,
      imgsrc: 'https://example.com/tshirt.jpg',
      name: 'Mens Casual Slim Fit',
      description: 'Comfortable and stylish T-Shirt for everyday wear',
      price: '$15.99',
    },
  ];

  it('renders the correct items in the cart', () => {
    render(<TestWrapper cart={mockCart} />);

    const cottonJacketTitle = screen.getByRole('heading', { name: /mens cotton jacket/i });
    const tshirtTitle = screen.getByRole('heading', { name: /mens casual slim fit/i });

    expect(cottonJacketTitle).toBeInTheDocument();
    expect(tshirtTitle).toBeInTheDocument();
    expect(
      screen.getByText('great outerwear jackets for Spring/Autumn/Winter')
    ).toBeInTheDocument();
    expect(
      screen.getByText('Comfortable and stylish T-Shirt for everyday wear')
    ).toBeInTheDocument();
    expect(screen.getByText('$55.99')).toBeInTheDocument();
    expect(screen.getByText('$15.99')).toBeInTheDocument();
  });

  it('displays an empty cart message when the cart is empty', () => {
    render(<TestWrapper cart={[]} />);

    const emptyMessage = screen.getByText(/your cart is empty/i);
    expect(emptyMessage).toBeInTheDocument();
  });
});
