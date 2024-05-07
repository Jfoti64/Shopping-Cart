import App from './App';
import ShopPage from './components/ShopPage/ShopPage.jsx';
import Cart from './components/Cart/Cart.jsx';
import Layout from './Layout.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';

const routes = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <App /> },
      { path: 'shopPage', element: <ShopPage /> },
      { path: 'cart', element: <Cart /> },
    ],
  },
];

export default routes;
