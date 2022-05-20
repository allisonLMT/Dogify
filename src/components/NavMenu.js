import React, { useState } from 'react';
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

        <div className={styles.navWrap}>
            <nav className={styles.navBar} >
                <NavLink to='/' className={styles.siteTitle} onClick={() => { setIsOpen(false) } }>
                    <img src={paw} alt="Dogify logo" />
                    Dogify
                </NavLink>
                <div className={ classes( styles.navBurger, { [styles.open] : isOpen } ) } 
                    onClick={() => { handleToggle() } }>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div> 
                <div className={styles.desktopNav}>
                    <NavLink to='/' className = { (page === 'home') ? styles.active : styles.inactive } >home</NavLink>
                    <NavLink to='/favorites' className = { (page === 'favorites') ? styles.active : styles.inactive }>favorites</NavLink>
                    <NavLink to='/about' className = { (page === 'about') ? styles.active : styles.inactive }>about</NavLink>
                </div>
            </nav>
            <nav className={ classes( styles.navMenu, { [styles.open] : isOpen }) }>
                <NavLink to='/' onClick={() => { handleToggle() }} >home</NavLink>
                <NavLink to='/favorites' onClick={() => { handleToggle() }} >favorites</NavLink>
                <NavLink to='/about'onClick={() => { handleToggle() }} >about</NavLink>
            </nav>
        </div>  


    )
}

export default NavMenu;