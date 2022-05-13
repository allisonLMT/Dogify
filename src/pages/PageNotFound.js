import React from 'react';
import NavMenu from '../components/NavMenu';
import styles from '../styles/pageNotFound.module.scss';
import Footer from '../components/Footer';

function PageNotFound () {

   
    return (
        <div className='page-container'>
            <NavMenu />
                <div className='content-wrap'>
                    {/* <h2 className={styles.notFound}>404 Error</h2>
                    <h3 className={styles.notFound}>Page not found.</h3> */}
                </div>
            <Footer />
            
        </div>
    )
};

export default PageNotFound;