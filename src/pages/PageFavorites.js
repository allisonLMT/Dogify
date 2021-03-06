import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { getFavorites } from '../components/localStorageFavorites';
import NavMenu from '../components/NavMenu';
import Results from '../components/Results';
import styles from '../styles/pageFavorites.module.scss';
import Footer from '../components/Footer';

function PageFavorites () {
   
    window.scrollTo(0, 0);

    const storedFaves = getFavorites();
    
    //set a local list equal to the Favorites from storage,
    //this is the list the Results will be displayed from
    //Favorites are stored in the order that they are added
    const [localFaves, setLocalFaves] = useState(storedFaves);

    function updateLocalFaves(favesFromStorage) {
        setLocalFaves(favesFromStorage);
    }

    return (
        <div className='page-container'>
            <HashLink to="/favorites#content" className="skip-to-content-link">Skip to content</HashLink>
            <NavMenu page={'favorites'}/>
                <div className='content-wrap' id='content'>
                    <div className={styles.favorites}>
                        <h2>Favorites</h2>
                            {( localFaves.length > 0) ? <Results results={localFaves} updateLocalFaves={updateLocalFaves}/> :
                                <p className={styles.none}>You don't have any favorites yet. Visit the <Link to="/">homepage</Link> to Dogify some stories! </p>}
                        </div>
                </div>
            <Footer />
            
        </div>
    )
};

export default PageFavorites;