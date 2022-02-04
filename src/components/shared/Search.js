import React, { useState } from 'react';
// Icons
import searchIcon from '../../assets/icons/search1.svg';
// Styles
import styled from 'styled-components';
// Context

import SearchBox from './SearchBox';

const Div = styled.div`
    transition: all .3s ease-in-out;
    img {
        cursor: pointer;
    }
    .input {
        top: 65px;
        width: 100%;
        left: 0%;
        position: absolute;
        height: fit-content;
        padding: 2px 0;
        transform: ${({open}) => open ? "translateY(0)" : "translateY(-110%)"} ;
        opacity: ${({open}) => open ? "1" : "0"} ;
        border-radius: 15px;
        z-index:-5;
        transition: all .3s ease-in-out;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: rgba(0, 0, 0, .3);
        input {
            width: 50%;
            padding: 7px 10px;
            border: none;
            outline: none;
            border-radius: 20px;
            background: #EEEEEE;
        }
        .searchbox {
            display:flex;
            flex-direction: column;
            width: 50%;
            margin-top: 7px;
            padding: 5px;
            max-height: 200px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            overflow: auto;
            background: #EEEEEE;
            border-radius: 10px;
            box-shadow: 0px 5px 10px rgba(0, 0, 0, .3)
        }
    }
    @media (max-width: 768px) {
        .input {
            top: 65px;
            width: 100%;
        }
    }
    @media (max-width: 500px) {
        .input {
            top: 65px;
            width: 100%;
            left: 0;
        }
    }
`;

const Search = () => {

    const [ open, setOpen ] = useState(false);
    const [ search, setSearch ] = useState("");

    const changeHandler = e => {
        setSearch(e.target.value)
    }
    
    // const searched = games.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    // console.log(searched);
    return (
        <Div  open={open}>
            <img onClick={() => setOpen(!open)} src={searchIcon} alt="Search Icon" />
            <div className="input">
                <input type="text" placeholder='Search...' onChange={changeHandler} value={search} />
                {
                search.length === 0 ? null : 
                <div className='searchbox'>
                    
                </div>
                } 
            </div>
        </Div>
    );
};

export default Search;