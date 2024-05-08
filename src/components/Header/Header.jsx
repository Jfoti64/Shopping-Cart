import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import CartIcon from '../CartIcon/CartIcon';

function Header({ itemCount }) {
  return (
    <header className={styles.header}>
      <Link to="/">Home</Link>
      <Link to="ShopPage">Shop</Link>
      <CartIcon itemCount={itemCount}/>
    </header>
  );
}

export default Header;
