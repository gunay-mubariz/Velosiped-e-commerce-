import React,{useState} from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import { Product } from '../components/Product/Product';
import {formatImgUrl} from './utils';
import './Accessories.css';

const Accessories = () => {
  
  const [products,setProducts] = useState([])

  useEffect(() => {
    axios
    .get("http://localhost:5000/api/products")
    .then((res) => setProducts(res.data))
    .catch((err) => console.log(err));
  },[])

  console.log(products)
  
  return (
    <div className='products' >Accessories
        <div className="product">
      {products.map((product) => (
        <Product
          id={product.id}
          price={product.price}
          title={product.title}
          description={product.description}
          image={formatImgUrl(product.productImage)}
        />
      ))}
    </div>
    </div>
  )
}

export default Accessories