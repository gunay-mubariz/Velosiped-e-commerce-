import {createContext, useState,useEffect} from 'react';
import axios from 'axios';

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
          .get("http://localhost:5000/api/products")
          .then((res) => setProducts(res.data))
          .catch((err) => console.log(err));
      }, []);
      
    const [cart, setCart] = useState([]);

    const addToCart = (id) => { 
        const findExistingProduct = cart.find((product) => product.id === id);
        const findIncomingProduct = products.find((product) => product.id === id);
    
        if (findExistingProduct) {
          const updatedProductQuantity = cart.map((product) =>
            product.id === id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          );
          setCart(updatedProductQuantity);
        } else {
          setCart((prev) => [...prev, {...findIncomingProduct, quantity: 1}]);
        }
      };
    
      const removeFromCart = (id) => {
        const filteredProducts = cart.filter((product) => product.id !== id);
        setCart(filteredProducts);
      };
    
      return (
        <CartContext.Provider value={{ products, cart, addToCart, removeFromCart }}>
          {children}
        </CartContext.Provider>
      );

      
}