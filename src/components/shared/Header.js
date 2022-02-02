import React from 'react';
// Components
import Hamburger from './navbar/Hamburger';
// Icons
import searchIcon from '../../assets/icons/search1.svg';
import heart from '../../assets/icons/heart.svg';
import userIcon from '../../assets/icons/user.svg';
// Styles
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className={styles.container}>
            <div className={styles.logo}>
                <h3>GAME<span>WEB</span></h3>
            </div>
            <div>
                <Hamburger />
            </div>
            <div className={styles.icons}>
                <div className={styles.searchBtn}>
                    <img src={searchIcon} alt="Search Icon" />
                </div>
                <div className={styles.userBtn}>
                    <img src={userIcon} alt="User Icon" />
                </div>
                <div className={styles.shoppingBtn}>
                    <Link to='/wishlist'><img src={heart} alt="Heart icon" /></Link>
                    <span>1</span>
                </div>
            </div>
        </header>
    );
};

export default Header;