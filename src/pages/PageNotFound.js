import React from 'react';
import { HashLink } from 'react-router-hash-link';
import NavMenu from '../components/NavMenu';
import styles from '../styles/pageNotFound.module.scss';
import Footer from '../components/Footer';

function PageNotFound () {

   
    return (
        <div className='page-container'>
            <HashLink to="#content" className="skip-to-content-link">Skip to content</HashLink>
            <NavMenu />
                <div className='content-wrap' id="content">
                    <h2 className={styles.notFound}>404 Error</h2>
                    <h3 className={styles.notFound}>Page not found.</h3>
                </div>
            <Footer />
        </div>
    )
};

export default PageNotFound;