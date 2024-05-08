import { useOutletContext } from 'react-router-dom';
import styles from './CartPage.module.css';
import CartCard from '../CartCard/CartCard';
import Total from '../Total/Total';

function CartPage() {
  const { cart, updateQuantity, removeItem } = useOutletContext();

  const removeAllItems = () => {
    cart.map((item) => {
      removeItem(item.id);
    });
  };

  return (
    <>
      <h1 className={styles.cart}>Cart</h1>
      {cart.length > 0 ? (
        <>
          <div className={styles.cards}>
            {cart.map((product) => (
              <CartCard
                key={product.id}
                id={product.id}
                imgsrc={product.imgsrc}
                name={product.name}
                price={product.price}
                quantity={product.quantity}
                updateQuantity={updateQuantity}
                removeItem={removeItem}
              />
            ))}
          </div>
          <Total cart={cart} />
          <button className={styles.button} onClick={removeAllItems}>
            Checkout
          </button>
        </>
      ) : (
        <p>Your cart is empty</p>
      )}
    </>
  );
}

export default CartPage;
