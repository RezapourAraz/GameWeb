import React from 'react';
import { Link } from 'react-router-dom';
// Styles
import styled from 'styled-components';
const Nav = styled.nav`
    padding: 5px;
    ul {
        display: flex;
        li {
            margin: 0 5px;
            padding: 5px;
            a {
                color: #EEEEEE;
                font-weight: bold;
                transition: .3s ease-in-out;
            &:hover {
                color: #FFD369;
            }
            }
        }
    }
    @media (max-width: 768px) {
        position: absolute;
        top: 0;
        left: 0;
        padding: 10px;
        align-items: center;
        width: 300px;
        height: 100vh;
        transition: .3s ease-in-out;
        z-index: 3;
        background-color: #222831;
        transform: ${({open}) => open ? "translateX(0)" : "translateX(-100%)" };
        ul {
            flex-direction: column;
            align-items: center;
            margin-top: 65px;
            li {
                margin: 15px 0;
            }
        }
    }
    @media (max-width: 425px) {
        width: 100vw;
    }
`;

const Navbar = ({open}) => {
    return (
        <Nav open={open}>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/games'>Games</Link></li>
            </ul>
        </Nav>
    );
};

export default Navbar;