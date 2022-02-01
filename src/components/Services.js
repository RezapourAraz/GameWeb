import React from 'react';
// Icons
import freeDelivery from '../assets/icons/free-delivery.svg';
import moneyBag from '../assets/icons/money-bag.svg';
import moneyPolcy from '../assets/icons/money-policy.svg';
import discount from '../assets/icons/discount.svg';
// Styles
import styles from './Styles/Services.module.css';

const Services = () => {
    return (
        <section className={styles.container}>
            <div>
                <span><img src={freeDelivery} alt="" /></span>
                <h4>Free Delivery</h4>
                <p>Free Shipping On All Order</p>
            </div>
            <div>
                <span><img src={moneyBag} alt="" /></span>
                <h4>Money Return</h4>
                <p>Back Guarantee in 7 days</p>
            </div>
            <div>
                <span><img src={discount} alt="" /></span>
                <h4>Member Discount</h4>
                <p>On every order over $130.00</p>
            </div>
            <div>
                <span><img src={moneyPolcy} alt="" /></span>
                <h4>Return Policy</h4>
                <p>Support 24 hours a day</p>
            </div>
        </section>
    );
};

export default Services;