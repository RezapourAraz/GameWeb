import React, { useContext } from 'react';
// Context
import { GamesContext } from '../context/GamesContextProvider';
// Components
import GameCart from './shared/GameCart';
// Styles
import styles from './Styles/Popular.module.css';

const Popular = () => {

    const populars = useContext(GamesContext);
    console.log(populars);

    return (
        <section className={styles.container}>
            <div className={styles.text}>
                <h2>New Released</h2>
            </div>
            <div className={styles.GameCarts}>
                {
                populars.map(item => <GameCart key={item.id} itemData={item} />)
                
                }
            </div>
        </section>
    );
};

export default Popular;