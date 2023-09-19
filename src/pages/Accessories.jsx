import React,{useState} from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import { Product } from '../components/Product/Product';
import {formatImgUrl} from './utils';
import './Accessories.css';

const Accessories = () => {
  
  const [accessories,setAccessories] = useState([])

  useEffect(() => {
    axios
    .get("http://localhost:5000/api/products")
    .then((res) => {
      const data = res.data;

      // Filter products based on category
      const veloaccessoryProducts = data.filter((product) => product.category === 'accessory');

      setAccessories(veloaccessoryProducts);
    })
    .catch((err) => console.log(err));
  },[])

  console.log(accessories)
  
  return ( 
  <div className='accessories'>
    <div className='products' >
    <div className="product">
  {accessories.map((product) => (
    <Product
     
      id={product.id}
      category={product.category}
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
</div>
  )
}

export default Accessories