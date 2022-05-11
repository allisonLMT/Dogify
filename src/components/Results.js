import React from 'react';
import styles from '../styles/results.module.scss';
import OneResult from '../components/OneResult.js';

function Results({ results }) {

    return (
        <section className={styles.results}>
           {results.map(result => 
                <OneResult result={result} key={result.id}/>    
            )} 
        </section>
    )
}

export default Results;