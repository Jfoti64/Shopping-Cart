import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import ErrorPage from './components/ErrorPage/ErrorPage';

describe('App component', () => {
  it('renders an error page when address invalid', () => {
    render(
      <MemoryRouter initialEntries={['/invalid-route']}>
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<App />} />
        </Routes>
      </MemoryRouter>
    );

    // Check for error message on the error page
    expect(screen.getByRole('heading', {  name: /oh no, this route doesn't exist!/i})).toBeInTheDocument();
  });
});
