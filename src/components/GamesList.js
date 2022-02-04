import React from 'react';
import { useSelector } from 'react-redux';
import GameCart from './shared/GameCart';
// Styles 
import styles from './Styles/Popular.module.css';

const GamesList = () => {

    // const games = useContext(GamesContext);
    const { popular, upComing, newGames} = useSelector(state => state.games)

    return (
        <section className={styles.container}>
            <div className={styles.text}>
                <h2>All Games</h2>
            </div>
            <div className={styles.GameCarts}>
                {
                popular.map(item => <GameCart key={item.id} itemData={item} />)
                }
            </div>
            <div className={styles.GameCarts}>
                {
                upComing.map(item => <GameCart key={item.id} itemData={item} />)
                }
            </div>
            <div className={styles.GameCarts}>
                {
                newGames.map(item => <GameCart key={item.id} itemData={item} />)
                }
            </div>

        </section>
    );
};

export default GamesList;