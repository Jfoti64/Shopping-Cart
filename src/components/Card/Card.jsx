import PropTypes from 'prop-types';
import styles from './Card.module.css';

function Card({ imgsrc, name, description, price }) {
  return (
    <div className={styles.card}>
      <img src={imgsrc} alt={name} className={styles.cardImage} />
      <h2 className={styles.cardTitle}>{name}</h2>
      <p className={styles.cardDescription}>{description}</p>
      <div className={styles.cardPrice}>{price}</div>
      <button className={styles.cardButton}>Add to Cart</button>
    </div>
  );
}

Card.propTypes = {
  imgsrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Card;
