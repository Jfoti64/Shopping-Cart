import { Link } from 'react-router-dom';
import styles from './CartIcon.module.css';
import PropTypes from 'prop-types';

function CartIcon({ itemCount }) {
  return (
    <div className={styles.cartIcon}>
      <Link to="CartPage" className={styles.link}>
        Cart
      </Link>
      <span className={styles.itemCount}>({itemCount})</span>
    </div>
  );
}

CartIcon.propTypes = {
  itemCount: PropTypes.number.isRequired,
};

export default CartIcon;
