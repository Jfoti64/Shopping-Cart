import App from './App';
import Shop from './Shop';
import Cart from './Cart';
import Layout from './Layout.jsx';
//import ErrorPage from "./ErrorPage";

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <App /> },
      { path: 'shop', element: <Shop /> },
      { path: 'cart', element: <Cart /> },
    ],
  },
];

export default routes;
