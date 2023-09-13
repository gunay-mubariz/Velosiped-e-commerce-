import React from 'react'
import './Button.css'
const Button = ({text,style, onClick}) => {
  return (
    <>
    <button className='default-btn' style={style} onClick={onClick}>{text}</button>
    </>
  )
}

export default Button