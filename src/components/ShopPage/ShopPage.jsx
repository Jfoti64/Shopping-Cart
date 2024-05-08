import styles from './ShopPage.module.css';
import Card from '../Card/Card';
import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

function ShopPage() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useOutletContext();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products', { mode: 'cors' })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error('server error');
        }
        return response.json();
      })
      .then((response) => setProducts(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <>
      <h1 className={styles.shop}>Shop</h1>
      <div className={styles.cards}>
        {products.map((product) => (
          <Card
            key={product.id}
            id={product.id} // Pass product ID to Card
            imgsrc={product.image}
            name={product.title}
            description={product.description}
            price={product.price}
            addToCart={addToCart}
          />
        ))}
      </div>
    </>
  );
}

export default ShopPage;
