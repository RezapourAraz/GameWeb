import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import wishAction from '../actions/wishAction';
// Styles
import styles from './Styles/GameDetailes.module.css';
// Components
import ConsolImage from './shared/ConsolImage';
// Function
import { isInList } from '../helper/functions';

const GameDetailes = ({data}) => {

    const { wishlist } = useSelector(state => state.wishList);
    const {id} = data
    const dispatch = useDispatch(wishAction)
    
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
                        <p>ESRB: <span>{data.esrb_rating}</span></p>
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
                        isInList(wishlist, id) ?
                        <button className={styles.add} onClick={() => dispatch({type: "ADD_ITEM", payload: data })}>ADD TO WISHLIST</button> :
                        <button className={styles.remove} onClick={() => dispatch({type: "REMOVE_ITEM", payload: data })}>REMOVE ITEM</button>
                        }
                    </div>
                </div>
                <div className={styles.screenshots}>
                    {
                        data.short_screenshots.map(item => <img key={item.id} src={item.image} alt="game Screenshots"  />)
                    }
                </div>
            </div>
        </div>
    );
};

export default GameDetailes;