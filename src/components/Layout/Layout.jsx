import Header from '../Header/Header';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';

function Layout({ addToCart, itemCount, cart, updateQuantity, removeItem }) {
  return (
    <>
      <Header itemCount={itemCount} />

      <main>
        <Outlet context={{ addToCart, cart, updateQuantity, removeItem }} />
      </main>
    </>
  );
}

Layout.propTypes = {
  addToCart: PropTypes.func.isRequired,
  itemCount: PropTypes.number.isRequired,
  cart: PropTypes.array,
  updateQuantity: PropTypes.func,
  removeItem: PropTypes.func,
};

export default Layout;
