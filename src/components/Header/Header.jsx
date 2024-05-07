import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">Home</Link>
      <Link to="Shop">Shop</Link>
      <Link to="Cart">Cart</Link>
    </header>
  );
}

export default Header;
