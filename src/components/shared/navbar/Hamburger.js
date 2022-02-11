import React, { useState } from 'react';
// Components
import Navbar from './Navbar';
// Styles
import styled from 'styled-components';
const Div = styled.div`
    display: none;
    padding: 1px;
    div {
        width: 2rem;
        height: .4rem;
        margin: .25rem;
        background: #EEEEEE;
        border-radius: 5px;
        &:nth-child(2) {
            width: 1.6rem;
        }
    }
    @media (max-width: 768px) {
        display: block;
        position: ${({open}) => open ? "fixed" : "absolute" };
        top: 10px;
        left: 15px;
        z-index: 5;
        cursor: pointer;
        div {
            transition: .3s ease-in-out;
            transform-origin: 1px;
            &:nth-child(1) {
                transform: ${({open}) => open ? "rotate(45deg)" : "rotate(0)" };
            }
            &:nth-child(2) {
                transform: ${({open}) => open ? "translateX(-100%)" : "translateX(0)" };
                opacity: ${({open}) => open ? "0" : "1" };
            }
            &:nth-child(3) {
                transform: ${({open}) => open ? "rotate(-45deg)" : "rotate(0)" };
            }
        }
    }
`;

const Hamburger = () => {

    const [ open, setOpen ] = useState(false);

    return (
        <>
            <Div open={open} onClick={() => setOpen(!open)}>
                <div></div>
                <div></div>
                <div></div>
            </Div>
            <Navbar open={open} />
        </>
    );
};

export default Hamburger;