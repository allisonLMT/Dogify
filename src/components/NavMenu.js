import React, { useState, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/navMenu.module.scss';
import classes from 'classnames';
import paw from '../images/paw.svg';


function NavMenu({ page }) {

    const [ isOpen, setIsOpen ] = useState(false);
    
    // toggles the state on the navBurger, triggered onclick
    function handleToggle() {
        setIsOpen(!isOpen);
    };

    return (
        // <header className={styles.header}>
        //     <div className={styles.logoWrap}>
        //         <img src={paw} alt="paw icon" />
        //         <h1>Dogify!</h1>
        //     </div>
        // </header>

        <>
            <div className={styles.navBar} >
                <NavLink to='/#home' className={styles.siteTitle} onClick={() => { setIsOpen(false) } }>Dogify</NavLink>
                <div className={ classes( styles.navBurger, { [styles.open] : isOpen } ) } 
                    onClick={() => { handleToggle() } }>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div> 
                <nav className={styles.desktopNav}>
                    <NavLink to='/#home' className = { (page === 'home') ? styles.active : styles.inactive } >home</NavLink>
                    <NavLink to='/about' className = { (page === 'about') ? styles.active : styles.inactive }>about</NavLink>
                    <NavLink to='/favorites' className = { (page === 'favorites') ? styles.active : styles.inactive }>favorites</NavLink>
                </nav>
            </div>
            <nav className={ classes( styles.navMenu, { [styles.open] : isOpen }) }>
                <NavLink to='/#home'>home</NavLink>
                <NavLink to='/about'>about</NavLink>
                <NavLink to='/favorites' >favorites</NavLink>
            </nav>
        </>  


    )
}

export default NavMenu;