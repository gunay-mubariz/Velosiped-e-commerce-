import React,{useEffect,useState,useContext} from 'react';
import 'swiper/swiper-bundle.css';
import  { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { formatImgUrl } from '../../pages/utils';
import { Product } from '../Product/Product';
import axios from 'axios';
import './VeloSlider.css'
import { CartContext } from '../../CartContext';
import Swal from "sweetalert2";

const Slider = () => {
  const fault = () => {
    
    Swal.fire('Данного товара нет в наличии')
     
      };
    
  const {products,addToCart} = useContext(CartContext);


    const [slideproducts,setProducts] = useState([])

useEffect(() => {
  axios
  .get("http://localhost:5000/api/products")
  .then((res) => setProducts(res.data))
  .catch((err) => console.log(err));
},[])


  return ( 
    <div className='velo-slide' >
    <Swiper
      spaceBetween={20}
      slidesPerView={3}
      centeredSlides={true}
      autoplay={{
        delay: 1500,
      }}

          
      breakpoints={{
        375: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}

      modules={[Autoplay]}
    >
      {slideproducts.map((product) => (
        <SwiperSlide key={product.id}>
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
            onClick={() => {if(product.stock){addToCart(product.id)} else{fault()} } }
          />
        </SwiperSlide>
      ))}
    </Swiper>   </div>
  ); 
} 

export default Slider;
