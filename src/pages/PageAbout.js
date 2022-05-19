import React from 'react';
import { HashLink } from 'react-router-hash-link';
import styles from '../styles/pageAbout.module.scss';
import NavMenu from '../components/NavMenu';
import Footer from '../components/Footer';
import paw from '../images/paw.svg';
import openAI from '../images/open-ai.svg'


function PageAbout() {

    window.scrollTo(0, 0)

    return (
        <div className='page-container'>
            <HashLink to="/about#content" className="skip-to-content-link">Skip to content</HashLink>
            <NavMenu page={'about'}/>
            <div className='content-wrap' id='content'>
                    <section className={styles.dogify}>
                            <img src={paw} alt="Dogify logo" />
                        <div className={styles.about}>
                            <h2>About Dogify</h2>
                            <p>Dogify is an app that uses OpenAI to write a story about a dog and anything the user inputs. It was designed and developed by Allison Tredwell using React js and OpenAI API.</p>
                        </div>
                    </section>
                    <section className={styles.OpenAI}>
                            <img src={openAI} alt="OpenAI logo" />
                            <div className={styles.about}>
                            <h2>About OpenAI API</h2>
                                <p><a href="https://openai.com/api/">OpenAI's API</a> uses text prompts to produce natural language results.</p>
                            </div>
                    </section>
                </div>
            <Footer />
            
        </div>
    )
}

export default PageAbout;