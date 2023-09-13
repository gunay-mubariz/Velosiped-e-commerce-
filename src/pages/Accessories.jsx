import React,{useState} from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import { Product } from '../components/Product/Product';


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
    <div>Accessories
        <div className="home">
      {products.map((product) => (
        <Product
          id={product.id}
          price={product.price}
          title={product.title}
          description={product.description}
          image={product.image}
        />
      ))}
    </div>
    </div>
  )
}

export default Accessories