import {useContext} from 'react'
import './Cart.css'
import { CartContext } from '../../CartContext';
import { CheckoutCard } from '../CheckoutCard/CheckoutCard';
import { formatImgUrl } from '../../pages/utils'
import Slider from '../VeloSlider/VeloSlider';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  if(cart.length === 0) {
    return (
      <div>
         <h1 style={{textAlign:'center' , paddingTop:'50px',paddingBottom:'16px'}} >Корзина пуста.</h1>
         <p style={{textAlign:'center'}} >Воспользуйтесь поиском, чтобы найти всё, что нужно.</p>
         <h3 className='similar-text'>ПОХОЖИЕ ТОВАРЫ</h3>
         <Slider/>
      </div>
       
    )
  }

  const findTotalPrice = cart.reduce((acc, product) => acc + (product.price * product.quantity), 0);


  return (
    <div>  <div className='shopping-cart'>
      <h1 className='cart-heading'>КОРЗИНА</h1>

      <div className="cart">
      <div className="checkoutCard-list">
        {cart.map((product) => (
          <CheckoutCard
          key={product.id}
          name={product.name}
          price={product.price}
          image={formatImgUrl(product.productImage)}
          quantity={product.quantity}
          onClick={() => removeFromCart(product.id)}
          />
          ))}
      </div>

      <div className="cart-checkout">
          <div className='total-text'> <h3>Итого</h3>{findTotalPrice} $</div>
          <div className="checkout-form">
            <CheckoutForm/>
          </div>
      </div>

      </div>

    <h3 className='similar-text'>ПОХОЖИЕ ТОВАРЫ</h3>
    </div>
      <Slider/>
     </div>
  );
};

export default Cart