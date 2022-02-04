import React from 'react';
import { useSelector } from 'react-redux';
// Components
import GameCart from './shared/GameCart';
// Styles
import styles from './Styles/Popular.module.css';

const Popular = () => {

    const { popular, newGames, upComing} = useSelector(state => state.games)

    return (
        <section className={styles.container}>
            <div className={styles.text}>
                <h2>Upcoming Games</h2>
            </div>
            <div className={styles.GameCarts}>
                {
                upComing.map(item => <GameCart key={item.id} itemData={item} />)
                }
            </div>
            <div className={styles.text}>
                <h2>popular Games</h2>
            </div>
            <div className={styles.GameCarts}>
                {
                popular.map(item => <GameCart key={item.id} itemData={item} />)
                }
            </div>
            <div className={styles.text}>
                <h2>New Games</h2>
            </div>
            <div className={styles.GameCarts}>
                {
                newGames.map(item => <GameCart key={item.id} itemData={item} />)
                }
            </div>
        </section>
    );
};

export default Popular;