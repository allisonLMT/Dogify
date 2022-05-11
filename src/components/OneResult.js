import React from 'react';
import styles from '../styles/oneResult.module.scss';

function OneResult({ result }) {

    //needs to show the prompt and the result (at a minimum)

    //the format of the engine name (stored in model) is not the same as the format used in the URL and radio buttons
    //this reformats the model value so that the formats are consistent
    const formattedEngine = result.model.replace(':', '-');

    return (
        <article className={styles.oneResult}>
            <section>
                <h2>Prompt:</h2>
                <p>{result.prompt}</p>
            </section>
            <section>
                <h2>Response:</h2>
                <p>{result.choices[0].text}</p>
            </section>
            <section>
                <h2>Engine:</h2>
                <p>{formattedEngine}</p>
            </section>
        </article>
    )
}

export default OneResult;