import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
//import userEvent from '@testing-library/user-event';
import Card from './Card';

describe('Card component', () => {
  it('renders a card for a mens cotton jacket with correct product details', () => {
    render(
      <Card
        imgsrc="https://example.com/jacket.jpg"
        name="Mens Cotton Jacket"
        description="great outerwear jackets for Spring/Autumn/Winter"
        price="$55.99"
      />
    );
    const cottonJacketCard = screen.getByRole('heading', { name: /mens cotton jacket/i });
    expect(cottonJacketCard).toBeInTheDocument();
    expect(
      screen.getByText('great outerwear jackets for Spring/Autumn/Winter')
    ).toBeInTheDocument();
    expect(screen.getByText('$55.99')).toBeInTheDocument();
  });

  // Click add to cart
});
