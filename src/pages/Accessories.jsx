import React,{useState,useContext} from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import { Product } from '../components/Product/Product';
import {formatImgUrl} from './utils';
import './Accessories.css';
import { CartContext } from '../CartContext';
import Swal from "sweetalert2";
import { ToastContainer } from 'react-toastify';
import { notify } from '../components/notify';

const Accessories = () => {

  const fault = () => {
    
    Swal.fire('Данного товара нет в наличии')
     
      };
    
  const {products,addToCart} = useContext(CartContext);

  
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
      onClick={() => {if(product.stock){addToCart(product.id);notify()} else{fault()} } }
       /> 
  ))}
 <ToastContainer/>
</div>
</div>
</div>
  )
}

export default Accessories