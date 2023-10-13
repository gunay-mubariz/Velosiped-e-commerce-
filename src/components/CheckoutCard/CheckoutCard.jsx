import { useContext } from 'react';
import './CheckoutCard.css';
import { ImBin } from "react-icons/im";
import {CartContext} from '../../CartContext'


export const CheckoutCard = ({name, price, image, onClick, quantity,onDecrease ,onIncrease}) => {

  const handleIncrease = () => {
    onIncrease(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      onDecrease(quantity - 1);
    }
  };


    return (
      <div className='checkoutCard'>
          <div className="img-container">
          <img src={image} alt="product" />
          </div>
          <div className='content'>
              <h4>{name}</h4>
              <h5>{`Цена: ${price}$`}</h5>
              <div className='quantity-btns'>
              <button className='inc-btn' onClick={handleDecrease}>-</button>
              <span style={{color: '#777' }} >{quantity}</span>
              <button className='dec-btn' onClick={handleIncrease}>+</button> 

              </div>
          </div>
          <button onClick={onClick} className='btn-delete'> <ImBin/> </button>
      </div>
    )
  }
  