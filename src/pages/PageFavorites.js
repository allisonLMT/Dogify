import React from 'react';
import NavMenu from '../components/NavMenu';
//import styles from '../styles/pageFavorites.module.scss';
import Footer from '../components/Footer';

function PageFavorites () {

   
    return (
        <div className='page-container'>
            <NavMenu page={'favorites'}/>
                <div className='content-wrap'>
                    <h2>Favorites</h2>
                </div>
            <Footer />
            
        </div>
    )
};

export default PageFavorites;