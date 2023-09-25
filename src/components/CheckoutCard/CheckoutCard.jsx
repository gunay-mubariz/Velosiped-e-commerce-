import './CheckoutCard.css';
import { ImBin } from "react-icons/im";


export const CheckoutCard = ({name, price, image, onClick, quantity}) => {
    return (
      <div className='checkoutCard'>
          <div className="img-container">
          <img src={image} alt="product" />
          </div>
          <div className='content'>
              <h4>{name}</h4>
              <h5>{`Цена: ${price}$`}</h5>
              <h5>Kоличество: {quantity} </h5>
          </div>
          <button onClick={onClick} className='btn-delete'> <ImBin/> </button>
      </div>
    )
  }
  