import { useEffect, useState,useContext } from "react";
import "./SingleProduct.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { formatImgUrl } from "../../pages/utils";
import Button from "../Button";
import Swal from "sweetalert2";

import { CartContext } from "../../CartContext";

const SingleProduct = () => {

  const fault = () => {
    
    Swal.fire('Данного товара нет в наличии')
     
      };
    
  const {products,addToCart} = useContext(CartContext);


  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.log(err));
  }, [id]);

  return (
    <div className="single-page">
      <div className="product-detail">
        <div className="img-container">
          <img
            height="400px"
            width="400px"
            src={formatImgUrl(product?.productImage)}
            alt="product"
          />
        </div>
      </div>
      <div className="product-info">
        <h3 className="name">{product?.name}</h3>
        <p className="brend">{product?.brend}</p>
        {product?.stock !== undefined ? (
          <p className={product.stock ? "in-stock" : "out-of-stock"}>
            {product.stock ? "В наличии" : "Распродано"}
          </p>
        ) : (
          <p className="loading">Loading...</p>
        )}
        <h4 className="single-price">{product?.price} $</h4>
        <p className="single-des">{product?.details}</p>
        <Button className="more-btn"  text="В корзину"         onClick={() => {if(product.stock){addToCart(product.id)} else{fault()} } }
 />
      </div>
    </div>
  );
};

export default SingleProduct;
