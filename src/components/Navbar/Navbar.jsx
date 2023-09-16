import React, {useRef,useState} from 'react'
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
function CloseOv(e){
    const clickedBtn = e.target

    if(clickedBtn.classList.contains('ov')){
        // console.log('btn klik') ;
        OverlayMenuRef.current.classList.remove('active')
    }
}

const [showSearchInput, setShowSearchInput] = useState(false);

const toggleSearchInput = () => {
  setShowSearchInput(!showSearchInput);
};


  return (
    <>
        <div className='overlay' ref={OverlayMenuRef}>
       <RxCross2   className='cross-icon' onClick={CloseOverlayMenu}/>
        
        <div className="nav-links">
           <Link className="link-item ov" to="/" onClick={CloseOv} >Главная </Link>
            <Link className="link-item ov" to="/velos" onClick={CloseOv}>Велосипеды</Link>
            <Link className="link-item ov" to="/accessories" onClick={CloseOv}>Аксессуары</Link>
            <Link className="link-item ov" to="/equipment" onClick={CloseOv}>Экипировка</Link>
            <Link className="link-item ov" to="/spareparts" onClick={CloseOv}>Запчасти</Link>
            <Link className="link-item ov" to="/bikestations" onClick={CloseOv}>Велостанки</Link>
           
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
            <Link className="link-item" to="/equipment">Экипировка</Link>
            <Link className="link-item" to="/spareparts">Запчасти</Link>
            <Link className="link-item" to="/bikestations">Велостанки</Link>
        </div>

    <div className='forsearch'>      <div className='icon-links' >
           <button className="link-item" > <BiSearch onClick={toggleSearchInput} /> </button>  
           <Link className="link-item" to='/signup' > <AiOutlineUser/> </Link> 
           <Link className="link-item" > <AiOutlineHeart /> </Link> 
           <Link className="link-item" to="/cart" > <AiOutlineShoppingCart/> </Link> 
        </div> 
        {showSearchInput && (
        <input type="text" placeholder="Search..." /> 
      )}
      </div>
        <div className='icon-links-phone' >
           <Link className="link-item" > <BiSearch/> </Link> 
           <Link className="link-item" > <AiOutlineUser/> </Link> 
           <Link className="link-item" > <AiOutlineHeart/> </Link> 
           <Link className="link-item" > <AiOutlineShoppingCart/> </Link> 
            <HiOutlineMenuAlt3 className="link-item burger-menu" style={{cursor: 'pointer'}}  onClick={OpenOverlayMenu}  />
        </div>
      
    </div>  </>
  )
}

export default Navbar