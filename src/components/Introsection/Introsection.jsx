import React from 'react'
import Button from '../Button'
import './Introsection.css'
import { useHistory } from "react-router-dom";



const Introsection = () => {
 const history = useHistory()
 const relocate = () => { history.push('/velos')}

  return (
    <div className='introsection'>
      <div className="intro-text">
        <h2>Электро <br /> велосипеды</h2>
        <p>Cento10 Hybrid — это гоночный велосипед с помогающим педалированию электроприводом, который устанавливает новый, очень высокий стандарт для данной категории</p>
     <Button text="Подробнее" onClick={relocate} />
  
    
      </div>
    </div>
  )
}

export default Introsection