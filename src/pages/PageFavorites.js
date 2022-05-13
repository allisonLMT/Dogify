import React from 'react';
import Header from '../components/Header';
//import styles from '../styles/pageFavorites.module.scss';
import Footer from '../components/Footer';

function PageFavorites () {

   
    return (
        <div className='page-container'>
            <Header />
                <div className='content-wrap'>
                    <h2>Favorites</h2>
                </div>
            <Footer />
            
        </div>
    )
};

export default PageFavorites;