import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// Styles
import styles from './Styles/WishItem.module.css';
// Ccontext
import { WishContext } from '../context/WishContextProvider';

const WishItem = ({data}) => {
    const { dispatch } = useContext(WishContext);

    return (
        <Link to={`/detaile/${data.id}`} className={styles.container}>
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
        </Link>
    );
};

export default WishItem;