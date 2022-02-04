import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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
                wishlist.length === 0 ? <h3 className={styles.text}>Empty</h3> : wishlist.map(item => <WishItem key={item.id} data={item} />)
                }
            <Link className={styles.btn} to='/'>Back To Home</Link>
        </section>
    );
};

export default WishCart;