import React, { useState } from 'react';
// Context
import images from '../context/ImagesData';
// Components
import BtnSlider from './shared/slider/BtnSlider';
// Styles
import styled from 'styled-components';

const Section = styled.section`
    width: 1024px;
    height: 500px;
    margin: 40px auto;
    position: relative;
    overflow: hidden;
    box-shadow: 0 10px 20px rgba(0,0,0, .5);
    border-radius: 10px;
    .slide {
        width: 100%;
        height: 100%;
        position: absolute;
        opacity: 0;
        transition: opacity .4s ease-in-out;
        img {
            width:100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .active-anim {
        opacity: 1;
    }
    .title {
        text-align: center;
        align-items: center;
        position: absolute;
        top: 20%;
        left: 7%;
        font-weight: bold;
        color: #222831;
        font-size: 1.5rem;
        background: #ffd369;
        padding: 10px 15px;
        border-top-left-radius: 10px;
        border-bottom-right-radius: 10px;
        transition: all .4s ease-in-out;
    }
    @media (max-width: 768px) {
        width: auto;
        margin: 30px 20px;
        height: 400px;
        .title {
            font-size: 1.2rem;
        }
    }
    @media (max-width: 425px) {
        width: auto;
        height: 300px;
        .title {
            font-size: 1rem;
        }
    }
`;

const Banner = ({items}) => { 
    
    const [ slideIndex, setSlideIndex ] = useState(0);
    const length = images.length;

    const nextSlide = () => {
        setSlideIndex( slideIndex === length -1 ? 0 : slideIndex + 1 )
    }
    const prevSlide = () => {
        setSlideIndex( slideIndex === 0 ? length - 1 : slideIndex - 1)
    }

    return (
        <Section>
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"} />
            {images.map((item, index) => { 
                    return (
                        <div key={item.id} className={ index === slideIndex  ? "slide active-anim" : "slide "}>
                            <span className='title'>{item.title}</span>
                            {
                            index === slideIndex && (<img src={item.image} alt={item.title} />)
                            }
                        </div>
                    )
                })}
            
        </Section>
    );
};

export default Banner;