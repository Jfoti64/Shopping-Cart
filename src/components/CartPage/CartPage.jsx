import { useOutletContext } from 'react-router-dom';
import styles from './CartPage.module.css';
import Card from '../Card/Card';

function CartPage() {
  const { cart } = useOutletContext();

  return (
    <>
      <h1 className={styles.cart}>Cart</h1>
      {cart.length > 0 ? (
        <div className={styles.cards}>
          {cart.map((product) => (
            <Card
              key={product.id}
              id={product.id} // Pass product ID to Card
              imgsrc={product.imgsrc}
              name={product.name}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}
    </>
  );
}

export default CartPage;
