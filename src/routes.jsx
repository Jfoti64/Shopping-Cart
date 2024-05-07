import App from './App';
import ShopPage from './components/ShopPage/ShopPage.jsx';
import CartPage from './components/CartPage/CartPage.jsx';
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
      { path: 'cartPage', element: <CartPage /> },
    ],
  },
];

export default routes;
