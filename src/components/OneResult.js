import React from 'react';
import styles from '../styles/oneResult.module.scss';
import Heart from '../components/Heart';

function OneResult({ result, updateLocalFaves }) {

    //the format of the engine name (stored in model) is not the same as the format used in the URL and radio buttons
    //this reformats the model value so that the formats are consistent
    const formattedEngine = result.model.replace(':', '-');

    return (
        <article className={styles.oneResult}>
            <Heart result={result} updateLocalFaves={updateLocalFaves} />
            <section>
                <h3>Prompt:</h3>
                <p>{result.prompt}</p>
            </section>
            <section>
                <h3>Story:</h3>
                <p>{result.choices[0].text}</p>
            </section>
            <section>
                <h3>Engine:</h3>
                <p>{formattedEngine}</p>
            </section>
        </article>
    )
}

export default OneResult;