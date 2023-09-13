import { Link } from "react-router-dom";
import "./Product.css";


export const Product = ({ id, title, price, image, description }) => {
  return (
    <Link to={`/products/${id}`} className="productCard">
      <div className="img-container">
        <img src={image} alt="product" />
      </div>
      <h3 className="name">{title}</h3>
      <h4 className="price">{`Price: ${price}$`}</h4>
      <p className="des">{description}</p>
    </Link>
  );
};
