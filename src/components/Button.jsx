import React from 'react'
import './Button.css'
const Button = ({text,style, onClick,className}) => {
  return (
    <>
    <button className={`default-btn ${className}`} style={style} onClick={onClick}>{text}</button>
    </>
  )
}

export default Button