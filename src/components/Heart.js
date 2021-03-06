import React, { useState, Fragment } from 'react';
import styles from '../styles/heart.module.scss';
import classes from 'classnames';
import { addFavorite, removeFavorite, findFavorite, getFavorites } from '../components/localStorageFavorites.js';


function Heart({ result, updateLocalFaves }) {

    //findFavorite(result) will return -1 if not a fav, or the index if it is there ( !== -1)
    const [favorite, setFavorite] = useState(findFavorite(result));

    function toggleFavorite(isFav, result) {

        if(isFav === false) {
            //not already in favorites
            addFavorite(result);
            setFavorite(true)
        } else {
            //in favorites already
            removeFavorite(result);
            setFavorite(-1)
        }
        //when a heart is clicked, update the the localFaves (useState on PageFavorites)
        if (updateLocalFaves !== undefined) {
            //when clicking on a Heart on the homepage, updateLocalFaves is undefined since the fnc is passed from PageFavorites down the chain to Heart. 
            //This will only updateLocalFaves when on the Favorites page. (Does not need to be updated while on Home, since the the local faves are only used to render the list on the Favorites Page. It will update itself upon load.)
            updateLocalFaves(getFavorites());
        }
    }

    return (
    <>
        {favorite === -1 ?
        <svg role="img" aria-labelledby="notFavorite" xmlns="http://www.w3.org/2000/svg" height="48" width="48" alt="add to Favorites" 
            className={classes(styles.notFav, styles.heart)} 
            onClick={() => {toggleFavorite(false, result)}}>
            <title id="notFavorite">Not In Favorites</title>
            <path d="M24 41.95 21.95 40.1Q13.8 32.65 8.9 27.1Q4 21.55 4 15.85Q4 11.35 7.025 8.325Q10.05 5.3 14.5 5.3Q17.05 5.3 19.55 6.525Q22.05 7.75 24 10.55Q26.2 7.75 28.55 6.525Q30.9 5.3 33.5 5.3Q37.95 5.3 40.975 8.325Q44 11.35 44 15.85Q44 21.55 39.1 27.1Q34.2 32.65 26.05 40.1Z"/>
        </svg> :
        <svg role="img" aria-labelledby="favorite" xmlns="http://www.w3.org/2000/svg" height="48" width="48" alt="remove from Favorites" 
            className={classes(styles.fav, styles.heart)} 
            onClick={() => {toggleFavorite(true, result)}}>
            <title id="favorite">In Favorites</title>
            <path d="M24 41.95 21.95 40.1Q13.8 32.65 8.9 27.1Q4 21.55 4 15.85Q4 11.35 7.025 8.325Q10.05 5.3 14.5 5.3Q17.05 5.3 19.55 6.525Q22.05 7.75 24 10.55Q26.2 7.75 28.55 6.525Q30.9 5.3 33.5 5.3Q37.95 5.3 40.975 8.325Q44 11.35 44 15.85Q44 21.55 39.1 27.1Q34.2 32.65 26.05 40.1Z"/>
        </svg>
        }
    </>
    )
}

export default Heart;