import App from './App';
import Shop from './components/Shop/Shop.jsx';
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
      { path: 'shop', element: <Shop /> },
      { path: 'cart', element: <Cart /> },
    ],
  },
];

export default routes;
