import React from 'react';
import styles from '../styles/oneResult.module.scss';

function OneResult({ prompt, result }) {

    //needs to show the prompt and the result (at a minimum)

    return (
        <article className={styles.oneResult} key={result.id}>
            <section>
                <h2>Prompt:</h2>
                <p>{prompt}</p>
            </section>
            <section>
                <h2>Response:</h2>
                <p>{result.choices[0].text}</p>
            </section>
        </article>
    )
}

export default OneResult;