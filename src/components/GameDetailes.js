import React from 'react';
// Styles
import styles from './Styles/GameDetailes.module.css';
// Components
import ConsolImage from './shared/ConsolImage';

const GameDetailes = ({data}) => {
    
    return (
        <div className={styles.container}>
            <img className={styles.background} src={data.background_image} alt="" />
            <div className={styles.infoContainer}>
                <div className={styles.contentInfo}>
                    <div className={styles.platformInfo}>
                        <p>{data.released}</p>
                        <div className={styles.platformName}>
                        {
                        data.parent_platforms.map(item => <ConsolImage key={item.platform.id} data={item.platform.name} />)
                        }
                        </div>
                    </div>
                    <h2>{data.name}</h2>
                    {
                        data.genres.map(item => <span key={item.id}> #{item.name}</span>)
                    }
                    <div className={styles.esrb}>
                        <p>ESRB: <span> {data.esrb_rating.name}</span></p>
                    </div>
                    <div className={styles.update}>
                        <h5>UPDATED: {data.updated}</h5>
                    </div>
                    <div className={styles.gameTags}>
                        <span>Game Tags</span>
                        {
                            data.tags.map(item => <p key={item.id}> #{item.name}</p>)
                        }
                    </div>
                    <div className={styles.btns}>
                        <button>ADD TO WISHLIST</button>
                    </div>
                </div>
                <div className={styles.screenshots}>
                    {
                        data.short_screenshots.map(item => <img key={item.id} src={item.image}  />)
                    }
                </div>
            </div>
        </div>
    );
};

export default GameDetailes;