import React from 'react';
import { useSelector } from 'react-redux';
// Styles
import styles from './Styles/WishCart.module.css';
// Components
import WishItem from './WishItem';

const WishCart = () => {

    const { wishlist } = useSelector(state => state.wishList)

    return (
        <section className={styles.container}>
            <div className={styles.title}>
                <h2>Your Wishlist</h2>
                
            </div>
                {
                wishlist === '' ? <h3>No Item</h3> : wishlist.map(item => <WishItem key={item.id} data={item} />)
                }
        </section>
    );
};

export default WishCart;