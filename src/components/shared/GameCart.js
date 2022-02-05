import React from 'react';
import { Link } from 'react-router-dom';
// Styles
import styles from '../Styles/GameCart.module.css';
// components
import ConsolImage from './ConsolImage';
// Icons
import star1 from '../../assets/icons/star-1.svg';
import star2 from '../../assets/icons/star-2.svg';
import calendar from '../../assets/icons/calendar.svg'


const GameCart = ({itemData}) => {
    const { parent_platforms } = itemData;

    const getStarIcon = () => {
        const star =[];
        const rating = Math.floor(itemData.rating);
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                star.push(<img src={star2} alt="star" />)
            } else {
                star.push(<img src={star1} alt="star" />)
            }
        }
        return star;
    }
    
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img src={itemData.background_image} alt="" />
            </div>
            <div className={styles.names}>
                <h4>{itemData.name}</h4>
            </div>
            <div className={styles.icons}>
                <div className={styles.platformName}>
                    {
                        parent_platforms.map(item => <ConsolImage key={item.platform.id} data={item.platform.name} />)
                    }
                </div>
                <div className={styles.ratingStar}>
                    {getStarIcon()}
                </div>
            </div>
            <div className={styles.date}>
                <div className={styles.dateTags}>
                    <img src={calendar} alt='calendar' />
                    <p>{itemData.released}</p>
                </div>
                <Link to={`/detaile/${itemData.id}`}>Detailes</Link>
            </div>
        </div>
    );
};

export default GameCart;