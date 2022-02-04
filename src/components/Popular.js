import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// Components
import GameCart from './shared/GameCart';
// Styles
import styles from './Styles/Popular.module.css';
import styled from 'styled-components';

const Div = styled.div`
    margin-top: 20px;
    .tablinks {
        
        padding: 10px 15px;
        border: none;
        outline: none;
        background: #393e46;
        color: #eeeeee;
        font-weight: bold;
        cursor: pointer;
        transition: background .2s ease-in-out;
        &:hover {
            background: #453e46;
        }
    }
    .tablinks.active {
        border-top: 2px solid #ffd369;
        background: rgba(0, 0, 0, .2);
        color: #ffd369;
    }
    @media (max-width: 425px ) {
        .tablinks {
            padding: 6px 10px;
            font-size: .6rem;
        }
    }
`;


const Popular = () => {

    const [ tab, setTab ] = useState(1)
    const { popular, newGames, upComing} = useSelector(state => state.games)

    const tabHandler = (index) => {
        setTab(index);
    }

    return (
        <section className={styles.container}>
            <Div>
                <button onClick={() => tabHandler(1)} className={tab === 1 ? 'tablinks active' : 'tablinks' }>Popular Games</button>
                <button onClick={() => tabHandler(2)} className={tab === 2 ? 'tablinks active' : 'tablinks' }>Upcoming Games</button>
                <button onClick={() => tabHandler(3)} className={tab === 3 ? 'tablinks active' : 'tablinks' }>Released Games</button>
            </Div>
            <div className={tab === 1 ? (styles.GameCarts, styles.active) : styles.GameCarts}>
                {
                popular.map(item => <GameCart key={item.id} itemData={item} />)
                }
            </div>
            <div className={tab === 2 ? (styles.GameCarts, styles.active) : styles.GameCarts}>
                {
                upComing.map(item => <GameCart key={item.id} itemData={item} />)
                }
            </div>
            <div className={tab === 3 ? (styles.GameCarts, styles.active) : styles.GameCarts}>
                {
                newGames.map(item => <GameCart key={item.id} itemData={item} />)
                }
            </div>
        </section>
    );
};

export default Popular;