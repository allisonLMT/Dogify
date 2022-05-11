import React from 'react';
import styles from '../styles/footer.module.scss';


function Footer() {
    const d = new Date();
    const year = d.getFullYear(); 

    return (
        <div className={styles.footer}>
            <a href="https://atredwell.com/">&copy;{year} Allison Tredwell</a>
        </div>
    )
}

export default Footer;