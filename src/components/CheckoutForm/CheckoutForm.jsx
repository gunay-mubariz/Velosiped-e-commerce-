import React from 'react';
import './CheckoutForm.css'
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import Button from '../Button';
import { CartContext } from '../../CartContext';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';

const CheckoutForm = () => {

    const { register, handleSubmit, formState ,reset } = useForm({
        mode: "onChange",
        defaultValues: {
          email: "",
          firstName: "",
        },
      });

      const { cart, clearCart } = useContext(CartContext);
      const history = useHistory();
      const relocate = () => {
        history.push("/velos");
      };


      const onSubmit = (data) => {
    
        Swal.fire(
          'ВАШ ЗАКАЗ ПОДТВЕРЖДЁН!',
          'Вы подписаны!',
        )
           
            reset(); 
            clearCart();
            relocate();
            
          };

  return (
    <div>
        <form  onSubmit={handleSubmit(onSubmit)} >
        <div> 
          <input
            className="checkout-input"
            {...register("email", {
              pattern: {
                value:  /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                message: "E-mail is invalid",
              },
              required:{
                value:true,
                message:'E-mail is required'
              }
            
            })}
            placeholder="E-mail"
          /> 
         { formState.errors.email&& <div><small className="error">{formState.errors.email.message}</small></div>} 

         <input {...register("firstName", {  
              required:{
                value:true,
                message:'Firstname is required'
              } ,
              pattern: {
                value:  /^[A-Za-z]+$/i,
                message: "Firstname is invalid"
              },
              maxLength: {
                value: 20,
                message: 'Firstname should not exceed 20 characters'
              }
              
              })} />
         { formState.errors.firstName&& <div><small className="error">{formState.errors.firstName.message}</small></div>}  
        </div>
        


          <Button text="Подписаться"  />
        </form>
    </div>
  )
}

export default CheckoutForm