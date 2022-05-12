import React from 'react';
import styles from '../styles/header.module.scss';
import paw from '../images/paw.svg';


function Header() {

    return (
        <header className={styles.header}>
            <img src={paw} alt="paw icon" />
            <h1>Dogify!</h1>
        </header>
    )
}

export default Header;