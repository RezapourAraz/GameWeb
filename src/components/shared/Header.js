import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// Components
import Hamburger from './navbar/Hamburger';
import Search from './Search';
// Icons
import heart from '../../assets/icons/heart.svg';
import userIcon from '../../assets/icons/user.svg';
// Styles
import styles from '../Styles/Header.module.css';

const Header = () => {

    const counter = useSelector(state => state.wishList.counter)

    return (
        <header className={styles.container}>
            <div className={styles.logo}>
                <h3>GAME<span>WEB</span></h3>
            </div>
            <div>
                <Hamburger />
            </div>
            <div className={styles.icons}>
                <Search />
                <div className={styles.userBtn}>
                    <img src={userIcon} alt="User Icon" />
                </div>
                <div className={styles.wishBtn}>
                    <Link to='/wishlist'><img src={heart} alt="Heart icon" /></Link>
                    {
                        counter >= 1 && <span>{counter}</span>
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;