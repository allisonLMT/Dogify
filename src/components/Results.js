import React from 'react';
import styles from '../styles/results.module.scss';
import OneResult from '../components/OneResult.js';

function Results({ results }) {

    //copies and then reverses the array before mapping the results (needs to display newest to oldest)
    const reversedResults = results.slice(0).reverse();
   

    return (
        <section className={styles.results}>
           {reversedResults.map(result => 
                <OneResult result={result} key={result.id}/>    
            )} 
        </section>
    )
}

export default Results;