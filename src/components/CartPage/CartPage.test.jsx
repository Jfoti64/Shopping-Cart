import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route, Outlet } from 'react-router-dom';
import CartPage from './CartPage';
import PropTypes from 'prop-types';

// Test Wrapper Component to provide context
function TestWrapper({ cart, updateQuantity, removeItem }) {
  return (
    <MemoryRouter>
      <Routes>
        <Route
          path="/"
          element={
            <OutletContextWrapper
              cart={cart}
              updateQuantity={updateQuantity}
              removeItem={removeItem}
            />
          }
        >
          <Route index element={<CartPage />} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
}

TestWrapper.propTypes = {
  cart: PropTypes.array,
  updateQuantity: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
};

function OutletContextWrapper({ cart, updateQuantity, removeItem }) {
  return <Outlet context={{ cart, updateQuantity, removeItem }} />;
}

OutletContextWrapper.propTypes = {
  cart: PropTypes.array.isRequired,
  updateQuantity: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
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

  const updateQuantity = (id, newQuantity) => {
    const productIndex = mockCart.findIndex((product) => product.id === id);
    if (productIndex !== -1) {
      mockCart[productIndex].quantity = newQuantity;
    }
  };

  const removeItem = (id) => {
    const productIndex = mockCart.findIndex((product) => product.id === id);
    if (productIndex !== -1) {
      mockCart.splice(productIndex, 1);
    }
  };

  it('renders the correct items in the cart', () => {
    render(<TestWrapper cart={mockCart} updateQuantity={updateQuantity} removeItem={removeItem} />);

    const cottonJacketTitle = screen.getByRole('heading', { name: /mens cotton jacket/i });
    const tshirtTitle = screen.getByRole('heading', { name: /mens casual slim fit/i });

    expect(cottonJacketTitle).toBeInTheDocument();
    expect(tshirtTitle).toBeInTheDocument();

    expect(
      screen.getByText((content, element) => {
        return element?.textContent === '$55.99';
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText((content, element) => {
        return element?.textContent === '$31.98';
      })
    ).toBeInTheDocument();
  });

  it('displays an empty cart message when the cart is empty', () => {
    render(<TestWrapper cart={[]} updateQuantity={() => {}} removeItem={() => {}} />);

    const emptyMessage = screen.getByText(/your cart is empty/i);
    expect(emptyMessage).toBeInTheDocument();
  });
});
