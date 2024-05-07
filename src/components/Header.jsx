import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="Shop">Shop</Link>
      <Link to="Cart">Cart</Link>
    </div>
  );
}

export default Header;
