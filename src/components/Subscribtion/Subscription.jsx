import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import "./Subscription.css";
import Newsletter from "../../assets/images/subscriptionbg.png";
import Button from "../Button";

const Subscription = () => {





  const { register, handleSubmit, formState ,reset } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      subscribe: false,
    },
  });
  // console.log(formState.errors);
  

  const onSubmit = (data) => {
    
Swal.fire(
  'Oтлично!',
  'Вы подписаны!',
  'success'
)
 // Log form data to the console
    reset(); // Reset the form fields
  };



  return (
    <div className="subscription">
      <div className="left-side">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Подпишитесь на наши новости</h2>
          <div className="form-sec">

          <div className="form-left">
           <input
            className="subscribe-input"
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
                 {
                formState.errors.email&& <div><small className="err">{formState.errors.email.message}</small></div>
              }
          <div className="agree-checkbox">
            <input
              type="checkbox"
              {...register("subscribe", {
                required: {
                  value: true,
                  message: "Please check this box if you want to proceed",
                },
              })}
              id="subscribe"
              />
            <label htmlFor="subscribe">
              Согласен(на) на обработку персональных данных
            </label>
              {
                formState.errors.subscribe&& <div><small className="err">{formState.errors.subscribe.message}</small></div>
              }
          </div>

          </div>

          <div className="form-right">

          <Button text="Подписаться"  />
          </div>


          </div>

          

        </form>
      </div>
      <div className="right-side">
        <img src={Newsletter} alt="" />
      </div>
    </div>
  );
};

export default Subscription;
