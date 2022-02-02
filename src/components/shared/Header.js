import React, { useContext } from 'react';
// Components
import Hamburger from './navbar/Hamburger';
import { WishContext } from '../../context/WishContextProvider';
// Icons
import searchIcon from '../../assets/icons/search1.svg';
import heart from '../../assets/icons/heart.svg';
import userIcon from '../../assets/icons/user.svg';
// Styles
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {

    const { state } = useContext(WishContext)

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
                <div className={styles.wishBtn}>
                    <Link to='/wishlist'><img src={heart} alt="Heart icon" /></Link>
                    {
                    state.counter >= 1 && <span>{state.counter}</span> 
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;