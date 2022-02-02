import React from 'react';
import { Link } from 'react-router-dom';
// Styles
import styles from '../Styles/SearchBox.module.css';

const SearchBox = ({data}) => {
    return (
        <Link to={`/detaile/${data.id}`} className={styles.container}>
                <img className={styles.image} src={data.background_image} alt={data.name} />
                <p>{data.name}</p>
        </Link>
    );
};

export default SearchBox;