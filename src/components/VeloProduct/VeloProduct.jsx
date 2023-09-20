import React,{useState,useContext} from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import { Product } from '../Product/Product';
import {formatImgUrl} from '../../pages/utils';
import Swal from "sweetalert2";

import { CartContext } from '../../CartContext';


import './VeloProduct.css'

const VeloProduct = () => {

  const fault = () => {
    
    Swal.fire('Данного товара нет в наличии')
     
      };
    

const {products,addToCart} = useContext(CartContext);
  
const [velos,setVelos] = useState([])

useEffect(() => {
  axios
  .get("http://localhost:5000/api/products")
  .then((res) => {
    const data = res.data;

    // Filter products based on category
    const velocycleProducts = data.filter((product) => product.category === 'velocycle');
    

    setVelos(velocycleProducts);
  })
  .catch((err) => console.log(err));
},[])

console.log(velos)



return (
  <div className='products' >
      <div className="product">
    {velos.map((product) => (
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
        onClick={() => {if(product.stock){addToCart(product.id)} else{fault()} } }
         /> 
    ))}
   
  </div>
  </div>
)
}
export default VeloProduct