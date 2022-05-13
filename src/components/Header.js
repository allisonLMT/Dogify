import React from 'react';
import styles from '../styles/header.module.scss';
import paw from '../images/paw.svg';


function Header() {

    return (
        <header className={styles.header}>
            <div className={styles.logoWrap}>
                <img src={paw} alt="paw icon" />
                <h1>Dogify!</h1>
            </div>
        </header>
    )
}

export default Header;