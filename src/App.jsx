import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes';
import Layout from './components/Layout/Layout';
import ErrorPage from './components/ErrorPage/ErrorPage';
import './index.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const itemCount = cart.length;

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout addToCart={addToCart} itemCount={itemCount} />,
      errorElement: <ErrorPage />,
      children: routes,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
