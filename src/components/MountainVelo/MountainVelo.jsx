import React from "react";
import "./MountainVelo.css";
import MountVelo from "../../assets/images/mountainevelo.png";
import Rama from "../../assets/images/mountain/rama.png";
import Equipment from "../../assets/images/mountain/equipment.png";
import Testing from "../../assets/images/mountain/testing.png";
import Transmission from "../../assets/images/mountain/transmission.png";

import Button from "../Button";
import { useHistory } from "react-router-dom";

const MountainVelo = () => {
  const history = useHistory();
  const relocate = () => {
    history.push("/accessories");
  };

  return (
    <div className="mountain-velo">
      <div className="mountain-header">
        <h2>
          Горные <br /> велосипеды
        </h2>
      </div>
      <div className="mountain-bottom">
        <div className="mountain-right">

          <div className="mountain-right-top">

            <div className="mountain-right-card">
              <div className="card-top">
                <div className="card-top-left">
                  <p>Рама</p>
                </div>
                <div className="card-top-right">
                  <img src={Rama} alt="" />
                </div>
              </div>
              <div className="card-bottom">
                <p>Для удобства можете оплатить товар  картой через сайт</p>
              </div>
            </div>

            <div className="mountain-right-card">
              <div className="card-top">
                 <div className="card-top-left"><p>Бортовой <br /> компьютер</p></div>
                 <div className="card-top-right">
                  <img src={Testing} alt="" />
                </div>
              </div>
              <div className="card-bottom">
                <p>Мы пользуемся всеми популярными видами доставки</p>
              </div>
            </div>
          </div>

          <div className="mountain-right-bottom">
            <div className="mountain-right-card">
              <div className="card-top">
                <div className="card-top-left"> <p>Трансмиссия</p></div>
                <div className="card-top-right">
                  <img src={Transmission} alt="" />
                </div>
              </div>
              <div className="card-bottom">
                <p>Мы пользуемся всеми популярными видами доставки</p>
              </div>
            </div>

            <div className="mountain-right-card">
              <div className="card-top">
                <div className="card-top-left"> <p>Оборудование</p></div>
                <div className="card-top-right">
                  <img src={Equipment} alt="" />
                </div>
              </div>
              <div className="card-bottom">
                <p>Мы пользуемся всеми популярными видами доставки</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mountain-left">
          <img src={MountVelo} alt="" />
          <div>
            <p>
              Горный велосипед несмотря на свое название часто и активно
              используются в условиях города, так как обладает рядом
              характеристик, позволяющих сделать велопрогулку максимально
              приятной и комфортной
            </p>
          </div>
          <Button text="Каталог" onClick={relocate} />
        </div>
      </div>
    </div>
  );
};

export default MountainVelo;
