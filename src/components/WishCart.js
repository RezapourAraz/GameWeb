import React, { useContext } from 'react';
// Styles
import styles from './Styles/WishCart.module.css';
// Context
import { WishContext } from '../context/WishContextProvider';
// Components
import WishItem from './WishItem';

const WishCart = () => {

    const { state, dispatch } = useContext(WishContext);

    return (
        <section className={styles.container}>
            <div className={styles.title}>
                <h2>Your Wishlist</h2>
            </div>
            
                {
                state.wishList === '' ? <h3>No Item</h3> : state.wishList.map(item => <WishItem key={item.id} data={item} />)
                }
        </section>
    );
};

export default WishCart;