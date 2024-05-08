import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Header from './Header';

const HomePage = () => <h1>Home Page</h1>;
const ShopPage = () => <h1>Shop Page</h1>;
const CartPage = () => <h1>Cart Page</h1>;

describe('Header component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="shopPage" element={<ShopPage />} />
          <Route path="cartPage" element={<CartPage />} />
        </Routes>
      </MemoryRouter>
    );
  });

  it('renders a link to Home and navigates correctly', async () => {
    const user = userEvent.setup();
    const homeLink = screen.getByRole('link', { name: /home/i });
    expect(homeLink).toBeInTheDocument();

    await user.click(homeLink);
    expect(screen.getByText('Home Page')).toBeInTheDocument();
  });

  it('renders a link to Shop and navigates correctly', async () => {
    const user = userEvent.setup();
    const shopLink = screen.getByRole('link', { name: /shop/i });
    expect(shopLink).toBeInTheDocument();

    await user.click(shopLink);
    expect(screen.getByText('Shop Page')).toBeInTheDocument();
  });

  it('renders a link to Cart and navigates correctly', async () => {
    const user = userEvent.setup();
    const cartLink = screen.getByRole('link', { name: /cart/i });
    expect(cartLink).toBeInTheDocument();

    await user.click(cartLink);
    expect(screen.getByText('Cart Page')).toBeInTheDocument();
  });
});
