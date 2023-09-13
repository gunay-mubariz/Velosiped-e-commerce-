import React,{ useState, useEffect } from "react";
import { IoIosArrowDropupCircle } from "react-icons/io";
import './ScrollToTopBtn.css';


const ScrollToTopBtn = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        });
    }, []);

    const goTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };


  return (
    <button className="btn-scrollTop" style={{display: isVisible ? 'block':'none'}} onClick={goTop} >
      <IoIosArrowDropupCircle style={{color: '#D75702'}} />
    </button>
  );
};

export default ScrollToTopBtn;
