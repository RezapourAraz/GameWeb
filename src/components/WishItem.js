import React from 'react';
import { useDispatch } from 'react-redux';
import wishAction from '../actions/wishAction';
// Styles
import styles from './Styles/WishItem.module.css';

const WishItem = ({data}) => {

    const dispatch = useDispatch(wishAction);

    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img src={data.background_image} alt="" />
            </div>
            <div className={styles.text}>
                <h4>{data.name}</h4>
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