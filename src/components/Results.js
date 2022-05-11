import React from 'react';
import styles from '../styles/results.module.scss';
import OneResult from '../components/OneResult.js';

function Results({ prompt, results }) {

    //reverse the array before mapping the results (needs to display newest to oldest)
    
    console.log(results)

    return (
        <section className={styles.results}>
           {results.map(result => 
                <OneResult prompt={prompt} result={result} key={result.id}/>    
            )} 
        </section>
    )
}

export default Results;