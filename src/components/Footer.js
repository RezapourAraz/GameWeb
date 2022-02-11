import React from 'react';
import { Link } from 'react-router-dom';
// Styles
import styles from './Styles/Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.container}>
            <div className={styles.footercContainer}>
                <div className={styles.logo}>
                    <h2>GAME<span>WEB</span></h2>
                </div>
                <nav>
                    <ul>
                        <h3>Menu</h3>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/'>Games</Link></li>
                        <li><Link to='/'>Wish List</Link></li>
                    </ul>
                </nav>
                <nav>
                    <ul>
                        <h3>Menu</h3>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/'>Games</Link></li>
                        <li><Link to='/'>Wish List</Link></li>
                    </ul>
                </nav>
                <div className={styles.news}>
                    <label>Newslater</label>
                    <span>Get News on your Email</span>
                    <div>
                        <input type="email" placeholder='Enter Your Email Address' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
            <div className={styles.created}>
                <h5>This Template Created by <span>Vahed Rezapour</span></h5>
            </div>
        </footer>
    );
};

export default Footer;