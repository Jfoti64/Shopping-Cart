import HomePage from './components/HomePage/HomePage';
import ShopPage from './components/ShopPage/ShopPage';
import CartPage from './components/CartPage/CartPage';

const routes = [
  { path: '', element: <HomePage /> },
  { path: 'shopPage', element: <ShopPage /> },
  { path: 'cartPage', element: <CartPage /> },
];

export default routes;
