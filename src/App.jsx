import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes';
import Layout from './components/Layout/Layout';
import ErrorPage from './components/ErrorPage/ErrorPage';
import './index.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (itemId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.id === itemId ? { ...cartItem, quantity: newQuantity } : cartItem
      )
    );
  };

  const removeItem = (itemId) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== itemId));
  };

  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Layout
          addToCart={addToCart}
          updateQuantity={updateQuantity}
          removeItem={removeItem}
          itemCount={itemCount}
          cart={cart}
        />
      ),
      errorElement: <ErrorPage />,
      children: routes,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
