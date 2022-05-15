import React from 'react';
import styles from '../styles/results.module.scss';
import OneResult from '../components/OneResult.js';

function Results({ results, updateLocalFaves }) {

    return (
        <div className={styles.resultsWrap}>
            <section className={styles.results}>
            {results.map((result, i)=> 
                    <OneResult result={result} updateLocalFaves={updateLocalFaves} i={i} key={result.id}/>    
                )} 
            </section>
        </div>
    )
}

export default Results;