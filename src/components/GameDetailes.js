import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import wishAction from '../actions/wishAction';
// Styles
import styles from './Styles/GameDetailes.module.css';
// Components
import ConsolImage from './shared/ConsolImage';
// Function
import { isInList } from '../helper/functions';
// Icons
import star1 from '../assets/icons/star-1.svg';
import star2 from '../assets/icons/star-2.svg';

const GameDetailes = ({data}) => {

    const { wishlist } = useSelector(state => state.wishList);
    const { id } = data;
    const dispatch = useDispatch(wishAction);
    const navigate = useNavigate();

    const getStarIcon = () => {
        const star =[];
        const rating = Math.floor(data.rating);
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                star.push(<img src={star2} alt="star" />)
            } else {
                star.push(<img src={star1} alt="star" />)
            }
        }
        return star;
    }

    return (
        <div className={styles.container}>
            <img className={styles.background} src={data.background_image} alt="" />
            <div className={styles.infoContainer}>
                <div className={styles.contentInfo}>
                    <div className={styles.platformInfo}>
                        <div className={styles.infos}>
                            <p>{data.released}</p>
                            <div className={styles.platformName}>
                            {
                            data.parent_platforms.map(item => <ConsolImage key={item.platform.id} data={item.platform.name} />)
                            }
                            </div>
                        </div>
                        <div className={styles.ratingStar}>
                        {getStarIcon()}
                        </div>
                    </div>
                    <h2>{data.name}</h2>
                    {
                        data.genres.map(item => <span key={item.id}> #{item.name}</span>)
                    }
                    <div className={styles.esrb}>
                        {
                            data.esrb_rating ? <p>ESRB: <span>{data.esrb_rating.name}</span></p> : <p>ESRB: <span>Not available</span></p>
                        }
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
                        <p onClick={() => navigate(-1)}>Go Back</p>
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