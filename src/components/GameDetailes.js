import React, { useContext } from 'react';
// Styles
import styles from './Styles/GameDetailes.module.css';
// Components
import ConsolImage from './shared/ConsolImage';
// Context
import { WishContext } from '../context/WishContextProvider';
// Function
import { isInList } from '../helper/functions';

const GameDetailes = ({data}) => {

    const { state, dispatch } = useContext(WishContext);
    console.log(state);
    const {id} = data
    
    
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
                        {
                        isInList(state, id) ?
                        <button onClick={() => dispatch({type: "ADD_ITEM", payload: data })}>ADD TO WISHLIST</button> :
                        <button onClick={() => dispatch({type: "REMOVE_ITEM", payload: data })}>REMOVE ITEM</button>
                        }
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