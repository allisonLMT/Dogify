import React from 'react';
import styles from '../styles/pageAbout.module.scss';
import NavMenu from '../components/NavMenu';
import Footer from '../components/Footer';
import paw from '../images/paw.svg';
import openAI from '../images/open-ai.svg'


function PageAbout() {

    window.scrollTo(0, 0)

    return (
        <div className='page-container'>
            <NavMenu page={'about'}/>
            <div className='content-wrap'>
                    <section className={styles.dogify}>
                            <img src={paw} alt="Dogify logo" />
                        <div className={styles.about}>
                            <h2>About Dogify</h2>
                            <p>Dogify is an app that creates a story about a dog created by Allison Tredwell. It was built using React js and OpenAI API.</p>
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