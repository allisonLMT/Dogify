import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getFavorites } from '../components/localStorageFavorites';
import NavMenu from '../components/NavMenu';
import Results from '../components/Results';
import styles from '../styles/pageFavorites.module.scss';
import Footer from '../components/Footer';

function PageFavorites () {
    // //keeps the content scrolled to the top as Favorites are added (otherwise it scrolls under the header)
    // const el = document.getElementsByClassName("content-wrap");
    // if (el !== null) {
    //     el.scrollTo = 0;
    // }
    window.scrollTo(0, 0);

    const storedFaves = getFavorites();
    
    //set a local list equal to the Favorites from storage,
    //this is the list the Results will be displayed from
    const [localFaves, setLocalFaves] = useState(storedFaves);

    function updateLocalFaves(favesFromStorage) {
        setLocalFaves(favesFromStorage);
    }

    return (
        <div className='page-container'>
            <NavMenu page={'favorites'}/>
                <div className='content-wrap'>
                    <div className={styles.favorites}>
                        <h2>Favorites</h2>
                        <div className={styles.resultsWrap}>
                            {( localFaves.length > 0) ? <Results results={localFaves} updateLocalFaves={updateLocalFaves}/> :
                                <p className={styles.none}>You don't have any favorites yet. Visit the <Link to="/">homepage</Link> to Dogify some stories! </p>}
                        </div>
                    </div>
                    
                </div>
            <Footer />
            
        </div>
    )
};

export default PageFavorites;