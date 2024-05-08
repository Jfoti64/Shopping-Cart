import PropTypes from 'prop-types';
import styles from './Card.module.css';

function Card({ id, imgsrc, name, description, price, addToCart }) {
  return (
    <div className={styles.card}>
      <img src={imgsrc} alt={name} className={styles.cardImage} />
      <h2 className={styles.cardTitle}>{name}</h2>
      <p className={styles.cardDescription}>{description}</p>
      <div className={styles.cardPrice}>${price.toFixed(2)}</div>
      <button
        className={styles.cardButton}
        onClick={() => addToCart({ id, imgsrc, name, description, price, addToCart })}
      >
        Add to Cart
      </button>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  imgsrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  addToCart: PropTypes.func,
};

export default Card;
