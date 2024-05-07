import styles from './Shop.module.css';
import Card from '../Card/Card';
import { useState, useEffect } from 'react';

function Shop() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

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
      <div className={styles.shop}>Shop</div>
      <div className={styles.cards}>
        {products.map((product) => (
          <Card
            key={product.id}
            imgsrc={product.image}
            name={product.title}
            description={product.description}
            price={`$${product.price}`}
          />
        ))}
      </div>
    </>
  );
}

export default Shop;
