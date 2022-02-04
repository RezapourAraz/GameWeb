import React from 'react';
import { useSelector } from 'react-redux';
import GameCart from './shared/GameCart';
// Styles 
import styles from './Styles/GamesList.module.css';

const GamesList = () => {

    const { allGames} = useSelector(state => state.games)

    return (
        <section className={styles.container}>
            <div className={styles.text}>
                <h2>All Games</h2>
            </div>
            <div className={styles.GameCarts}>
                {
                allGames.map(item => <GameCart key={item.id} itemData={item} />)
                }
            </div>
        </section>
    );
};

export default GamesList;