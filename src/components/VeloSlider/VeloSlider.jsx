import React,{useEffect,useState} from 'react';
import 'swiper/swiper-bundle.css';
import  { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { formatImgUrl } from '../../pages/utils';
import { Product } from '../Product/Product';
import axios from 'axios';
import './VeloSlider.css'

const Slider = () => {

    const [products,setProducts] = useState([])

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
        500: {
          slidesPerView: 1,
          spaceBetween: 20,
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
      {products.map((product) => (
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
          />
        </SwiperSlide>
      ))}
    </Swiper>   </div>
  ); 
} 

export default Slider;
