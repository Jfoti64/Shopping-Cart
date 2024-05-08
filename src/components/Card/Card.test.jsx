import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { MemoryRouter } from 'react-router-dom';
import Card from './Card';
import CartIcon from '../CartIcon/CartIcon';

// Wrapper Component to Simulate Cart Functionality
function CartWithCard() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <MemoryRouter>
      <CartIcon itemCount={cart.length} />
      <Card
        id={1}
        imgsrc="https://example.com/jacket.jpg"
        name="Mens Cotton Jacket"
        description="great outerwear jackets for Spring/Autumn/Winter"
        price="$55.99"
        addToCart={addToCart}
      />
    </MemoryRouter>
  );
}

describe('Card component', () => {
  it('renders a card for a mens cotton jacket with correct product details', () => {
    const addToCart = () => {};

    render(
      <MemoryRouter>
        <Card
          id={1}
          imgsrc="https://example.com/jacket.jpg"
          name="Mens Cotton Jacket"
          description="great outerwear jackets for Spring/Autumn/Winter"
          price="$55.99"
          addToCart={addToCart}
        />
      </MemoryRouter>
    );
    const cottonJacketCard = screen.getByRole('heading', { name: /mens cotton jacket/i });
    expect(cottonJacketCard).toBeInTheDocument();
    expect(
      screen.getByText('great outerwear jackets for Spring/Autumn/Winter')
    ).toBeInTheDocument();
    expect(screen.getByText('$55.99')).toBeInTheDocument();
  });

  it('does not add to cart when add to cart not clicked', async () => {
    render(<CartWithCard />);

    expect(screen.getByText(/\(0\)/i)).toBeInTheDocument();
  });

  it('adds 1 to the number of items in the cart when clicking "Add to Cart"', async () => {
    render(<CartWithCard />);
    const user = userEvent.setup();
    const addToCartButton = screen.getByRole('button', { name: /add to cart/i });

    await user.click(addToCartButton);
    expect(screen.getByText(/\(1\)/i)).toBeInTheDocument();
  });
});
