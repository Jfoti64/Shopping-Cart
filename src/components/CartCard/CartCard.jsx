import PropTypes from 'prop-types';
import styles from './CartCard.module.css';

function CartCard({ id, imgsrc, name, price, quantity, updateQuantity, removeItem }) {
  const increaseQuantity = () => {
    updateQuantity(id, quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      updateQuantity(id, quantity - 1);
    } else {
      removeItem(id);
    }
  };

  const totalPrice = price * quantity;

  return (
    <div className={styles.CartCard}>
      <img src={imgsrc} alt={name} className={styles.cardImage} />
      <h2 className={styles.cardTitle}>{name}</h2>
      <div className={styles.quantityDiv}>
        <button onClick={decreaseQuantity}>-</button>
        <span>{quantity}</span>
        <button onClick={increaseQuantity}>+</button>
      </div>
      <div className={styles.cardPrice}>${totalPrice.toFixed(2)}</div>
    </div>
  );
}

CartCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  imgsrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  quantity: PropTypes.number.isRequired,
  updateQuantity: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default CartCard;
