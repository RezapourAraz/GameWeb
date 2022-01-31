import React from 'react';
// Icons
import rightArrow from '../../../assets/icons/right-arrow.svg';
import leftArrow from '../../../assets/icons/left-arrow.svg';
// Styles
import styles from '../../Styles/BtnSlider.module.css';

const BtnSlider = ({direction, moveSlide}) => {
    return (
        <button onClick={moveSlide} className={direction === "next" ? styles.btnSlideNext : styles.btnSlidePrev }>
            <img src={direction === "next" ? rightArrow : leftArrow} alt='btns'/>
        </button>
    );
};

export default BtnSlider;