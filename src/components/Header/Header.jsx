import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">Home</Link>
      <Link to="ShopPage">Shop</Link>
      <Link to="CartPage">Cart</Link>
    </header>
  );
}

export default Header;
