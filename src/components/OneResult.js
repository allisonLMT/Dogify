import React from 'react';
import styles from '../styles/oneResult.module.scss';

function OneResult({ result }) {

    //needs to show the prompt and the result (at a minimum)

    return (
        <article className={styles.oneResult} key={result.id}>
            <h2>Prompt</h2>
            <h2>Response</h2>
            <p>{result.choices[0].text}</p>
        </article>
    )
}

export default OneResult;