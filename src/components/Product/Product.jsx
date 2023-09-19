import { Link } from "react-router-dom";
import { useState } from "react";

import "./Product.css";
import Button from "../Button";
import { HiCursorClick } from "react-icons/hi";
import { useHistory } from "react-router-dom";

export const Product = ({ id, title,country,stock, price, image, description ,category }) => {
  const [isButtonVisible, setButtonVisible] = useState(false);

  const handleMouseEnter = () => {
    setButtonVisible(true);
  };

  const handleMouseLeave = () => {
    setButtonVisible(false);
  };

  const history = useHistory()
 const relocate = (e) => {
  e.stopPropagation()
  e.preventDefault()
  console.log('added')
 }
  return (
    <Link to={`/products/${id}`} className="productCard" 
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}>
    <div className="card-top" >
    <div className="country-img">
    {category === 'velocycle' && ( <img src={country} alt="country" />)}
      </div>
      <p >{stock}</p>
    </div>
      <div className="img-container">
        <img src={image} alt="product" />
      </div>
      <h4 className="name">{title}</h4>
      <p className="price">{`Цена: ${price}$`}</p>
     
     {isButtonVisible &&  <Button onClick={relocate}  style={{marginLeft:'6px'}}  text={<><HiCursorClick/> В 1 клик</>} /> }
    </Link>
  );
};
