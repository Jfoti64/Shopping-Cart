import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

function Layout({ addToCart, itemCount }) {
  return (
    <>
      <Header itemCount={itemCount()} />

      <main>
        {/* Pass addToCart to child routes using Outlet context */}
        <Outlet context={{ addToCart }} />
      </main>
    </>
  );
}

export default Layout;
