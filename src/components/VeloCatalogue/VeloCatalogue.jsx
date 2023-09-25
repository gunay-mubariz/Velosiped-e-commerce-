import React,{useState} from "react";
import "./VeloCatalogue.css";
import Button from '../Button';
import Colors from "../ColorsFilter/Colors";
import Accordion from "../Accordion";
import VeloProduct from "../VeloProduct/VeloProduct";

import ReactSlider from 'react-slider'

import { useForm } from "react-hook-form";

const VeloCatalogue = () => {

  const {  handleSubmit,register,reset } = useForm({
    mode: "onSubmit",
  });

  const defaultSliderValue = [0, 2000];
  const [sliderValue, setSliderValue] = useState(defaultSliderValue);
  const handleSliderChange = (value) => {
    setSliderValue(value);
  };
  const resetSliderValues = () => {
    setSliderValue(defaultSliderValue); 
  };

 

  
  const onSubmit = (data) => {
    console.log("filter:", data); 
    reset();
    resetSliderValues();
  };
    

  return (
    <div className="velo-catalogue">
      <form onSubmit={handleSubmit(onSubmit)} >
        
      <div className="left-velo-catalogue">
        <div className="switch-sec">
          <p>Только в наличии</p>
          <div>
            <label className="switch">
              <input type="checkbox" {...register("switch")} />
              <span className="slider round"></span>
            </label>
          </div>
        </div>

        <Accordion className="filter"
        title="Категории товара"
        content={<> <input type="checkbox" {...register("vehicle1")} id="vehicle1"  value="Bike"/>
        <label htmlFor="vehicle1"> Велосипеды для триатлона</label><br/>
        <input type="checkbox" id="vehicle2" {...register("vehicle2")} value="Car"/>
        <label htmlFor="vehicle2"> Горные велосипеды</label><br/>
        <input type="checkbox" id="vehicle3" {...register("vehicle3")} value="Boat"/>
        <label htmlFor="vehicle3"> Городские велосипеды</label><br/> 
        <input type="checkbox" id="vehicle4" {...register("vehicle4")} value="Boat"/>
        <label htmlFor="vehicle4"> Гравийные велосипеды</label><br/>
        <input type="checkbox" id="vehicle5" {...register("vehicle5")} value="Boat"/>
        <label htmlFor="vehicle5"> Двухподвесные велосипеды</label><br/></>}
      />
      <Accordion 
        title="Цена"
        content={   <ReactSlider
        onChange={handleSliderChange}
          className="horizontal-slider"
          thumbClassName="example-thumb"
          trackClassName="example-track"
          value={sliderValue}
          min={200}
          max={2000}
          ariaLabel={['Lower thumb', 'Upper thumb']}
          ariaValuetext={state => `Thumb value ${state.valueNow}`}
          renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
          pearling
          minDistance={100}
      />}
      />
      <Accordion
        title="Бренд"
        content={
            <> <input type="checkbox" id="vehicle6" {...register("vehicle6")} value="Bike"/>
            <label htmlFor="vehicle6"> Bianci</label><br/>
            <input type="checkbox" id="vehicle7" {...register("vehicle7")} value="Car"/>
            <label htmlFor="vehicle7"> BMC</label><br/>
            <input type="checkbox" id="vehicle8" {...register("vehicle8")} value="Boat"/>
            <label htmlFor="vehicle8"> Ciclistino</label><br/> 
            <input type="checkbox" id="vehicle9" {...register("vehicle9")} value="Boat"/>
            <label htmlFor="vehicle9"> Cipollini</label><br/>
            <input type="checkbox" id="vehicle10" {...register("vehicle10")} value="Boat"/>
            <label htmlFor="vehicle10"> Colnago</label><br/></>}
      />
      <Accordion
        title="Материал рамы"
        content={<>
             <input type="checkbox" id="vehicle11" {...register("vehicle11")} value="Boat"/>
        <label htmlFor="vehicle11"> Алюминий</label><br/> 
        <input type="checkbox" id="vehicle12" {...register("vehicle12")} value="Boat"/>
        <label htmlFor="vehicle12"> Карбон</label><br/>
        <input type="checkbox" id="vehicle13" {...register("vehicle13")} value="Boat"/>
        <label htmlFor="vehicle13"> Сталь</label><br/>
        </>}
      />
      <Accordion
        title="Цвет"
        content={<><Colors/></>}
      /> 

       <div style={{display:'flex', justifyContent:'center'}}> <Button text="Сбросить фильтры" style={{backgroundColor: 'transparent',color: '#000', border: '1px solid #E5E5E5' }}/> </div>
      </div>
      </form>

      <div className="right-velo-catalogue">
      <VeloProduct/>
         </div>
        
    </div>
  );
};

export default VeloCatalogue;
