import React from 'react';
// Styles
import styles from '../Styles/ConsolImage.module.css';
// Icons
import PlayStation from '../../assets/icons/playstation.svg';
import Xbox from '../../assets/icons/xbox.svg';
import PC from '../../assets/icons/pc.svg';
import NintendoSwitch from '../../assets/icons/nintendo.svg';

const ConsolImage = ({data}) => {
    const name = data
    return (
        <div className={styles.container}>
            {
                name === "PlayStation" && <img className={styles.platform} src={PlayStation} alt="" />
            }
            {
                name === "PC" && <img className={styles.platform} src={PC} alt="" />
            }
            {
                name === "Xbox" && <img className={styles.platform} src={Xbox} alt="" />
            }
            {
                name === "Nintendo" && <img className={styles.platform} src={NintendoSwitch} alt="" />
            }
        </div>
    );
};

export default ConsolImage;