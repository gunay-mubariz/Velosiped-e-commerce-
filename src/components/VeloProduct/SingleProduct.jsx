import { useEffect, useState } from "react";
import "./SingleProduct.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { formatImgUrl } from "../../pages/utils";

const SingleProduct = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="single-page">
    <div className="ProductDetail">
      <div className="img-container">
        <img height="400px" width="400px" src={formatImgUrl(product?.productImage)} alt="product" />
      </div>
      <h3 className="name">{product?.name}</h3>
      <h4 className="price">{`Цена: ${product?.price}$`}</h4>
      <p className="des">{product?.description}</p>
    </div>
    </div>
  );
};

export default SingleProduct;
