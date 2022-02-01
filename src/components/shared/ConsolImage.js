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
    console.log(name);
    return (
        <div className={styles.container}>
            {
                name === "PlayStation" && <img src={PlayStation} alt="" />
            }
            {
                name === "PC" && <img src={PC} alt="" />
            }
            {
                name === "Xbox" && <img src={Xbox} alt="" />
            }
            {
                name === "Nintendo" && <img src={NintendoSwitch} alt="" />
            }
        </div>
    );
};

export default ConsolImage;