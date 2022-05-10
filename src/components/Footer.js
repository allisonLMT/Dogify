import React from 'react';
import styles from '../styles/footer.module.scss';


function Footer() {
    const d = new Date();
    const year = d.getFullYear(); 

    return (
        <div className={styles.footer}>
            <p>&copy;{year} Allison Tredwell</p>
        </div>
    )
}

export default Footer;