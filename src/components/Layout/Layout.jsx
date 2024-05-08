import Header from '../Header/Header';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';

function Layout({ addToCart, itemCount }) {
  return (
    <>
      <Header itemCount={itemCount} />

      <main>
        <Outlet context={{ addToCart }} />
      </main>
    </>
  );
}

Layout.propTypes = {
  addToCart: PropTypes.func.isRequired,
  itemCount: PropTypes.number.isRequired,
};

export default Layout;
