import React from 'react';
import styles from '../styles/oneResult.module.scss';
import Heart from '../components/Heart';

function OneResult({ result, updateLocalFaves }) {

    //takes the 'model' key (which is the engine used to get the result) and changes it to the format used in the Settings modal.
    //note that the format of the model value is not consistent (some use '-' and some use ':'), so search for substring is more consistent
    var formattedEngine;

    if (result.model.indexOf("curie") !== -1) {
        formattedEngine = "Curie";
    } else if (result.model.indexOf("davinci") !== -1) {
        formattedEngine = "DaVinci";
    } else if (result.model.indexOf("babbage") !== -1) {
        formattedEngine = "Babbage";
    } else if (result.model.indexOf("ada") !== -1) {
        formattedEngine = "Ada";
    };
   

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