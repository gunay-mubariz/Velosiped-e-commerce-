import {useContext} from 'react'
import './Cart.css'
import { CartContext } from '../../CartContext';
import { CheckoutCard } from '../CheckoutCard/CheckoutCard';


const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  if(cart.length === 0) {
    return (
        <h1>Cart is empty. Please add product first</h1>
    )
  }

  const findTotalPrice = cart.reduce((acc, product) => acc + (product.price * product.quantity), 0);


  return (
    <div className="cart">
      <div>Total: {findTotalPrice} $</div>
      <div className="checkoutCard-list">
        {cart.map((product) => (
          <CheckoutCard
            key={product.id}
            name={product.name}
            price={product.price}
            imgUrl={product.imgUrl}
            quantity={product.quantity}
            onClick={() => removeFromCart(product.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart