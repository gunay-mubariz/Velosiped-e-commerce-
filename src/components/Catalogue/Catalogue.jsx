import React from "react";
import { Link } from "react-router-dom";
import './Catalogue.css'

const Catalogue = () => {
  return (
    <div className="catalogue">
        <h2>Каталог</h2>

      <div className="links options">
        <div className="link a">
            <Link className="catalogue-text"  to="/velos" >Велосипеды</Link>
         </div>
        <div className="link b">
            <Link className="catalogue-text"  to="/velos" >Trade-in</Link>
        </div>
        <div className="link c">
            <Link className="catalogue-text"  to="/spareparts" >Запчасти</Link>
        </div>
        <div className="link d">
            <Link className="catalogue-text" to="/accessories" >Аксессуары</Link>
        </div>
        <div className="link e">
            <Link  className="catalogue-text" to="/spareparts" >Экипировка</Link>
        </div>
        <div className="link f">
            <Link className="catalogue-text" to="/bikestations" >Велостанки</Link>
        </div>
      </div>

    </div>
  );
};

export default Catalogue;
