import React,{useState} from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import { Product } from '../Product/Product';
import {formatImgUrl} from '../../pages/utils';

import './VeloProduct.css'

const VeloProduct = () => {
  
const [products,setProducts] = useState([])

useEffect(() => {
  axios
  .get("http://localhost:5000/api/products")
  .then((res) => setProducts(res.data))
  .catch((err) => console.log(err));
},[])

console.log(products)



return (
  <div className='products' >
      <div className="product">
    {products.map((product) => (
      <Product
       
        id={product.id}
        country={formatImgUrl(product.country)}
        stock={product.stock ? (
          <p className="in-stock">В наличии</p>
        ) : (
          <p className="out-of-stock">Распродано</p>
        )}
        
        price={product.price}
        title={product.name}
        image={formatImgUrl(product.productImage)}
         /> 
    ))}
   
  </div>
  </div>
)
}
export default VeloProduct