import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css'
import Logo from '../../assets/images/velo-logo.png';
import { LuSmartphone } from "react-icons/lu";
import { TbLocation } from "react-icons/tb";
import { FiMail } from "react-icons/fi";


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-info">
          <div className="logo">
            <img src={Logo} alt="" />
            <p>Компания World-bikes специализируется на продаже товаров для велосипедного спорта.</p>
          </div>
          <div className="footer-text"></div>
        </div>

        <div className="footer-catalogue">
          <h2>Каталог</h2>
        <div className="footer-page-links">
            <Link className="link-item" to="/" >Главная </Link>
            <Link className="link-item " to="/velos">Велосипеды</Link>
            <Link className="link-item" to="/accessories">Аксессуары</Link>
            <Link className="link-item">Экипировка</Link>
            <Link className="link-item" to="/spareparts">Запчасти</Link>
            <Link className="link-item" to="/bikestations">Велостанки</Link>
        </div>
        </div>

        <div className="footer-clients">
        <h2>Для клиента</h2>
        <div className="footer-page-links">
            <Link className="link-item" to="/" >О нас </Link>
            <Link className="link-item " to="/velos">Доставка и оплата</Link>
            <Link className="link-item" to="/accessories">Блог</Link>
            <Link className="link-item">Хранение</Link>
            <Link className="link-item" to="/spareparts">Контакты</Link>
            <Link className="link-item" to="/bikestations">Веломастерская</Link>
            <Link className="link-item" to="/bikestations">Гарантии</Link>
        </div>
        </div>

        <div className="footer-contacts">
        <h2>Контакты</h2>
        <div className="footer-page-links">
            <Link onClick={()=>window.location='tel:+7(495)055-75-86'} className="link-item" to="/" ><LuSmartphone className='footer-icon' /> <div>+7(495)055-75-86</div> </Link>
            <Link onClick={()=>window.location='geo:40.726966,-74.006076'} className="link-item " to="#"><TbLocation className='footer-icon'/> <div>г. Москва, ул. Доватора, 7/8 с1</div></Link>
            <Link onClick={()=>window.location='mailto:order@world-bike.ru'} className="link-item" to="#"><FiMail className='footer-icon'/><div> order@world-bike.ru</div></Link>
            
        </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="copyright-sector">
          <span style={{textTransform:'uppercase'}} > &copy; {new Date().getFullYear()} world bike</span> <span>Пользовательское соглашение</span>
        </div>
      </div>
    </div>
  )
}

export default Footer