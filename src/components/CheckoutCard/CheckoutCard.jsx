import './CheckoutCard.css'



export const CheckoutCard = ({name, price, imgUrl, onClick, quantity}) => {
    return (
      <div className='checkoutCard'>
          <div className="img-container">
          <img src={imgUrl} alt="product" />
          </div>
          <div className='content'>
              <h3>{name}</h3>
              <h4>{`Price: ${price}$`}</h4>
              <h4>Quantity: {quantity} </h4>
          </div>
          <button onClick={onClick} className='btn error'>Delete X</button>
      </div>
    )
  }
  