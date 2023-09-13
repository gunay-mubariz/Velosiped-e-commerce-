import React, {useRef} from 'react'
import './Navbar.css'
import { Link } from "react-router-dom"

import { BiSearch } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import Logo from '../../assets/images/velo-logo.png';


const Navbar = () => {

  const OverlayMenuRef = useRef()
  function OpenOverlayMenu(e){
      const clickedBtn = e.target

      if(clickedBtn.classList.contains('burger-menu')){
          // alert('btn klik') ;
          OverlayMenuRef.current.classList.add('active')
      }
  }

  function CloseOverlayMenu(e){
    const clickedBtn = e.target

    if(clickedBtn.classList.contains('cross-icon')){
        // console.log('btn klik') ;
        OverlayMenuRef.current.classList.remove('active')
    }
}

  return (
    <>
        <div className='overlay' ref={OverlayMenuRef}>
       <RxCross2   className='cross-icon' onClick={CloseOverlayMenu}/>
        
        <div className="nav-links">
           <Link className="link-item" to="/" >Главная </Link>
            <Link className="link-item " to="/velos">Велосипеды</Link>
            <Link className="link-item" to="/accessories">Аксессуары</Link>
            <Link className="link-item" to="/ekipirovka">Экипировка</Link>
            <Link className="link-item" to="/spareparts">Запчасти</Link>
            <Link className="link-item" to="/bikestations">Велостанки</Link>
           
        </div>
    </div>



    <div className='navbar black' >
        <div className="logo">
            <img src={Logo} alt="" />
        </div>

        <div className="page-links">
            <Link className="link-item" to="/" >Главная </Link>
            <Link className="link-item " to="/velos">Велосипеды</Link>
            <Link className="link-item" to="/accessories">Аксессуары</Link>
            <Link className="link-item">Экипировка</Link>
            <Link className="link-item" to="/spareparts">Запчасти</Link>
            <Link className="link-item" to="/bikestations">Велостанки</Link>
        </div>

        <div className='icon-links' >
           <Link className="link-item" > <BiSearch/> </Link> 
           <Link className="link-item" > <AiOutlineUser/> </Link> 
           <Link className="link-item" > <AiOutlineHeart/> </Link> 
           <Link className="link-item" > <AiOutlineShoppingCart/> </Link> 
        </div>
            <div className='icon-links-phone' >
           <Link className="link-item" > <BiSearch/> </Link> 
           <Link className="link-item" > <AiOutlineUser/> </Link> 
           <Link className="link-item" > <AiOutlineHeart/> </Link> 
           <Link className="link-item" > <AiOutlineShoppingCart/> </Link> 
            <HiOutlineMenuAlt3 className="link-item burger-menu"  onClick={OpenOverlayMenu}  />
        </div>
      
    </div>  </>
  )
}

export default Navbar