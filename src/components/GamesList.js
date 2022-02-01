import React, { useContext } from 'react';
// Context
import { GamesContext } from '../context/GamesContextProvider';
import GameCart from './shared/GameCart';
// Styles 
import styles from './Styles/Popular.module.css';

const GamesList = () => {

    const games = useContext(GamesContext);

    return (
        <section className={styles.container}>
            <div className={styles.text}>
                <h2>Games</h2>
            </div>
            <div className={styles.GameCarts}>
                {
                games.map(item => <GameCart key={item.id} itemData={item} />)
                }
            </div>

        </section>
    );
};

export default GamesList;