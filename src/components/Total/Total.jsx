import styles from './Total.module.css';
import PropTypes from 'prop-types';

function Total({ cart }) {
  // Calculate total using reduce
  const total = cart.reduce((sum, product) => {
    // Ensure the price is a valid number
    const price = product.price;
    return sum + price;
  }, 0);

  return <div className={styles.total}>${total}</div>;
}

Total.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })
  ).isRequired,
};

export default Total;
