import React from 'react';
import Header from '../components/Header';
//import styles from '../styles/pageNotFound.module.scss';
import Footer from '../components/Footer';

function PageNotFound () {

   
    return (
        <div className='page-container'>
            <Header />
                <div className='content-wrap'>
                    {/* <h2 className={styles.notFound}>404 Error</h2>
                    <h3 className={styles.notFound}>Page not found.</h3> */}
                </div>
            <Footer />
            
        </div>
    )
};

export default PageNotFound;