import React from 'react';
import styles from '../styles/oneResult.module.scss';
import Heart from '../components/Heart';

function OneResult({ result, updateLocalFaves }) {

    //takes the 'model' key (which is the engine used to get the result) and changes it to the format used in the Settings modal.
    var formattedEngine;

    switch (result.model) {
        case 'text-davinci:002':
            formattedEngine = "DaVinci";
            break;
        case 'text-curie:001':
            formattedEngine = "Curie";
            break;
        case 'text-babbage:001':
            formattedEngine = "Babbage";
            break;
        case 'text-ada:001':
            formattedEngine = "Ada";
        break;
        default:
            formattedEngine = '';
    }
    

    return (
        <article className={styles.oneResult}>
            <Heart result={result} updateLocalFaves={updateLocalFaves}/>
            <section className={styles.prompt}>
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