import React from 'react';
import styles from '../styles/header.module.scss'


function Header() {

    return (
        <header className={styles.header}>
            {/* add a logo here */}
            <h1>Dogify!</h1>
        </header>
    )
}

export default Header;