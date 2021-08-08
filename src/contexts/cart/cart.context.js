import { createContext } from 'react';

const CartContext = createContext({
  hidden: true,
  toggleHidden: () => {}, // anonymous function define
});

export default CartContext;
