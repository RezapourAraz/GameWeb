import React from 'react';
// Styles
import styles from '../Styles/GameCart.module.css';
// Icons
import calendar from '../../assets/icons/calendar.svg'
import ConsolImage from './ConsolImage';
import { Link } from 'react-router-dom';

const GameCart = ({itemData}) => {
    

    const { parent_platforms } = itemData;
    
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img src={itemData.background_image} alt="" />
                <div>
                    
                </div>
            </div>
            <div className={styles.names}>
                <h4>{itemData.name}</h4>
            </div>
            <div className={styles.platformName}>
                {
                    parent_platforms.map(item => <ConsolImage key={item.platform.id} data={item.platform.name} />)
                }
            </div>
            <div className={styles.date}>
                <div className={styles.dateTags}>
                    <img src={calendar} alt="" />
                    <p>{itemData.released}</p>
                </div>
                <Link to='/'>See More</Link>
            </div>
        </div>
    );
};

export default GameCart;