import React from 'react';
import { HashLink } from 'react-router-hash-link';
import NavMenu from '../components/NavMenu';
import styles from '../styles/pageNotFound.module.scss';
import Footer from '../components/Footer';
import classNames from 'classnames';

function PageNotFound () {

   
    return (
        <div className='page-container'>
            <HashLink to="#content" className="skip-to-content-link">Skip to content</HashLink>
            <NavMenu />
                <div className={classNames('content-wrap', styles.notFound)} id="content">
                    <h2>404 Error</h2>
                    <p>Page not found.</p>
                </div>
            <Footer />
        </div>
    )
};

export default PageNotFound;