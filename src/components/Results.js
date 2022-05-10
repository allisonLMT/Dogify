import React from 'react';
import styles from '../styles/results.module.scss';
import OneResult from '../components/OneResult.js';

function Results({ results }) {

//results need to be displayed newest to oldest (need to make a copy of the array, reverse then map it)
console.log(results)

    return (
        <section className={styles.results}>
           {results.map(result => 
                <OneResult result={result} />    
                
            )} 
        </section>
    )
}

export default Results;