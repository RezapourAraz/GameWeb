import React from 'react';
import { useDispatch } from 'react-redux';
import wishAction from '../actions/wishAction';
import { Link } from 'react-router-dom';
// Styles
import styles from './Styles/WishItem.module.css';
// Icons
import star1 from '../assets/icons/star-1.svg';
import star2 from '../assets/icons/star-2.svg';

const WishItem = ({data}) => {

    const dispatch = useDispatch(wishAction);

    const getStarIcon = () => {
        const star =[];
        const rating = Math.floor(data.rating);
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
                <img src={data.background_image} alt={data.name} />
            </div>
            <div className={styles.text}>
                <Link to={`/detaile/${data.id}`}><h4>{data.name}</h4></Link>
                <div className={styles.ratingStar}>
                    {getStarIcon()}
                </div>
            </div>
            <div className={styles.btns}>
                {
                <button onClick={() => dispatch({type: "REMOVE_ITEM", payload: data})}>REMOVE ITEM</button>
                }
            </div>
        </div>
    );
};

export default WishItem;