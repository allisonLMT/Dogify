import React, { useState } from 'react';
import styles from '../styles/heart.module.scss';
import { addFavorite, removeFavorite, findFavorite } from '../components/localStorageFavorites.js';



function Heart({ result }) {
    //conditionally render the type of heart (empty or full) depending on if it's in faves or not (will need a way to tell)
    //empty heart will add it to faves onClick and turn to full. Clicking on full heart will remove and change to empty.

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

    }

    return (

        <div>
            {favorite === -1 ?
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" className={styles.notFav} onClick={() => {toggleFavorite(false, result)}}>
                <path d="M24 41.95 21.95 40.1Q13.8 32.65 8.9 27.1Q4 21.55 4 15.85Q4 11.35 7.025 8.325Q10.05 5.3 14.5 5.3Q17.05 5.3 19.55 6.525Q22.05 7.75 24 10.55Q26.2 7.75 28.55 6.525Q30.9 5.3 33.5 5.3Q37.95 5.3 40.975 8.325Q44 11.35 44 15.85Q44 21.55 39.1 27.1Q34.2 32.65 26.05 40.1Z"/>
            </svg> :
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" className={styles.fav} onClick={() => {toggleFavorite(true, result)}}>
                <path d="M24 41.95 21.95 40.1Q13.8 32.65 8.9 27.1Q4 21.55 4 15.85Q4 11.35 7.025 8.325Q10.05 5.3 14.5 5.3Q17.05 5.3 19.55 6.525Q22.05 7.75 24 10.55Q26.2 7.75 28.55 6.525Q30.9 5.3 33.5 5.3Q37.95 5.3 40.975 8.325Q44 11.35 44 15.85Q44 21.55 39.1 27.1Q34.2 32.65 26.05 40.1Z"/>
            </svg>
            }
           
            
        </div>
    )
}

export default Heart;